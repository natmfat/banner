import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      sans: "var(--font-family-default)",
      mono: "var(--font-family-code)",
    },
    fontWeight: {
      regular: "var(--font-weight-regular)",
      medium: "var(--font-weight-medium)",
      bold: "var(--font-weight-bold)",
    },
    fontSize: {
      "small": "var(--font-size-small)",
      "default": "var(--font-size-default)",
      "subhead-default": "var(--font-size-subhead-default)",
      "subhead-big": "var(--font-size-subhead-big)",
      "header-default": "var(--font-size-header-default)",
      "header-big": "var(--font-size-header-big)",
    },
    lineHeight: {
      "none": "1",
      "small": "var(--line-height-small)",
      "default": "var(--line-height-default)",
      "subhead-default": "var(--line-height-subhead-default)",
      "subhead-big": "var(--line-height-subhead-big)",
      "header-default": "var(--line-height-header-default)",
      "header-big": "var(--line-height-header-big)",
    },
    boxShadow: {
      1: "var(--shadow-1)",
      2: "var(--shadow-2)",
      3: "var(--shadow-3)",
      focus: "inset 0 0 0 2px var(--primary-default)",
      default: "var(--shadow-default)",
    },
    colors: {
      "transparent": "transparent",
      "white": "var(--white)",
      "black": "var(--black)",
      "interactive": "var(--interactive-background)",
      "interactive-active": "var(--interactive-background--active)",
      "colorway": {
        dimmest: "var(--colorway-dimmest)",
        dimmer: "var(--colorway-dimmer)",
        default: "var(--colorway-default)",
        stronger: "var(--colorway-stronger)",
        strongest: "var(--colorway-strongest)",
      },
      "background": {
        root: "var(--background-root)",
        default: "var(--background-default)",
        higher: "var(--background-higher)",
        highest: "var(--background-highest)",
        overlay: "var(--background-overlay)",
      },
      "foreground": {
        default: "var(--foreground-default)",
        dimmer: "var(--foreground-dimmer)",
        dimmest: "var(--foreground-dimmest)",
      },
      "outline": {
        dimmest: "var(--outline-dimmest)",
        dimmer: "var(--outline-dimmer)",
        default: "var(--outline-default)",
        stronger: "var(--outline-stronger)",
        strongest: "var(--outline-strongest)",
      },
      "primary": {
        dimmest: "var(--primary-dimmest)",
        dimmer: "var(--primary-dimmer)",
        default: "var(--primary-default)",
        stronger: "var(--primary-stronger)",
        strongest: "var(--primary-strongest)",
      },
      "positive": {
        dimmest: "var(--positive-dimmest)",
        dimmer: "var(--positive-dimmer)",
        default: "var(--positive-default)",
        stronger: "var(--positive-stronger)",
        strongest: "var(--positive-strongest)",
      },
      "negative": {
        dimmest: "var(--negative-dimmest)",
        dimmer: "var(--negative-dimmer)",
        default: "var(--negative-default)",
        stronger: "var(--negative-stronger)",
        strongest: "var(--negative-strongest)",
      },
      "red": {
        dimmest: "var(--red-dimmest)",
        dimmer: "var(--red-dimmer)",
        default: "var(--red-default)",
        stronger: "var(--red-stronger)",
        strongest: "var(--red-strongest)",
      },
      "orange": {
        dimmest: "var(--orange-dimmest)",
        dimmer: "var(--orange-dimmer)",
        default: "var(--orange-default)",
        stronger: "var(--orange-stronger)",
        strongest: "var(--orange-strongest)",
      },
      "yellow": {
        dimmest: "var(--yellow-dimmest)",
        dimmer: "var(--yellow-dimmer)",
        default: "var(--yellow-default)",
        stronger: "var(--yellow-stronger)",
        strongest: "var(--yellow-strongest)",
      },
      "lime": {
        dimmest: "var(--lime-dimmest)",
        dimmer: "var(--lime-dimmer)",
        default: "var(--lime-default)",
        stronger: "var(--lime-stronger)",
        strongest: "var(--lime-strongest)",
      },
      "green": {
        dimmest: "var(--green-dimmest)",
        dimmer: "var(--green-dimmer)",
        default: "var(--green-default)",
        stronger: "var(--green-stronger)",
        strongest: "var(--green-strongest)",
      },
      "teal": {
        dimmest: "var(--teal-dimmest)",
        dimmer: "var(--teal-dimmer)",
        default: "var(--teal-default)",
        stronger: "var(--teal-stronger)",
        strongest: "var(--teal-strongest)",
      },
      "blue": {
        dimmest: "var(--blue-dimmest)",
        dimmer: "var(--blue-dimmer)",
        default: "var(--blue-default)",
        stronger: "var(--blue-stronger)",
        strongest: "var(--blue-strongest)",
      },
      "blurple": {
        dimmest: "var(--blurple-dimmest)",
        dimmer: "var(--blurple-dimmer)",
        default: "var(--blurple-default)",
        stronger: "var(--blurple-stronger)",
        strongest: "var(--blurple-strongest)",
      },
      "purple": {
        dimmest: "var(--purple-dimmest)",
        dimmer: "var(--purple-dimmer)",
        default: "var(--purple-default)",
        stronger: "var(--purple-stronger)",
        strongest: "var(--purple-strongest)",
      },
      "magenta": {
        dimmest: "var(--magenta-dimmest)",
        dimmer: "var(--magenta-dimmer)",
        default: "var(--magenta-default)",
        stronger: "var(--magenta-stronger)",
        strongest: "var(--magenta-strongest)",
      },
      "pink": {
        dimmest: "var(--pink-dimmest)",
        dimmer: "var(--pink-dimmer)",
        default: "var(--pink-default)",
        stronger: "var(--pink-stronger)",
        strongest: "var(--pink-strongest)",
      },
      "grey": {
        dimmest: "var(--grey-dimmest)",
        dimmer: "var(--grey-dimmer)",
        default: "var(--grey-default)",
        stronger: "var(--grey-stronger)",
        strongest: "var(--grey-strongest)",
      },
      "brown": {
        dimmest: "var(--brown-dimmest)",
        dimmer: "var(--brown-dimmer)",
        default: "var(--brown-default)",
        stronger: "var(--brown-stronger)",
        strongest: "var(--brown-strongest)",
      },
    },
    transitionDuration: {
      snappy: "var(--transition-duration-snappy)",
      chill: "var(--transition-duration-chill)",
    },
    transitionTimingFunction: {
      snappy: "var(--transition-timing-function-snappy)",
      chill: "var(--transition-timing-function-chill)",
    },
    extend: {
      transitionProperty: {
        background: "background-color, background-position, background-size",
      },
      borderColor: {
        "interactive": "var(--interactive-border)",
        "interactive-hover": "var(--interactive-border--hover)",
      },
      borderWidth: {
        default: "var(--border-width-default)",
      },
      ringWidth: {
        default: "var(--border-width-default)",
      },
    },
  },
  corePlugins: {
    // already included in tanukui
    preflight: false,
  },
  plugins: [],
};
export default config;
