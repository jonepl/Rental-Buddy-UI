Use the below JSON design system profile (`SignUp-Hero Rental UI`) as the visual and stylistic foundation.

```json
{
  "meta": {
    "name": "Auth-Split Layout UI",
    "source_image": "/mnt/data/Screenshot 2025-10-13 at 7.58.20 PM.png",
    "purpose": "Provide Windsurf context to generate consistent sign-in/sign-up UI pages with a split-screen modern aesthetic.",
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
        "50": "#FFF1F1",
        "100": "#FFD9D9",
        "200": "#FFB3B3",
        "300": "#FF8C8C",
        "400": "#FF4F4F",
        "500": "#E63946",
        "600": "#C81E1E",
        "700": "#9B1B1B",
        "800": "#7C1515",
        "900": "#5F0F0F"
      },
      "neutral": {
        "background": "#FFFFFF",
        "surface": "#F9FAFB",
        "line": "#E5E7EB",
        "text": "#111827",
        "text-secondary": "#4B5563",
        "muted": "#9CA3AF"
      },
      "accent": {
        "google": "#DB4437",
        "twitter": "#1DA1F2"
      }
    },

    "typography": {
      "fontFamilies": {
        "brand": "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial",
        "mono": "'Inter var', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas"
      },
      "scale": {
        "h1": { "size": "48px", "lineHeight": "1.15", "weight": 700 },
        "h2": { "size": "32px", "lineHeight": "1.25", "weight": 600 },
        "body": { "size": "16px", "lineHeight": "1.7", "weight": 400 },
        "small": { "size": "14px", "lineHeight": "1.6", "weight": 400, "opacity": 0.85 }
      }
    },

    "spacing": {
      "unit": 4,
      "scale": [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]
    },

    "radii": {
      "sm": "6px",
      "md": "10px",
      "lg": "16px",
      "pill": "9999px"
    },

    "shadows": {
      "soft": "0 4px 12px rgba(0,0,0,0.1)",
      "input": "0 1px 2px rgba(0,0,0,0.05)"
    }
  },

  "layout": {
    "authPage": {
      "split": true,
      "leftWidth": "50%",
      "rightWidth": "50%",
      "height": "100vh",
      "contentAlign": "center",
      "gap": "32px"
    },
    "leftPanel": {
      "background": "url('/assets/bg-tech-red.jpg') center/cover",
      "overlay": "rgba(0,0,0,0.55)",
      "contentAlign": "center-left",
      "padding": "64px",
      "textColor": "#FFFFFF"
    },
    "rightPanel": {
      "background": "#FFFFFF",
      "padding": "80px 64px",
      "textColor": "#111827"
    }
  },

  "components": {
    "BrandMark": {
      "shape": "circle",
      "size": "16px",
      "color": "{palette.neutral.white}"
    },

    "LeftHero": {
      "heading": {
        "token": "h1",
        "text": "Design with us",
        "color": "{palette.neutral.white}"
      },
      "body": {
        "token": "body",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus nunc, ac rhoncus odio congue quis.",
        "color": "rgba(255,255,255,0.85)"
      },
      "spacing": "16px"
    },

    "FormHeader": {
      "text": "Sign in",
      "token": "h2",
      "alignment": "left",
      "color": "{palette.neutral.text}"
    },

    "SocialButton": {
      "base": {
        "layout": "flex",
        "align": "center",
        "justify": "center",
        "gap": "8px",
        "border": "1px solid {palette.neutral.line}",
        "bg": "{palette.neutral.background}",
        "textColor": "{palette.neutral.text}",
        "paddingY": "12px",
        "radius": "{radii.pill}",
        "hoverBg": "{palette.neutral.surface}",
        "shadow": "{shadows.soft}"
      },
      "variants": {
        "google": { "iconColor": "{palette.accent.google}" },
        "twitter": { "iconColor": "{palette.accent.twitter}" }
      }
    },

    "InputField": {
      "border": "1px solid {palette.neutral.line}",
      "bg": "{palette.neutral.background}",
      "textColor": "{palette.neutral.text}",
      "radius": "{radii.md}",
      "padding": "12px 16px",
      "shadow": "{shadows.input}",
      "placeholderColor": "{palette.neutral.muted}",
      "focusRing": "0 0 0 3px rgba(230,57,70,0.25)"
    },

    "ButtonPrimary": {
      "bg": "#D1D5DB",
      "textColor": "#6B7280",
      "radius": "{radii.pill}",
      "paddingY": "12px",
      "paddingX": "20px",
      "fontWeight": 600,
      "hoverBg": "#9CA3AF"
    },

    "Link": {
      "textColor": "{palette.neutral.text}",
      "hoverColor": "{palette.primary.500}",
      "underline": true
    }
  },

  "tailwind": {
    "themeExtend": {
      "colors": {
        "brand": {
          "500": "#E63946"
        },
        "google": "#DB4437",
        "twitter": "#1DA1F2",
        "neutral": {
          "50": "#F9FAFB",
          "100": "#F3F4F6",
          "200": "#E5E7EB",
          "300": "#D1D5DB",
          "400": "#9CA3AF",
          "500": "#6B7280",
          "700": "#374151",
          "900": "#111827"
        }
      },
      "borderRadius": {
        "pill": "9999px",
        "md": "10px"
      },
      "boxShadow": {
        "soft": "0 4px 12px rgba(0,0,0,0.1)",
        "input": "0 1px 2px rgba(0,0,0,0.05)"
      }
    },

    "classRecipes": {
      "authLayout": "grid grid-cols-1 md:grid-cols-2 h-screen",
      "leftPanel": "relative flex flex-col justify-center bg-cover bg-center text-white p-16",
      "leftOverlay": "absolute inset-0 bg-black/55",
      "leftContent": "relative z-10 max-w-md space-y-6",
      "rightPanel": "flex flex-col justify-center bg-white p-10 md:p-16",
      "socialBtn": "flex items-center justify-center gap-3 border rounded-pill py-3 font-medium hover:bg-neutral-50",
      "inputField": "w-full border rounded-md p-3 focus:ring-4 focus:ring-brand-500/25 outline-none",
      "divider": "flex items-center gap-2 text-neutral-400 text-sm my-4 before:flex-1 before:border-t after:flex-1 after:border-t",
      "primaryBtn": "w-full bg-neutral-300 text-neutral-500 rounded-pill py-3 font-semibold hover:bg-neutral-400"
    }
  },

  "patterns": {
    "pageAuth": {
      "role": "Authentication (Sign in / Sign up)",
      "composition": [
        "Split-screen layout with full-height panels",
        "Left: background image with dark overlay and promotional text",
        "Right: form container with social login buttons, divider, and input fields"
      ]
    }
  },

  "accessibility": {
    "focus": {
      "ring": "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
    },
    "contrast": {
      "text": "Maintain at least 4.5:1 contrast between text and background for white-on-dark and dark-on-white panels"
    }
  }
}
```