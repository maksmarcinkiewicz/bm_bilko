/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#C7E85D", // Jaśniejsza zieleń do akcentów
          DEFAULT: "#A2CE1D", // Dominująca zieleń z logo
          dark: "#7EA918", // Ciemniejszy odcień zieleni
        },
        neutral: {
          light: "#F4F4F4", // Jasne tło
          DEFAULT: "#E0E0E0", // Neutralny szary
          dark: "#B8B8B8", // Ciemniejszy szary do granic sekcji
        },
        black: {
          DEFAULT: "#000000", // Czerń do tekstu i tła
          light: "#1A1A1A", // Subtelnie rozjaśniona czerń
        },
        accent: {
          yellow: "#FFD700", // Jasny, kontrastujący żółty
          purple: "#8A2BE2", // Modny akcent fioletu
        },
        white: {
          DEFAULT: "#FFFFFF", // Do tekstu lub kontrastu
        },
      },
    },
  },
  plugins: [],
};
