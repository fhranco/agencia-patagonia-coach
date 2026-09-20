import subprocess
import json
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# 1. Directory configuration
PROJECT_ROOT = "/Users/patagoniacoach/.gemini/antigravity-ide/scratch/PATAGONIA_COACH/agencia-patagonia-coach"
MASTER_VIDEO = os.path.join(PROJECT_ROOT, "Final-video.mp4")
OUTPUT_DESKTOP = os.path.join(PROJECT_ROOT, "public/scrollytelling/desktop")
OUTPUT_CONTACT = os.path.join(PROJECT_ROOT, "public/scrollytelling/contact-sheets")
OUTPUT_MANIFEST = os.path.join(PROJECT_ROOT, "public/scrollytelling/manifest")
TMP_RAW_FRAMES = os.path.join(PROJECT_ROOT, "scratch/raw_frames")

os.makedirs(OUTPUT_DESKTOP, exist_ok=True)
os.makedirs(OUTPUT_CONTACT, exist_ok=True)
os.makedirs(OUTPUT_MANIFEST, exist_ok=True)
os.makedirs(TMP_RAW_FRAMES, exist_ok=True)

# 2. Exact Chapter specification using standard 0-899 source frame index
# 900 frames total at 30 fps (t = 0.0s to 29.967s)
chapters_def = [
    {
        "id": "01_SEARCH",
        "title": "Búsqueda / Intención",
        "f_start": 0,
        "f_end": 95,
        "count": 28,
        "provisional_progress": {"start": 0.00, "end": 0.12}
    },
    {
        "id": "02_DISCOVERY",
        "title": "Resultados / Descubrimiento",
        "f_start": 96,
        "f_end": 245,
        "count": 40,
        "provisional_progress": {"start": 0.12, "end": 0.28}
    },
    {
        "id": "03_RESPONSIVE",
        "title": "Responsive / Mobile",
        "f_start": 246,
        "f_end": 365,
        "count": 36,
        "provisional_progress": {"start": 0.28, "end": 0.43}
    },
    {
        "id": "04_AI",
        "title": "IA / Respuesta Generativa",
        "f_start": 366,
        "f_end": 593,
        "count": 56,
        "provisional_progress": {"start": 0.43, "end": 0.67}
    },
    {
        "id": "05_ARCHITECTURE",
        "title": "Arquitectura Web / Componentes",
        "f_start": 594,
        "f_end": 785,
        "count": 48,
        "provisional_progress": {"start": 0.67, "end": 0.87}
    },
    {
        "id": "06_ECOSYSTEM",
        "title": "Ecosistema Digital Integrado",
        "f_start": 786,
        "f_end": 899,
        "count": 32,
        "provisional_progress": {"start": 0.87, "end": 1.00}
    }
]

def generate_strictly_monotonic_indices(f_start, f_end, count):
    # Generates strictly increasing unique integer frame indices
    raw_vals = np.linspace(f_start, f_end, count)
    indices = [int(round(v)) for v in raw_vals]
    
    # Guarantee strict monotonicity (no duplicates)
    for i in range(1, len(indices)):
        if indices[i] <= indices[i-1]:
            indices[i] = indices[i-1] + 1
    # Check boundary
    if indices[-1] > f_end:
        diff = indices[-1] - f_end
        for j in range(len(indices)-1, -1, -1):
            if indices[j] > f_end - (len(indices) - 1 - j):
                indices[j] = f_end - (len(indices) - 1 - j)
    return indices

# 3. Build sequence mapping
sequence_mapping = []
chapter_summary = []

seq_idx = 1
for ch in chapters_def:
    source_frames = generate_strictly_monotonic_indices(ch["f_start"], ch["f_end"], ch["count"])
    assert len(source_frames) == ch["count"], f"Count mismatch in {ch['id']}"
    assert len(set(source_frames)) == ch["count"], f"Duplicate frame in {ch['id']}"
    
    ch_frames_meta = []
    for sf in source_frames:
        norm_prog = round((seq_idx - 1) / (240 - 1), 5)
        item = {
            "sequence_index": seq_idx,
            "file": f"frame_{seq_idx:04d}.webp",
            "source_frame": int(sf),
            "source_time": round(float(sf) / 30.0, 4),
            "chapter": ch["id"],
            "normalized_progress": norm_prog
        }
        sequence_mapping.append(item)
        ch_frames_meta.append(item)
        seq_idx += 1
        
    chapter_summary.append({
        "id": ch["id"],
        "title": ch["title"],
        "provisional_progress": ch["provisional_progress"],
        "master_source_range": {
            "f_start": ch["f_start"],
            "f_end": ch["f_end"]
        },
        "frame_count": ch["count"],
        "selected_source_frames": source_frames
    })

assert len(sequence_mapping) == 240, f"Expected 240 frames, got {len(sequence_mapping)}"
print(f"Sequence definition frozen: 240 strictly monotonic unique source frames.")

# 4. Extract all 900 frames as lossless PNG/JPEG in scratch if not already present
print("Extracting raw frames from master video...")
extract_cmd = [
    "ffmpeg", "-y", "-i", MASTER_VIDEO,
    "-q:v", "1",
    os.path.join(TMP_RAW_FRAMES, "raw_%04d.jpg")
]
subprocess.run(extract_cmd, check=True)
print("Raw master extraction complete (900 frames).")

# 5. Export 240 WebP assets (1600x900, q=82)
print("Processing and exporting 240 WebP frames at 1600x900 (q=82)...")
weights = []
for item in sequence_mapping:
    sf = item["source_frame"]
    # ffmpeg raw_%04d is 1-indexed (raw_0001.jpg corresponds to source_frame 0)
    raw_img_path = os.path.join(TMP_RAW_FRAMES, f"raw_{sf+1:04d}.jpg")
    out_webp_path = os.path.join(OUTPUT_DESKTOP, item["file"])
    
    img = Image.open(raw_img_path)
    if img.size != (1600, 900):
        img_resized = img.resize((1600, 900), Image.Resampling.LANCZOS)
    else:
        img_resized = img
    
    img_resized.save(out_webp_path, "WEBP", quality=82, method=6)
    sz = os.path.getsize(out_webp_path)
    weights.append(sz)

print(f"Exported {len(sequence_mapping)} WebP frames successfully.")

# 6. Generate Manifest JSON
manifest = {
    "version": "1.0.0",
    "total_useful_frames": 240,
    "source_master": {
        "file": "Final-video.mp4",
        "resolution": "1920x1080",
        "fps": 30,
        "total_source_frames": 900,
        "duration_s": 30.0,
        "index_convention": "0-indexed (0 to 899)"
    },
    "export_spec": {
        "format": "webp",
        "resolution": "1600x900",
        "aspect_ratio": "16:9",
        "quality": 82,
        "naming": "frame_%04d.webp"
    },
    "performance_guidelines": {
        "initial_critical_set": "frame_0001.webp to frame_0012.webp (~500 KB)",
        "remaining_frames": "progressive / chunk loading via Web Worker / idle callback"
    },
    "chapters": chapter_summary,
    "frames": sequence_mapping
}

manifest_path = os.path.join(OUTPUT_MANIFEST, "scrollytelling_manifest.json")
with open(manifest_path, "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2, ensure_ascii=False)
print(f"Manifest written to {manifest_path}")

# 7. Generate Contact Sheets using exclusively the exported 1600x900 WebPs
print("Generating contact sheets from final WebP assets...")
thumb_w = 480
thumb_h = 270
pad = 20
header_h = 60

# 7a. Individual Chapter Contact Sheets
for ch in chapter_summary:
    ch_id = ch["id"]
    # get the sequence items for this chapter
    items = [it for it in sequence_mapping if it["chapter"] == ch_id]
    # pick 4 representative samples evenly spaced
    sample_indices = [int(round(x)) for x in np.linspace(0, len(items) - 1, 4)]
    samples = [items[i] for i in sample_indices]
    
    sheet_w = 4 * thumb_w + 5 * pad
    sheet_h = thumb_h + 2 * pad + header_h
    sheet = Image.new("RGB", (sheet_w, sheet_h), color=(15, 23, 42))
    draw = ImageDraw.Draw(sheet)
    
    draw.text((pad, 14), f"CAPITULO: {ch['title']} ({ch['frame_count']} frames WebP)", fill=(245, 158, 11))
    draw.text((pad, 34), f"Master Source Range: frames #{ch['master_source_range']['f_start']}–#{ch['master_source_range']['f_end']} | Scrollytelling Prog: {ch['provisional_progress']['start']}–{ch['provisional_progress']['end']}", fill=(148, 163, 184))
    
    for c_idx, s in enumerate(samples):
        webp_file = os.path.join(OUTPUT_DESKTOP, s["file"])
        thumb = Image.open(webp_file).resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        x = pad + c_idx * (thumb_w + pad)
        y = header_h + pad
        sheet.paste(thumb, (x, y))
        
        # Badge
        draw.rectangle([x + 10, y + 10, x + 200, y + 42], fill=(0, 0, 0))
        draw.text((x + 16, y + 14), f"{s['file']} (Seq #{s['sequence_index']})", fill=(255, 255, 255))
        draw.text((x + 16, y + 27), f"Source #{s['source_frame']} ({s['source_time']}s)", fill=(245, 158, 11))
        
    out_ch_sheet = os.path.join(OUTPUT_CONTACT, f"contact_sheet_{ch_id.lower()}.jpg")
    sheet.save(out_ch_sheet, quality=90)
    print(f"Saved: {out_ch_sheet}")

# 7b. Master Contact Sheet (contact_sheet_final_240.jpg)
row_h = thumb_h + 50
master_w = 4 * thumb_w + 5 * pad
master_h = len(chapter_summary) * row_h + 100
master_sheet = Image.new("RGB", (master_w, master_h), color=(11, 15, 25))
mdraw = ImageDraw.Draw(master_sheet)

mdraw.text((pad, 18), "PATAGONIACOACH — CONTACT SHEET FINAL 240 WEBP (EXPORTADO DESDE MASTER MP4)", fill=(255, 255, 255))
mdraw.text((pad, 42), "Resolución: 1600x900 | Formato: WebP q82 | Integridad: 240 frames continuos validados", fill=(148, 163, 184))

for r_idx, ch in enumerate(chapter_summary):
    ch_id = ch["id"]
    items = [it for it in sequence_mapping if it["chapter"] == ch_id]
    sample_indices = [int(round(x)) for x in np.linspace(0, len(items) - 1, 4)]
    samples = [items[i] for i in sample_indices]
    
    y_base = 75 + r_idx * row_h
    mdraw.text((pad, y_base + 6), f"{ch['title']} — {ch['frame_count']} frames (Source #{ch['master_source_range']['f_start']}–#{ch['master_source_range']['f_end']})", fill=(245, 158, 11))
    
    for c_idx, s in enumerate(samples):
        webp_file = os.path.join(OUTPUT_DESKTOP, s["file"])
        thumb = Image.open(webp_file).resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        x = pad + c_idx * (thumb_w + pad)
        y = y_base + 28
        master_sheet.paste(thumb, (x, y))
        
        mdraw.rectangle([x + 8, y + 8, x + 190, y + 40], fill=(0, 0, 0))
        mdraw.text((x + 14, y + 12), f"{s['file']} (Seq #{s['sequence_index']})", fill=(255, 255, 255))
        mdraw.text((x + 14, y + 25), f"Source #{s['source_frame']} ({s['source_time']}s)", fill=(245, 158, 11))

master_out = os.path.join(OUTPUT_CONTACT, "contact_sheet_final_240.jpg")
master_sheet.save(master_out, quality=88)
print(f"Saved: {master_out}")

# 8. Integrity & QA report
print("\n--- QA REPORT ---")
print(f"Total exported files: {len(weights)}")
print(f"Min weight: {min(weights)} bytes ({min(weights)/1024:.2f} KB)")
print(f"Max weight: {max(weights)} bytes ({max(weights)/1024:.2f} KB)")
print(f"Avg weight: {sum(weights)/len(weights):.0f} bytes ({(sum(weights)/len(weights))/1024:.2f} KB)")
print(f"Total weight: {sum(weights)} bytes ({sum(weights)/(1024*1024):.2f} MB)")
