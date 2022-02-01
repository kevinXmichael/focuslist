import plugin from "windicss/plugin"
import { defineConfig } from "vite-plugin-windicss"

export default defineConfig({
  preflight: true,
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") }
      })
    })
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1.0rem",
      lg: "2.0rem",
      xl: "4.0rem"
    },
    colors: {
      primary: "var(--primary)",
      "primary-variant": "var(--primary-variant)",
      secondary: "var(--secondary)",
      "secondary-variant": "var(--secondary-variant)"
    }
  }
})
