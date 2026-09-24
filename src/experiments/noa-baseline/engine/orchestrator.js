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
    ["Arquitectura de Flota", "SISTEMAS DE RESERVAS", "Estructura de catálogo y tarifas en tiempo real para Magallanes."],
    ["Cobertura GEO", "SEO LOCAL & MAPAS", "Estructuración semántica y presencia territorial en motores de búsqueda."],
    ["Precisión Óptica UI", "CATÁLOGO TECNOLÓGICO", "Exhibición de tecnologías ópticas globales y cristales de alta definición."],
    ["Mapeo Puntos Limpios", "ECONOMÍA CIRCULAR", "Portal georreferenciado para trazabilidad y educación ambiental regional."],
    ["Flujo de Pedidos B2B", "DISTRIBUCIÓN MAYORISTA", "Catálogo SPA de alta velocidad para agilizar órdenes comerciales en la Patagonia."],
    ["Matriz Territorial", "INDICADORES REGIONALES", "Visualización interactiva de sustentabilidad e impacto en Magallanes."],
    ["Motor Multitenant", "AUTOMATIZACIÓN SAAS", "Orquestación de publicación y flujos de contenido sin intervención manual."],
    ["Algoritmo Austral", "DIAGNÓSTICO ESTRATÉGICO", "Scoring técnico en tiempo real para evaluar madurez digital de empresas."]
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
  let score = 0, lastChapter = "";

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
  const portraitDrawing = $("#portrait-drawing"), drawingTip = $("#drawing-tip");
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
      // embedded SVG is already present as fallback
    }
  }

  let stageSize = { w: window.innerWidth, h: window.innerHeight };
  const tint = (a, b, t) => "rgb(" + a.map((v, i) => Math.round(S.mix(v, b[i], t))).join(",") + ")";

  const portal = $("#studio-portal");
  let portalSize = { x: 0, y: 0, r: 0, cover: 0 };

  function measurePortal() {
    const stageEl = $("#stage");
    const dot = $("#entrance-dot");
    if (!stageEl || !dot) return;
    const stage = stageEl.getBoundingClientRect();
    stageSize = { w: stage.width, h: stage.height };
    const dotRect = dot.getBoundingClientRect();
    const x = dotRect.x + dotRect.width / 2 - stage.x;
    const y = dotRect.y + dotRect.height / 2 - stage.y;
    portalSize = {
      x,
      y,
      r: dotRect.width / 2 || 10,
      cover: Math.hypot(Math.max(x, stage.width - x), Math.max(y, stage.height - y)) + 2
    };
  }

  function syncPortrait() {
    if (!portal || !signature || !portraitFigure) return;
    const { w: W, h: H } = stageSize;
    const q = S.portrait(score, W, H);
    portal.style.backgroundColor = tint([200, 85, 43], [239, 235, 227], q.paper);
    const ink = tint([239, 235, 227], [82, 76, 67], S.phase(score, 2.5, 3.3));
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

    if (portraitDrawing) portraitDrawing.style.color = ink;
    if (outlineGroup) outlineGroup.style.opacity = q.outlineAlpha * 0.96;

    let activePath = -1, local = 0;
    drawingPaths.forEach((path, i) => {
      const [a, b] = strokeSpans[i] || [0, 1];
      const t = S.phase(q.drawingProgress, a, b);
      path.style.strokeDashoffset = 1 - t;
      if (q.drawingProgress >= a && q.drawingProgress <= b) {
        activePath = i;
        local = t;
      }
    });

    if (activePath >= 0 && drawingPaths[activePath] && drawingTip) {
      try {
        const len = drawingPaths[activePath].getTotalLength?.() || 100;
        const pt = drawingPaths[activePath].getPointAtLength?.(local * len) || { x: 0, y: 0 };
        drawingTip.style.opacity = q.tipAlpha;
        drawingTip.setAttribute("cx", pt.x);
        drawingTip.setAttribute("cy", pt.y);
      } catch (err) {}
    } else if (drawingTip) {
      drawingTip.style.opacity = "0";
    }

    if (portraitCaption) {
      portraitCaption.style.opacity = q.quoteAlpha;
      portraitCaption.style.transform = "translate3d(-50%," + q.quoteOffset + "px,0)";
    }
  }

  function syncGuides(p) {
    window.StudioAtelier?.set(score, p.practice);
    if (worksGuide) {
      const worksVisible = p.works * S.phase(score, 16.05, 16.5);
      worksGuide.style.opacity = worksVisible;
      worksGuide.style.visibility = worksVisible > 0.002 ? "visible" : "hidden";
      if (worksGuide.firstElementChild) {
        worksGuide.firstElementChild.style.transform = "translate3d(0," + ((1 - worksVisible) * 32) + "px,0) scale(" + (0.96 + 0.04 * worksVisible) + ")";
      }
    }
  }

  function syncStudies() {
    const studyHeading = $("#works .works-heading");
    const studyRail = $("#works .study-rail");
    const studyFinale = $("#works .study-finale");
    const kicker = $("#works .section-kicker");
    const footer = $(".site-footer");

    const i = S.studyIndex(score);
    const end = S.phase(score, S.STUDIES.contactStart, S.STUDIES.contactEnd);
    const enter = S.phase(score, 16.46, 16.9);
    const dive = S.phase(score, 17.05, 19.35);
    const intro = enter * (1 - S.phase(score, 17.7, 19.35));

    if (studyHeading) {
      studyHeading.style.opacity = intro;
      studyHeading.style.transform = "translateY(" + (18 * (1 - enter) - 12 * dive) + "px) scale(" + (1 / (1 - 0.43 * dive)) + ")";
      $$(".reveal-word").forEach((word, j) => {
        const t = S.phase(score, 16.48 + j * 0.14, 17.06 + j * 0.14);
        word.style.transform = "translateY(" + ((1 - t) * 112) + "%)";
        word.style.opacity = t;
      });
      const pText = studyHeading.querySelector("p");
      if (pText) pText.style.opacity = S.phase(score, 17.0, 17.5) * (1 - S.phase(score, 17.7, 18.6));
    }

    if (studyRail) {
      const rail = S.studyRailAlpha(score, stageSize.w, stageSize.h);
      studyRail.style.opacity = rail;
      studyRail.style.visibility = rail > 0.002 ? "visible" : "hidden";
      studyRail.inert = rail < 0.1;
      studyRail.setAttribute("aria-hidden", String(rail < 0.1));
    }

    if (studyFinale) {
      studyFinale.style.opacity = end;
      studyFinale.style.transform = "translate(" + (24 * (1 - end)) + "px," + (10 * (1 - end)) + "px)";
      studyFinale.inert = end < 0.8;
      studyFinale.setAttribute("aria-hidden", String(end < 0.8));
    }

    if (kicker) kicker.style.opacity = 1 - end;

    const footerAlpha = S.phase(score, 26.95, S.STUDIES.contactEnd);
    document.body.style.setProperty("--closing-progress", footerAlpha);
    if (footer) {
      footer.inert = footerAlpha < 0.8;
      footer.setAttribute("aria-hidden", String(footerAlpha < 0.8));
      footer.style.visibility = footerAlpha > 0.002 ? "visible" : "hidden";
    }

    if (i !== currentStudy && i >= 0 && i < studyProjects.length) {
      currentStudy = i;
      const numEl = $("#study-number"), titleEl = $("#study-title"), catEl = $("#study-category");
      if (numEl) numEl.textContent = num(S.studyPosition(score));
      if (titleEl) titleEl.textContent = studyProjects[i].title;
      if (catEl) catEl.textContent = studyProjects[i].category;
      const openBtn = $("#study-open");
      if (openBtn) openBtn.setAttribute("aria-label", "View " + studyProjects[i].title);
      $$("[data-study]").forEach((b, j) => {
        b.setAttribute("aria-current", Number(b.dataset.study) === i ? "true" : "false");
      });
    }
  }

  function sync() {
    if (staticMode) return;
    const p = S.presentation(score);
    gallery?.setScroll(score);

    for (const name of ["hero", "entrance", "artist", "practice", "works"]) {
      const panel = $("#" + name);
      if (panel) {
        const alpha = p[name];
        panel.style.opacity = alpha;
        panel.style.visibility = alpha > 0.002 ? "visible" : "hidden";
        const interactive = p.chapter === name && alpha > 0.1;
        panel.inert = !interactive;
        panel.setAttribute("aria-hidden", String(!interactive));
      }
    }

    const entrance = $("#entrance");
    const canvas = $("#gallery-canvas");
    const dive = p.portalDive;

    if (entranceDust) entranceDust.update(score);
    else {
      const entTitle = $("#entrance-title");
      if (entTitle) entTitle.style.opacity = p.titleFade;
    }

    if (entrance) {
      entrance.style.transformOrigin = portalSize.x + "px " + portalSize.y + "px";
      entrance.style.transform = "translateZ(0) scale(" + (1 + dive * dive * 2) + ")";
      entrance.style.filter = "none";
    }

    if (canvas) {
      canvas.style.transformOrigin = portalSize.x + "px " + portalSize.y + "px";
      canvas.style.transform = "translateZ(0) scale(" + (1 + dive * dive * 1.2) + ")";
    }

    const ratio = Math.max(1, portalSize.cover / Math.max(1, portalSize.r));
    const radius = portalSize.r * Math.pow(ratio, Math.pow(p.portalGrow, 1.55));
    if (portal) {
      portal.style.clipPath = "circle(" + radius + "px at " + portalSize.x + "px " + portalSize.y + "px)";
      portal.style.opacity = p.portalAlpha;
      portal.style.visibility = p.portalAlpha > 0 ? "visible" : "hidden";
    }

    syncPortrait();
    syncGuides(p);
    syncStudies();

    const entranceCaptionReveal = S.phase(score, 0.64, 1.04);
    const overline = $(".entrance-overline"), foot = $(".entrance-foot");
    if (overline) overline.style.opacity = entranceCaptionReveal;
    if (foot) foot.style.opacity = entranceCaptionReveal;

    setDetail(p.detail);

    if (lastChapter !== p.chapter) {
      lastChapter = p.chapter;
      document.body.dataset.chapter = p.chapter;
      const stage = $("#stage");
      if (stage) stage.style.cursor = p.chapter === "hero" ? "grab" : "default";
      $$(".site-header nav a").forEach(a => {
        if (a.dataset.go === p.chapter) a.setAttribute("aria-current", "location");
        else a.removeAttribute("aria-current");
      });
    }

    document.body.dataset.scrollScore = score.toFixed(3);
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
    if (catEl) catEl.textContent = (p.category || "Study") + " / " + (p.year || "2026");
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

  const onMessageContact = e => {
    if (e.data?.type === "pc-contact" || e.data?.type === "noa-contact") {
      const contactDialog = $("#contact-dialog");
      if (contactDialog) showDialog(contactDialog);
    }
  };
  window.addEventListener("message", onMessageContact);

  const dockDestroy = initSableDock(rootElement);
  initStudioAtelier(rootElement, StudioScore);

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
        loadImage(noaAsset("assets/portraits/noa-contact-right.png"), "PatagoniaCoach"),
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
        syncTouch: false,
        virtualScroll: data => {
          if (data.event.type === "wheel" && score >= S.STUDIES.start && score < S.STUDIES.end) {
            data.deltaY *= 1.25 + 0.55 * S.phase(score, 17.0, 22.2);
          }
          return true;
        }
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
          if (artistGuide && artistGuide.firstElementChild) {
            const breathe = S.phase(score, 6.1, 6.65) * (1 - S.phase(score, S.INTRO.holdEnd, S.INTRO.exitEnd));
            artistGuide.firstElementChild.style.transformOrigin = "50% 25%";
            artistGuide.firstElementChild.style.transform = "translate3d(0," + (Math.sin(time * 0.88) * 2.5 * breathe) + "px,0) rotate(" + (Math.sin(time * 0.61) * 0.12 * breathe) + "deg)";
          }
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
    window.removeEventListener("message", onMessageContact);
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
