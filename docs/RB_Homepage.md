Use the below JSON design system profile (`Home-Hero Rental UI`) as the visual and stylistic foundation.

```json
{
  "meta": {
    "name": "Home-Hero Rental UI",
    "source_image": "/mnt/data/Home-1.png",
    "purpose": "Give Windsurf design context so new pages/components match this visual style.",
    "stack": {
      "framework": "React + TypeScript",
      "ui": "TailwindCSS",
      "maps": "Leaflet.js",
      "tables": "React Table",
      "state": "React Query"
    }
  },

  "foundations": {
    "palette": {
      "primary": {
        "50": "#FFEDEA",
        "100": "#FFD9D3",
        "200": "#FFB3AA",
        "300": "#FF8E84",
        "400": "#F97567",
        "500": "#EB6753",
        "600": "#D45447",
        "700": "#B1413A",
        "800": "#8E332E",
        "900": "#6F2825"
      },
      "neutral": {
        "background": "#0F1620",
        "surface": "#17212B",
        "surface-2": "#2A2C2F",
        "muted": "#6C6762",
        "line": "#C0BBB9",
        "white": "#FFFFFF",
        "offWhite": "#F7F7F7"
      },
      "status": {
        "success": "#22C55E",
        "warning": "#F59E0B",
        "error":   "#EF4444",
        "info":    "#3B82F6"
      }
    },

    "typography": {
      "fontFamilies": {
        "brand": "'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
        "numeric": "'Inter var', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas"
      },
      "scale": {
        "display": { "size": "64px", "lineHeight": "1.05", "weight": 800, "tracking": "-0.02em" },
        "h1":      { "size": "48px", "lineHeight": "1.1",  "weight": 800, "tracking": "-0.02em" },
        "h2":      { "size": "36px", "lineHeight": "1.15", "weight": 700, "tracking": "-0.01em" },
        "h3":      { "size": "28px", "lineHeight": "1.2",  "weight": 700 },
        "bodyLg":  { "size": "18px", "lineHeight": "1.6",  "weight": 400 },
        "body":    { "size": "16px", "lineHeight": "1.7",  "weight": 400 },
        "caption": { "size": "14px", "lineHeight": "1.6",  "weight": 400, "opacity": 0.85 }
      }
    },

    "spacing": {
      "unit": 4,
      "scale": [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 112, 128]
    },

    "radii": {
      "sm": "6px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "pill": "9999px"
    },

    "shadows": {
      "soft-lg": "0 20px 60px rgba(0,0,0,0.35)",
      "card": "0 8px 24px rgba(0,0,0,0.25)",
      "control": "0 12px 30px rgba(0,0,0,0.20)"
    },

    "effects": {
      "heroOverlay": {
        "type": "linear-gradient",
        "value": "to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.35) 100%"
      },
      "backdropBlur": "blur(2px)"
    },

    "layout": {
      "container": { "maxWidth": "1200px", "paddingX": "24px" },
      "hero": {
        "height": "min(88vh, 900px)",
        "contentAlign": "center",
        "headingMaxWidth": "900px",
        "textAlign": "center",
        "gap": "28px"
      }
    }
  },

  "components": {
    "Navbar": {
      "height": "64px",
      "background": "transparent",
      "logo": { "shape": "circle", "size": "28px", "bg": "{palette.primary.500}", "iconColor": "{palette.neutral.white}" },
      "actions": {
        "button": {
          "style": "ghost",
          "textColor": "{palette.neutral.white}",
          "hoverTextColor": "{palette.primary.100}",
          "paddingX": "16px",
          "paddingY": "8px",
          "radius": "{radii.pill}"
        }
      }
    },

    "Hero": {
      "backgroundImage": "full-bleed photo",
      "overlay": "{effects.heroOverlay}",
      "title": {
        "token": "h1",
        "color": "{palette.neutral.white}",
        "text": "Find Your Next Rental Property"
      },
      "eyebrow": {
        "token": "caption",
        "color": "rgba(255,255,255,0.85)",
        "textTransform": "uppercase",
        "letterSpacing": "0.12em"
      },
      "subtitle": {
        "token": "bodyLg",
        "color": "rgba(255,255,255,0.85)"
      },
      "contentSpacing": "24px"
    },

    "SearchBar": {
      "container": {
        "width": "min(920px, 92vw)",
        "height": "64px",
        "paddingX": "20px",
        "radius": "{radii.pill}",
        "bg": "{palette.neutral.white}",
        "shadow": "{shadows.control}",
        "border": "1px solid rgba(23,33,43,0.08)"
      },
      "leadingIcon": { "name": "lock/location", "color": "#9CA3AF", "size": "18px" },
      "input": {
        "placeholderColor": "#98A2B3",
        "textColor": "#111827",
        "font": "body",
        "caretColor": "{palette.primary.500}"
      },
      "action": {
        "type": "iconButton",
        "shape": "circle",
        "size": "48px",
        "bg": "{palette.primary.500}",
        "icon": { "name": "search", "color": "{palette.neutral.white}" },
        "hoverBg": "{palette.primary.600}",
        "focusRing": "0 0 0 3px rgba(235,103,83,0.35)"
      }
    },

    "Button": {
      "primary": {
        "bg": "{palette.primary.500}",
        "text": "{palette.neutral.white}",
        "radius": "{radii.pill}",
        "paddingX": "20px",
        "paddingY": "12px",
        "shadow": "{shadows.card}",
        "hoverBg": "{palette.primary.600}",
        "activeBg": "{palette.primary.700}"
      },
      "ghostLight": {
        "bg": "transparent",
        "text": "{palette.neutral.white}",
        "hoverBg": "rgba(255,255,255,0.08)",
        "radius": "{radii.pill}"
      }
    },

    "Chip": {
      "bg": "rgba(255,255,255,0.12)",
      "text": "{palette.neutral.white}",
      "radius": "{radii.pill}",
      "paddingX": "12px",
      "paddingY": "6px",
      "border": "1px solid rgba(255,255,255,0.28)"
    },

    "Card": {
      "bg": "{palette.neutral.white}",
      "radius": "{radii.lg}",
      "shadow": "{shadows.card}",
      "padding": "24px",
      "border": "1px solid rgba(0,0,0,0.06)"
    },

    "Footer": {
      "bg": "transparent",
      "text": "rgba(255,255,255,0.75)"
    }
  },

  "tailwind": {
    "themeExtend": {
      "colors": {
        "brand": {
          "50":  "#FFEDEA",
          "100": "#FFD9D3",
          "200": "#FFB3AA",
          "300": "#FF8E84",
          "400": "#F97567",
          "500": "#EB6753",
          "600": "#D45447",
          "700": "#B1413A",
          "800": "#8E332E",
          "900": "#6F2825"
        },
        "surface": {
          "bg":    "#0F1620",
          "1":     "#17212B",
          "2":     "#2A2C2F",
          "muted": "#6C6762",
          "line":  "#C0BBB9",
          "off":   "#F7F7F7"
        }
      },
      "fontFamily": {
        "sans": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"]
      },
      "boxShadow": {
        "soft-lg": "0 20px 60px rgba(0,0,0,0.35)",
        "card": "0 8px 24px rgba(0,0,0,0.25)",
        "control": "0 12px 30px rgba(0,0,0,0.20)"
      },
      "borderRadius": {
        "xl": "24px",
        "pill": "9999px"
      }
    },

    "classRecipes": {
      "heroRoot": "relative h-[88vh] bg-center bg-cover text-white",
      "heroOverlay": "absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/35",
      "heroContent": "relative z-10 max-w-[900px] mx-auto px-6 text-center flex flex-col items-center gap-6",
      "eyebrow": "uppercase tracking-[0.12em] opacity-85 text-sm",
      "title": "font-extrabold text-4xl sm:text-6xl leading-tight",
      "subtitle": "text-lg sm:text-xl opacity-85",
      "searchWrap": "w-[92vw] max-w-[920px] h-16 bg-white rounded-pill shadow-control border border-black/5 flex items-center pl-5 pr-2 gap-3",
      "searchInput": "flex-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none",
      "searchBtn": "grid place-items-center w-12 h-12 rounded-full bg-brand-500 hover:bg-brand-600 focus:ring-4 focus:ring-brand-500/35 text-white"
    }
  },

  "patterns": {
    "pageHero": {
      "role": "Landing/home hero for property search",
      "composition": [
        "Full-bleed background image",
        "Dark gradient overlay",
        "Centered column: eyebrow, H1 title, supporting copy",
        "Prominent pill search control with action button"
      ]
    },
    "emptyStates": {
      "hero": {
        "title": "Find Your Next Rental Property",
        "subtitle": "We’ve more than 745,000 apartments, place & plot."
      }
    }
  },

  "accessibility": {
    "contrastGuidance": [
      "Use white text on hero overlay >= 4.5:1",
      "Primary #EB6753 on white passes large text; for small text use #D45447 or add 1px border #FFB3AA on buttons"
    ],
    "focus": {
      "ring": "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
    }
  }
}
```

Create a **Home Page** for a rental property search web app called **Rental Buddy** using the following stack:
- React + TypeScript
- TailwindCSS for styling
- React Query for state management
- Leaflet.js for maps
- React Table for tabular results

Follow the JSON system’s colors, typography, spacing, and component tokens exactly to maintain visual consistency.

Page requirements:
1. **Navbar**
   - Transparent background with brand icon and app name ("Rental Buddy").
   - Right-aligned “Sign up or Log in” button using `Button.ghostLight` style.

2. **Hero Section**
   - Full-bleed background image with a dark gradient overlay (`effects.heroOverlay`).
   - Center-aligned content:
     - Eyebrow text: “THE BEST WAY TO”
     - Heading: “Find Your Next Rental Property”
     - Subheading: “We’ve more than 745,000 apartments, places & plots.”
   - Include a search bar component (`SearchBar`) with:
     - Left icon: location pin or lock
     - Placeholder: “Enter an address, neighborhood, city, or ZIP code”
     - Right icon button (search icon)

3. **Responsive Behavior**
   - Hero text and search bar centered on desktop, stacked vertically on mobile.
   - Apply Tailwind class recipes from the JSON’s `tailwind.classRecipes` to style each element.

4. **Future Sections (add placeholders)**
   - Placeholder for “Featured Properties” section below hero.
   - Placeholder for “How It Works” three-column section.

Output a complete React + Tailwind page component (`Home.tsx`) that reflects this design system visually and structurally.

Do not use placeholder libraries for UI — use Tailwind only.
