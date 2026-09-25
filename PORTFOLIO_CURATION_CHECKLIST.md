# PORTFOLIO CURATION CHECKLIST — PATAGONIACOACH V2

Este documento establece los **10 criterios formales** para la futura selección y curaduría definitiva de los proyectos que integrarán la sección **Selected Work** en la Home de PatagoniaCoach.

---

> [!NOTE]
> Los proyectos actualmente renderizados en la Home (**AGM Rent a Car**, **Ruta 9**, **Óptica Harris**, **REMAG**) constituyen un **DATASET PROVISIONAL DE DESARROLLO** para validar la coreografía cinemática y la modularidad del componente. No deben considerarse como el portfolio final.

---

## CRITERIOS DE EVALUACIÓN PARA PROYECTOS CANDIDATOS

Cada caso de estudio propuesto para la Home deberá someterse a esta matriz de validación antes de su incorporación definitiva:

| # | Criterio | Descripción & Estándar de Aceptación | Estado / Verificación |
|---|---|---|---|
| **01** | **Proyecto Real** | Existencia jurídica/comercial comprobable del cliente y del producto digital desarrollado. | Obligatorio |
| **02** | **Participación Real** | Intervención directa y demostrable del equipo de PatagoniaCoach en estrategia, diseño, desarrollo o IA. | Obligatorio |
| **03** | **Calidad Visual Disponible** | Existencia de capturas de alta resolución (UI real, diseño editorial, maquetas reales) sin depender de stock genérico. | Obligatorio |
| **04** | **Permiso & Pertinencia** | Autorización explícita o pertinencia pública para exhibir la marca, capturas y métricas del cliente. | Obligatorio |
| **05** | **Capacidad Demostrada** | El proyecto debe ejemplificar de manera contundente al menos una de las capacidades centrales (Desarrollo Web Pro, SEO/GEO, Automatización IA, o Estrategia). | Obligatorio |
| **06** | **Diferenciación Conceptual** | Cada proyecto seleccionado debe representar una industria o disciplina distinta (evitar 4 proyectos del mismo rubro). | Obligatorio |
| **07** | **Material Narrativo** | Información suficiente para redactar el problema, la solución de ingeniería y el impacto territorial. | Obligatorio |
| **08** | **Rutas / Enlaces Reales** | Enlace externo al sitio activo o ruta interna a un Case Study en profundidad. | Opcional / Recomendado |
| **09** | **Claims Verificables** | Toda afirmación de impacto o rendimiento (ej. Core Web Vitals, automatización) debe contar con respaldo técnico real. | Obligatorio (Truth Hardening) |
| **10** | **Estado Operativo** | Declaración transparente del estado: `Publicado & Activo`, `En Desarrollo`, o `Caso de Estudio`. | Obligatorio |

---

## ESQUEMA DE DATOS MODULAR DEL PROYECTO

La arquitectura de `SelectedWork.jsx` debe soportar el reemplazo dinámico de proyectos mediante el siguiente schema:

```typescript
interface ProjectCase {
  id: string;                    // Identificador único (ej: "agm-mobility")
  client: string;                // Nombre de la marca o empresa
  category: string;              // Categoría comercial (ej: "Movilidad & E-Commerce")
  territory: string;             // Anclaje geográfico (ej: "Punta Arenas • 53°S")
  headline: string;              // Titular sintético de valor
  description: string;           // Párrafo descriptivo de la solución
  capabilities: string[];        // Tags de disciplinas (ej: ["Desarrollo Web Pro", "Cotizador Digital"])
  media: string | null;          // URL de imagen real o null (activa composición tipográfica editorial)
  mediaAlt: string;              // Texto alternativo descriptivo
  href: string | null;           // Enlace a caso completo o sitio externo
  status: "active" | "dev" | "archive";
  featured: boolean;
}
```

---

## SOPORTE DE MEDIA REAL OPTIONAL (`media: null`)

* Si `media: "url"` existe: Se proyecta la maqueta real en su ventana cinemática con retícula HUD.
* Si `media: null`: El layout no se rompe; el componente conmuta automáticamente a una composición tipográfica y gráfica de alta gama (wireframe estructural o código blueprint), sin emplear stock falso.

---

*Documento registrado para la fase de Curation & Truth Hardening — PatagoniaCoach 2026.*
