import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom: {
          DEFAULT: "#5F259E", // Custom color added here
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        "skew-x-shake": {
          '0%': { transform: 'skewX(-15deg)' },
          '5%': { transform: 'skewX(15deg)' },
          '10%': { transform: 'skewX(-15deg)' },
          '15%': { transform: 'skewX(15deg)' },
          '20%': { transform: 'skewX(0deg)' },
          '100%': { transform: 'skewX(0deg)' },
        },
        "skew-y-shake": {
          '0%': { transform: 'skewY(-15deg)' },
          '5%': { transform: 'skewY(15deg)' },
          '10%': { transform: 'skewY(-15deg)' },
          '15%': { transform: 'skewY(15deg)' },
          '20%': { transform: 'skewY(0deg)' },
          '100%': { transform: 'skewY(0deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 20s linear infinite',
        "skew-x-shake": "skew-x-shake 2s ease-in-out infinite",
        "skew-y-shake": "skew-y-shake 2s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
