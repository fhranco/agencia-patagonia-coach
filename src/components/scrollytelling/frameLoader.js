/**
 * FrameLoader with Dynamic Window Cache
 * 
 * Target: 240 WebP frames (1600x900)
 * Memory Management:
 * - High-speed Image object cache limited to a dynamic window around current index.
 * - Sliding window: ~8-12 backward + current + ~16 forward (max ~28-32 decoded images).
 * - Eviction mechanism prevents unbounded memory growth.
 * - Concurrency control for network prefetch (max 4-6 parallel requests).
 */

export class FrameLoader {
  constructor({
    totalFrames = 240,
    basePath = '/scrollytelling/desktop',
    windowBehind = 10,
    windowAhead = 16,
    maxConcurrent = 5,
    onFrameReady = null,
  } = {}) {
    this.totalFrames = totalFrames;
    this.basePath = basePath;
    this.windowBehind = windowBehind;
    this.windowAhead = windowAhead;
    this.maxConcurrent = maxConcurrent;
    this.onFrameReady = onFrameReady;

    // Cache map: frameIndex (1..240) -> { img: HTMLImageElement, loaded: boolean }
    this.cache = new Map();
    // Network queue: Set of frame indices pending fetch
    this.fetchQueue = [];
    this.activeFetches = 0;
    this.lastRequestedIndex = 1;
    this.criticalLoaded = false;
  }

  getFrameUrl(index) {
    const padded = String(index).padStart(4, '0');
    return `${this.basePath}/frame_${padded}.webp`;
  }

  /**
   * Load critical initial frames (1..12) immediately
   */
  async loadInitialSet(count = 12) {
    const criticalPromises = [];
    for (let i = 1; i <= Math.min(count, this.totalFrames); i++) {
      criticalPromises.push(this.preloadFrame(i, true));
    }
    await Promise.race([
      this.preloadFrame(1, true), // Frame 1 first paint guarantee
      Promise.all(criticalPromises)
    ]);
    this.criticalLoaded = true;
  }

  /**
   * Update active window based on current scroll frame index
   */
  updateWindow(currentIndex) {
    this.lastRequestedIndex = currentIndex;
    const startWindow = Math.max(1, currentIndex - this.windowBehind);
    const endWindow = Math.min(this.totalFrames, currentIndex + this.windowAhead);

    // 1. Evict frames outside the active window
    for (const [idx, entry] of this.cache.entries()) {
      if (idx < startWindow || idx > endWindow) {
        if (entry.img) {
          entry.img.src = ''; // Release decoded GPU buffer
          entry.img.onload = null;
          entry.img.onerror = null;
        }
        this.cache.delete(idx);
      }
    }

    // 2. Queue missing frames inside active window
    // Prioritize forward direction first, then backward
    const desired = [];
    for (let i = currentIndex; i <= endWindow; i++) {
      if (!this.cache.has(i)) desired.push(i);
    }
    for (let i = currentIndex - 1; i >= startWindow; i--) {
      if (!this.cache.has(i)) desired.push(i);
    }

    // Update fetch queue with priority
    this.fetchQueue = desired;
    this.processQueue();
  }

  preloadFrame(index, highPriority = false) {
    if (this.cache.has(index)) {
      return Promise.resolve(this.cache.get(index).img);
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      const entry = { img, loaded: false };
      this.cache.set(index, entry);

      img.onload = () => {
        entry.loaded = true;
        if (this.onFrameReady) {
          this.onFrameReady(index, img);
        }
        resolve(img);
      };

      img.onerror = (err) => {
        this.cache.delete(index);
        reject(err);
      };

      img.src = this.getFrameUrl(index);
    });
  }

  processQueue() {
    while (this.activeFetches < this.maxConcurrent && this.fetchQueue.length > 0) {
      const nextIdx = this.fetchQueue.shift();
      if (!nextIdx || this.cache.has(nextIdx)) continue;

      this.activeFetches++;
      this.preloadFrame(nextIdx)
        .catch(() => {})
        .finally(() => {
          this.activeFetches--;
          this.processQueue();
        });
    }
  }

  /**
   * Get image for drawing. Returns image if loaded, or nearest fallback image.
   */
  getFrame(targetIndex) {
    const entry = this.cache.get(targetIndex);
    if (entry && entry.loaded && entry.img) {
      return entry.img;
    }

    // Fallback: search nearest loaded frame in cache
    let nearestImg = null;
    let minDiff = Infinity;

    for (const [idx, item] of this.cache.entries()) {
      if (item.loaded && item.img) {
        const diff = Math.abs(idx - targetIndex);
        if (diff < minDiff) {
          minDiff = diff;
          nearestImg = item.img;
        }
      }
    }

    return nearestImg;
  }

  getLoadedCount() {
    let count = 0;
    for (const item of this.cache.values()) {
      if (item.loaded) count++;
    }
    return count;
  }

  destroy() {
    this.fetchQueue = [];
    for (const entry of this.cache.values()) {
      if (entry.img) {
        entry.img.src = '';
        entry.img.onload = null;
        entry.img.onerror = null;
      }
    }
    this.cache.clear();
  }
}
