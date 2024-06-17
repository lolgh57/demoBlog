const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: "1.05rem",
      sm: "1.25rem",
      base: "1.38rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3.5rem",
      "4xl": "4.5rem",
      "5xl": "6rem",
      "6xl": "7.5rem",
      "7xl": "9rem",
    },
    extend: {
      backgroundImage: {
        "gradient-top":
          "linear-gradient(0deg, rgb(9, 26, 40) 35%, rgb(16, 15, 32) 64%, rgb(3, 16, 26) 96%);",
        "gradient-top-right":
          "linear-gradient(45deg, rgb(9, 26, 40) 35%, rgb(16, 15, 32) 62%, rgb(3, 16, 26) 96%)",
        "gradient-bottom-right":
          "linear-gradient(150deg, rgb(9, 26, 40) 35%, rgb(16, 15, 32) 62%, rgb(3, 16, 26) 96%);",
        "gradient-bottom":
          "linear-gradient(180deg, rgb(9, 26, 40) 35%, rgb(16, 15, 32) 64%, rgb(3, 16, 26) 96%);",
      },
      boxShadow: {
        dark: "0px 3px 5px 0px rgba(9, 26, 40, 0.5)",
        "dark-hover": "0px 3px 15px 2px rgba(9, 26, 40, 0.5)",
      },
      transitionDuration: {
        DEFAULT: "333ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      colors: {
        arcanum: "var(--arcanum)",
        "arcanum-light": "var(--arcanum-light)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        header: "var(--bg-header)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          white: "var(--secondary-white)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        white: "var(--white)",
        light: "var(--light)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
