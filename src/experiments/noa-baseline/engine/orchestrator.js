import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { noaAsset, loadImage } from "./assets.js";
import { ARTIST, BIOGRAPHY, STUDY_NOTES, DISCIPLINES } from "./data.js";
import FieldbookMotion from "./geometry.js";
import StudioScore from "./score.js";
import StudioArrival from "./arrival.js";
import { StudioCardFinish, paintStudyBack } from "./cardFinish.js";
import { createAtelierArtwork } from "./ribbon.js";
import { createEntranceTrails, createSurfaceDetails, createBiographyAtmosphere, createStudyAtmosphere, createPortraitDissolve } from "./atmosphere.js";
import { createStudioGallery } from "./gallery.js";
import { createStudioLoader } from "./loader.js";
import { initSableDock } from "./dock.js";
import { initStudioAtelier } from "./atelier.js";
import { StudioDetailTransition, renderStudyTitle, renderStudyNotes } from "./modalTransition.js";

gsap.registerPlugin(ScrollTrigger);

export function initNoaBaseline(rootElement) {
  if (!rootElement) return () => {};

  // Attach global instances for reference script compatibility
  window.THREE = THREE;
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.Lenis = Lenis;
  window.StudioScore = StudioScore;
  window.FieldbookMotion = FieldbookMotion;
  window.StudioArrival = StudioArrival;
  window.StudioCardFinish = StudioCardFinish;
  window.paintStudyBack = paintStudyBack;
  window.BIOGRAPHY = BIOGRAPHY;
  window.STUDY_NOTES = STUDY_NOTES;
  window.createAtelierArtwork = createAtelierArtwork;
  window.createEntranceTrails = createEntranceTrails;
  window.createSurfaceDetails = createSurfaceDetails;
  window.createBiographyAtmosphere = createBiographyAtmosphere;
  window.createStudyAtmosphere = createStudyAtmosphere;
  window.createPortraitDissolve = createPortraitDissolve;
  window.createStudioLoader = createStudioLoader;
  window.createStudioGallery = createStudioGallery;
  window.StudioDetailTransition = StudioDetailTransition;
  window.renderStudyTitle = renderStudyTitle;
  window.renderStudyNotes = renderStudyNotes;

  const S = StudioScore;
  const $ = selector => rootElement.querySelector(selector) || document.querySelector(selector);
  const $$ = selector => (rootElement.querySelectorAll(selector).length ? rootElement.querySelectorAll(selector) : document.querySelectorAll(selector));

  const num = i => String(i + 1).padStart(2, "0");
  const artist = ARTIST;
  const projects = STUDY_NOTES.slice(0, 8).map((p, i) => ({
    id: "study-" + (i + 1),
    number: num(i),
    title: p.titleLines ? p.titleLines.join(" ") : p.title,
    category: p.label || "Digital sculpture",
    short: p.short || p.description.slice(0, 50),
    alt: (p.titleLines ? p.titleLines.join(" ") : p.title) + ", " + (p.label || "Digital sculpture"),
    ...p
  }));

  const paths = projects.map((p, i) => noaAsset("assets/selected-motion/" + num(i) + ".png"));
  const sources = paths;
  const practicePaths = ["01-magnetic","02-filament","03-kinetic","04-mechanism","05-architecture","06-typography","07-portrait","08-botanical","09-landscape","10-optics"].map(name => noaAsset("assets/practice/" + name + ".png"));

  const extraStudies = [
    ["Magnetic Field","PARTICLE SCULPTURE","Iron beads gather around an impossible void."],
    ["Lines of Light","LIGHT INSTALLATION","Fine luminous filaments draw a volume in space."],
    ["An Instrument for Stillness","KINETIC DESIGN","Brass rings and suspended keys find their balance."],
    ["Parts of a Whole","CERAMIC MECHANISM","A quiet machine, held apart to reveal its rhythm."],
    ["A Stairway Elsewhere","SPATIAL STUDY","Alabaster steps circle a doorway suspended above the clouds."],
    ["And Then","GLASS TYPOGRAPHY","An amber ampersand catches the light between two ideas."],
    ["Layers of Someone","PAPER PORTRAIT","A profile takes shape through a sequence of paper contours."],
    ["An Unlikely Growth","GLASS BOTANICAL","Opaline leaves and copper stems imagine another kind of nature."]
  ].map(([title, category, short], i) => ({
    id: "tunnel-" + i,
    title,
    category,
    short,
    alt: short,
    description: short,
    detail: "",
    year: "2026",
    ...STUDY_NOTES[i + 8]
  }));

  const studyProjects = [...projects, ...extraStudies];
  const studyPaths = [...paths, ...practicePaths.slice(0, 8)];

  const biographyActionSource = noaAsset("assets/biography-action/noa-vale-camera.png");
  const motionSources = Object.fromEntries(projects.map((p, i) => [p.id, noaAsset("assets/selected-motion/" + num(i) + ".mp4")]));

  // Populate dynamic DOM fields
  $$("[data-artist-name], .artist-name").forEach(e => e.textContent = artist.name);
  $$(".monogram").forEach(el => el.firstChild && (el.firstChild.nodeValue = artist.initials));

  const artistReading = $("#artist-reading");
  if (artistReading && artistReading.children.length === 0) {
    BIOGRAPHY.forEach(note => {
      const article = document.createElement("article");
      article.className = "bio-note bio-note--" + note.layout;
      const label = document.createElement("p");
      label.className = "micro";
      label.textContent = note.label;
      const heading = document.createElement("h3");
      heading.textContent = note.title.join(" ");
      const lead = document.createElement(note.layout === "manifesto" ? "blockquote" : "p");
      lead.className = "bio-lead";
      lead.textContent = note.lead;
      const body = document.createElement("p");
      body.textContent = note.body;
      const detail = document.createElement("div");
      detail.className = "bio-detail";
      if (note.specimen) {
        const from = document.createElement("span"), to = document.createElement("strong");
        from.textContent = note.specimen.from;
        to.textContent = "↳ " + note.specimen.to;
        detail.append(from, to);
      }
      if (note.signature) {
        const signed = document.createElement("cite");
        signed.textContent = note.signature;
        detail.append(signed);
      }
      if (note.mediums) {
        note.mediums.forEach(word => {
          const medium = document.createElement("span");
          medium.textContent = word;
          detail.append(medium);
        });
      }
      const foot = document.createElement("p");
      foot.className = "micro";
      foot.textContent = note.foot;
      article.append(label, heading, lead, body, detail, foot);
      artistReading.append(article);
    });
  }

  // Populate hitareas
  const workHitareas = $("#work-hitareas");
  let workButtons = [];
  if (workHitareas && workHitareas.children.length === 0) {
    workButtons = projects.map((p, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.project = i;
      b.dataset.title = p.title;
      b.setAttribute("aria-label", "Open " + p.title + ", " + p.category);
      b.textContent = p.title;
      workHitareas.append(b);
      return b;
    });
  } else if (workHitareas) {
    workButtons = Array.from(workHitareas.querySelectorAll("button"));
  }

  // Populate static works
  const staticWorks = $("#static-works");
  if (staticWorks && staticWorks.children.length === 0) {
    studyProjects.forEach((p, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.project = i;
      b.setAttribute("aria-label", "Open " + p.title);
      const img = document.createElement("img");
      img.src = studyPaths[i];
      img.alt = p.alt || "";
      img.loading = "lazy";
      const label = document.createElement("span");
      label.textContent = num(i) + " / " + p.title;
      b.append(img, label);
      staticWorks.append(b);
    });
  }

  let active = 0, currentStudy = -1, lastDetail = -1, ready = false, staticMode = false;
  let lenis = null, trigger = null, gallery = null, returnFocus = null, savedScroll = 0, projectIndex = 0;
  let entranceDust = null, entranceEcho = null, portraitDissolve = null;
  let score = 0;

  function updateCurrent(i) {
    active = i;
    const numEl = $("#current-number"), catEl = $("#current-category"), titleEl = $("#current-title");
    if (numEl) numEl.textContent = num(i);
    if (catEl) catEl.textContent = projects[i].category;
    if (titleEl) titleEl.textContent = projects[i].title;
    const openBtn = $("#open-current");
    if (openBtn) openBtn.setAttribute("aria-label", "View " + projects[i].title);
    document.body.dataset.current = num(i);
  }
  updateCurrent(StudioArrival.FIRST);

  function positionHitAreas() {
    const stage = $("#stage");
    if (!stage || !workButtons.length) return;
    const W = stage.clientWidth, H = stage.clientHeight;
    S.workRects(W, H).forEach((r, i) => {
      if (workButtons[i]) {
        Object.assign(workButtons[i].style, {
          left: r.cx + "px",
          top: r.cy + "px",
          width: r.width + "px",
          height: r.height + "px"
        });
      }
    });
  }

  function setDetail(i) {
    if (i === lastDetail) return;
    lastDetail = i;
    window.StudioAtelier?.setStep(i);
    const pr = $("#practice");
    if (pr) pr.dataset.step = String(i);
  }

  const outlineGroup = $("#portrait-selected-lines");
  const portraitSoft = $("#portrait-soft"), portraitContrast = $("#portrait-contrast");
  const portraitFigure = $("#portrait-figure"), portraitImage = $("#maker-portrait");
  const portraitCaption = $("#portrait-caption"), portraitSignature = $("#portrait-signature");
  const portraitQuote = $("#portrait-quote"), signature = $("#portal-signature");
  const artistGuide = $("#artist-guide"), worksGuide = $("#works-guide");
  const guideImages = $$(".section-guide img");

  let drawingPaths = [], pathLengths = [], strokeSpans = [];

  function measurePortraitPaths() {
    if (!outlineGroup) return;
    drawingPaths = [...outlineGroup.querySelectorAll(".portrait-selected")];
    pathLengths = drawingPaths.map(p => p.getTotalLength?.() || 100);
    const total = pathLengths.reduce((sum, len) => sum + len, 0) || 1;
    let cursor = 0;
    strokeSpans = pathLengths.map(length => {
      const start = cursor / total;
      cursor += length;
      return [start, cursor / total];
    });
  }
  measurePortraitPaths();

  async function loadPortraitContour() {
    try {
      const response = await fetch(noaAsset("assets/portraits/noa-vale-fullbody-contour.svg"));
      if (!response.ok) throw new Error("Contour request failed");
      const source = new DOMParser().parseFromString(await response.text(), "image/svg+xml");
      const paths = [...source.querySelectorAll("path")];
      if (!paths.length) throw new Error("Contour is empty");
      outlineGroup.replaceChildren(...paths.map(path => {
        const node = document.importNode(path, true);
        node.removeAttribute("id");
        node.setAttribute("class", "portrait-selected");
        node.setAttribute("pathLength", "1");
        return node;
      }));
      measurePortraitPaths();
    } catch (e) {
      // embedded SVG is already in DOM as fallback
    }
  }

  let stageSize = { w: window.innerWidth, h: window.innerHeight };
  const tint = (a, b, t) => "rgb(" + a.map((v, i) => Math.round(S.mix(v, b[i], t))).join(",") + ")";

  const portal = $("#studio-portal");
  let portalSize = { x: 0, y: 0, radius: 0 };

  function measurePortal() {
    const stage = $("#stage");
    if (!stage) return;
    const W = stage.clientWidth, H = stage.clientHeight;
    stageSize = { w: W, h: H };
    const r = Math.hypot(W, H) / 2;
    portalSize = { x: W / 2, y: H / 2, radius: r };
  }

  function syncPortrait() {
    if (!portal || !signature || !portraitFigure) return;
    const { w: W, h: H } = stageSize;
    const q = S.portrait(score, W, H);
    portal.style.backgroundColor = tint([200, 85, 43], [239, 235, 227], q.paper);
    signature.style.color = tint([239, 235, 227], [34, 35, 31], q.paper);
    signature.style.opacity = q.titleAlpha;
    signature.style.transform = "translate3d(-50%," + q.titleY + "px,0) translateY(-50%)";
    portraitFigure.style.transform = "translate3d(" + q.x + "px," + q.y + "px,0) translate(-50%,-50%) scale(" + (q.height / 1536) + ")";
    portraitFigure.style.opacity = q.alpha;
    if (artistGuide) {
      artistGuide.style.opacity = q.pointingAlpha;
      artistGuide.style.transform = "translate3d(-50%," + q.pointingOffset + "px,0)";
    }
    if (portraitSoft) portraitSoft.style.opacity = q.soft;
    if (portraitContrast) portraitContrast.style.opacity = q.contrast;
    if (portraitImage) portraitImage.style.opacity = q.color;
    if (signature.firstElementChild && signature.lastElementChild) {
      signature.firstElementChild.style.opacity = signature.lastElementChild.style.opacity = 1 - S.phase(score, 2.25, 2.65);
    }
  }

  function sync() {
    if (!ready || staticMode) return;
    const { w: W, h: H } = stageSize;
    const P = S.presentation(score);
    document.body.dataset.chapter = P.chapter;
    document.body.style.setProperty("--score", score.toFixed(3));
    document.body.style.setProperty("--chapter", P.chapter);

    // Panels visibility
    const panels = {
      hero: $("#hero"),
      entrance: $("#entrance"),
      artist: $("#artist"),
      practice: $("#practice"),
      works: $("#works")
    };

    if (panels.hero) {
      panels.hero.style.opacity = P.hero;
      panels.hero.style.visibility = P.hero > 0.002 ? "visible" : "hidden";
      panels.hero.inert = P.hero < 0.1;
      panels.hero.setAttribute("aria-hidden", String(P.hero < 0.1));
    }

    if (panels.entrance) {
      const entA = S.phase(score, 0.45, 0.72) * (1 - S.phase(score, 1.45, 1.88));
      panels.entrance.style.opacity = entA;
      panels.entrance.style.visibility = entA > 0.002 ? "visible" : "hidden";
      panels.entrance.inert = entA < 0.1;
      panels.entrance.setAttribute("aria-hidden", String(entA < 0.1));
    }

    if (panels.artist) {
      panels.artist.style.opacity = P.artist;
      panels.artist.style.visibility = P.artist > 0.002 ? "visible" : "hidden";
      panels.artist.inert = P.artist < 0.1;
      panels.artist.setAttribute("aria-hidden", String(P.artist < 0.1));
    }

    if (panels.practice) {
      panels.practice.style.opacity = P.practice;
      panels.practice.style.visibility = P.practice > 0.002 ? "visible" : "hidden";
      panels.practice.inert = P.practice < 0.1;
      panels.practice.setAttribute("aria-hidden", String(P.practice < 0.1));
      window.StudioAtelier?.set(score);
      setDetail(P.detail);
    }

    if (panels.works) {
      panels.works.style.opacity = P.works;
      panels.works.style.visibility = P.works > 0.002 ? "visible" : "hidden";
      panels.works.inert = P.works < 0.1;
      panels.works.setAttribute("aria-hidden", String(P.works < 0.1));
      syncWorks();
    }

    syncPortal();
    syncPortrait();
  }

  function syncPortal() {
    if (!portal) return;
    const { w: W, h: H } = stageSize;
    const P = S.presentation(score);
    const alpha = P.portalAlpha;
    portal.style.opacity = alpha;
    portal.style.visibility = alpha > 0.002 ? "visible" : "hidden";

    // Radial growth
    const grow = P.portalGrow;
    const maxR = Math.hypot(W, H) / 2;
    const r = S.mix(0, maxR, grow);
    portal.style.clipPath = "circle(" + r + "px at 50% 50%)";
  }

  function syncWorks() {
    const studyHeading = $("#works .works-heading");
    const studyRail = $("#works .study-rail");
    const studyFinale = $("#works .study-finale");
    const kicker = $("#works .section-kicker");
    const footer = $(".site-footer");

    const intro = S.phase(score, 15.95, 16.7);
    const dive = S.phase(score, 17.0, 18.5);
    const end = S.phase(score, 24.5, 26.2);
    const footerProg = S.phase(score, 26.8, S.MAX);

    if (studyHeading) {
      studyHeading.style.opacity = intro * (1 - dive);
      studyHeading.style.transform = "translateY(" + (18 * (1 - intro) - 12 * dive) + "px)";
    }

    if (studyRail) {
      const railAlpha = S.studyRailAlpha(score, stageSize.w, stageSize.h);
      studyRail.style.opacity = railAlpha;
      studyRail.style.visibility = railAlpha > 0.002 ? "visible" : "hidden";
    }

    if (studyFinale) {
      studyFinale.style.opacity = end;
      studyFinale.style.visibility = end > 0.002 ? "visible" : "hidden";
    }

    if (kicker) kicker.style.opacity = 1 - end;

    if (footer) {
      footer.style.opacity = footerProg;
      footer.style.visibility = footerProg > 0.002 ? "visible" : "hidden";
      footer.style.transform = "translateY(" + ((1 - footerProg) * 12) + "px)";
    }

    const currentIdx = S.studyIndex(score);
    if (currentIdx !== currentStudy && currentIdx >= 0 && currentIdx < studyProjects.length) {
      currentStudy = currentIdx;
      const numEl = $("#study-number"), titleEl = $("#study-title"), catEl = $("#study-category");
      if (numEl) numEl.textContent = num(currentIdx);
      if (titleEl) titleEl.textContent = studyProjects[currentIdx].title;
      if (catEl) catEl.textContent = studyProjects[currentIdx].category;
      const openBtn = $("#study-open");
      if (openBtn) openBtn.setAttribute("aria-label", "View " + studyProjects[currentIdx].title);
    }
  }

  // Dialog management
  function showDialog(dialog, invoker) {
    if ($$("dialog[open]").length) return;
    returnFocus = invoker || document.activeElement;
    savedScroll = window.scrollY;
    lenis?.stop();
    gallery?.setBlocked(true);
    document.body.dataset.modal = "open";
    dialog.showModal();
    dialog.scrollTop = 0;
    dialog.querySelector(".dialog-close")?.focus({ preventScroll: true });
  }

  function closeDialog(dialog) {
    dialog.close();
  }

  function fillProject(i, animateTitle = true) {
    window.StudioDetailTransition?.cancel();
    projectIndex = (i + studyProjects.length) % studyProjects.length;
    const p = studyProjects[projectIndex];
    const dialog = $("#project-dialog");
    if (!dialog) return;

    const img = dialog.querySelector("#project-image");
    if (img) {
      img.src = studyPaths[projectIndex];
      img.alt = p.alt || "";
    }
    const idxEl = dialog.querySelector("#project-index");
    if (idxEl) idxEl.textContent = num(projectIndex) + " / 16";
    const catEl = dialog.querySelector("#project-category");
    if (catEl) catEl.textContent = p.category + " / 2026";
    const titleEl = dialog.querySelector("#project-title");
    if (titleEl) window.renderStudyTitle(titleEl, p.title, !animateTitle);
    const shortEl = dialog.querySelector("#project-short");
    if (shortEl) shortEl.textContent = p.short || "";
    const descEl = dialog.querySelector("#project-description");
    if (descEl) descEl.textContent = p.description || "";
    const detEl = dialog.querySelector("#project-detail");
    if (detEl) detEl.textContent = p.detail || "";

    const notesEl = dialog.querySelector("#project-notes");
    if (notesEl) window.renderStudyNotes(notesEl, p);

    dialog.dataset.project = p.id;
    dialog.dataset.layout = p.layout;
    dialog.style.setProperty("--study-accent", p.accent || "#c8552b");
    dialog.scrollTop = 0;
  }

  function openProject(i, invoker) {
    if ($$("dialog[open]").length) return;
    const origin = gallery?.studyOrigin(i);
    fillProject(i, false);
    const dialog = $("#project-dialog");
    if (!dialog) return;
    showDialog(dialog, invoker);
    if (origin) {
      gallery?.setLiftedStudy(i);
      window.StudioDetailTransition.open({
        dialog,
        origin,
        src: studyPaths[i],
        title: studyProjects[i].title,
        onFinish: () => gallery?.setLiftedStudy(-1)
      });
    }
  }

  // Attach event handlers
  $$("dialog").forEach(d => {
    d.querySelector(".dialog-close")?.addEventListener("click", () => closeDialog(d));
    d.addEventListener("click", e => {
      if (e.target === d) {
        const r = d.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
          closeDialog(d);
        }
      }
    });
    d.addEventListener("close", () => {
      window.StudioDetailTransition?.cancel();
      gallery?.setLiftedStudy(-1);
      document.body.dataset.modal = "closed";
      gallery?.setBlocked(false);
      lenis?.start();
      if (Math.abs(window.scrollY - savedScroll) > 1) {
        lenis ? lenis.scrollTo(savedScroll, { immediate: true }) : window.scrollTo(0, savedScroll);
      }
      if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
    });
  });

  $("#previous")?.addEventListener("click", () => gallery?.step(1));
  $("#next")?.addEventListener("click", () => gallery?.step(-1));
  $("#open-current")?.addEventListener("click", e => openProject(active, e.currentTarget));
  $("#study-open")?.addEventListener("click", e => openProject(Math.max(0, currentStudy), e.currentTarget));
  $("#project-prev")?.addEventListener("click", () => fillProject(projectIndex - 1));
  $("#project-next")?.addEventListener("click", () => fillProject(projectIndex + 1));

  $$("[data-project]").forEach(b => b.addEventListener("click", () => openProject(+b.dataset.project, b)));

  function go(name, value) {
    const y = (value ?? S.NAV[name] ?? 0) * ($("#stage")?.clientHeight || window.innerHeight);
    if (lenis) lenis.scrollTo(y, { duration: 1.5, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    else window.scrollTo({ top: y, behavior: "smooth" });
  }

  $$("[data-go]").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    go(a.dataset.go);
  }));

  $$("[data-practice]").forEach(b => b.addEventListener("click", () => {
    go("practice", S.PRACTICE.targets[+b.dataset.practice]);
  }));

  $$("[data-contact]").forEach(b => b.addEventListener("click", () => {
    const contactDialog = $("#contact-dialog");
    if (contactDialog) showDialog(contactDialog, b);
  }));

  // Sable dock
  const dockDestroy = initSableDock(rootElement);

  // Studio Atelier
  initStudioAtelier(rootElement, StudioScore);

  // Resize handler
  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      gallery?.resize();
      positionHitAreas();
      measurePortal();
      portraitDissolve?.resize();
      entranceDust?.resize();
      entranceEcho?.resize();
      lenis?.resize();
      ScrollTrigger.refresh();
      sync();
    }, 100);
  };
  window.addEventListener("resize", onResize);

  // Master Boot
  async function start() {
    const loader = createStudioLoader();
    try {
      if (typeof history !== "undefined" && "scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      const [images, biographyAction, contactPortrait, practiceImages] = await Promise.all([
        Promise.all(sources.map((src, i) => loadImage(src, projects[i].title).then(img => { loader.credit(8); return img; }))),
        loadImage(biographyActionSource, "Studio Camera").then(img => { loader.credit(4); return img; }),
        loadImage(noaAsset("assets/portraits/noa-contact-right.png"), "Noa Vale"),
        Promise.all(practicePaths.map((p, i) => loadImage(p, "Practice " + (i + 1)))),
        loadPortraitContour()
      ]);

      portraitDissolve = createPortraitDissolve({ host: $("#artist"), title: $("#artist-title"), signature, score: S });

      const canvas = $("#gallery-canvas");
      gallery = await createStudioGallery({
        canvas,
        images,
        practiceImages,
        biographyAction,
        contactPortrait,
        plates: projects,
        videos: {},
        reduced: false,
        onSelect: i => openProject(i, score >= S.STUDIES.start ? $("#study-open") : $("#open-current")),
        onFront: updateCurrent,
        onHover: i => {
          const stage = $("#stage");
          if (stage) {
            stage.style.cursor = i >= 0 ? "pointer" : "grab";
            stage.dataset.cardHover = String(i >= 0);
          }
        }
      });

      gallery.setBlocked(true);
      gallery.render(0);
      loader.credit(10);
      gallery.setArrival(0);

      lenis = new Lenis({
        duration: 1.15,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false
      });
      lenis.stop();
      lenis.on("scroll", ScrollTrigger.update);

      trigger = ScrollTrigger.create({
        trigger: $("#scroll-story"),
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => {
          score = self.progress * S.MAX;
          sync();
        }
      });

      gsap.ticker.add(time => {
        lenis?.raf(time * 1000);
        if (!document.hidden) {
          gallery?.render(time);
          window.StudioAtelier?.tick(time);
        }
      });
      gsap.ticker.lagSmoothing(0);

      measurePortal();
      positionHitAreas();
      sync();
      ScrollTrigger.refresh();

      lenis.scrollTo(0, { immediate: true, force: true });
      score = 0;
      sync();

      ready = true;
      document.body.dataset.ready = "true";

      await loader.reveal({
        deep: false,
        drop: t => gallery.setArrival(t),
        complete: () => {
          lenis.scrollTo(0, { immediate: true, force: true });
          score = 0;
          gallery.setArrival(null);
          gallery.setBlocked(false);
          lenis.start();
          sync();
        }
      });
    } catch (err) {
      console.error("Studio preview startup:", err);
      loader.finish();
      lenis?.destroy();
    }
  }

  start();

  return function cleanup() {
    window.removeEventListener("resize", onResize);
    dockDestroy?.();
    trigger?.kill();
    lenis?.destroy();
    if (gallery) {
      try {
        gallery.dispose?.();
      } catch (e) {}
    }
  };
}
