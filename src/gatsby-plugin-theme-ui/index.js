import { tailwind } from '@theme-ui/presets'

export default {
    ...tailwind,
    colors: {
        ...tailwind.colors,
        primary: "#605d5b",
        secondary: "#c99e63",
        gray: "#e3deda",
    },
    fonts: {
      ...tailwind.fonts,
      //body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'SimplePrint',
    },
    styles: {
      h1: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: '4em',
        letterSpacing: '4px',
        color: 'primary',
      }
    }
    /*
    fonts: {
      body: "system-ui, sans-serif",
      heading: "system-ui, sans-serif",
      monospace: "Menlo, monospace",
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
    */
  }