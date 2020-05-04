import {tailwind} from '@theme-ui/presets'
import '../assets/styles/reset.css'
import '../assets/styles/custom.css'
import '../assets/styles/fonts.css'

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: '#B1834D',
    secondary: '#F2E9DF',
    brownWhite: '#F2E9DF',
    white: '#ffffff',
    black: '#1B171C',
    gray: '#464448',
    text: '#000'
  },
  fonts: {
    ...tailwind.fonts,
    body:
      '"ChampagneLimousines", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'SimplePrint'
  },
  styles: {
    ...tailwind.styles,
    h1: {
      ...tailwind.styles.h1,
      fontFamily: 'heading',
      fontWeight: 'heading',
      letterSpacing: '4px',
      color: 'primary',
      mt: 0,
      pt: 2
    },
    root: {
      ...tailwind.styles.root,
      bg: 'brownWhite',
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
      letterSpacing: '1px',
      a: {
        color: 'text',
        textDecoration: 'none'
      }
    }
  },
  layout: {
    header: {},
    content: {
      bg: 'white'
    },
    main: {
      bg: 'white',
      position: 'relative',
      zIndex: 1,
      pt: 3
    }
  }
}
