import {tailwind} from '@theme-ui/presets'
import '../assets/styles/reset.css'
import '../assets/styles/custom.css'
import '../assets/styles/fonts.css'
import {Styled} from 'theme-ui'

export default {
  ...tailwind,
  breakpoints: ['640px', '768px', '1024px', '1216px', '1600px'],
  colors: {
    ...tailwind.colors,
    primary: '#B1834D',
    secondary: '#F2E9DF',
    brownWhite: '#F2E9DF',
    white: '#ffffff',
    black: '#1B171C',
    gray: '#464448',
    text: '#000',
    green: '#39B54A'
  },
  fonts: {
    ...tailwind.fonts,
    body:
      '"ChampagneLimousines", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'SimplePrint'
  },
  buttons: {
    ...tailwind.buttons,
    primary: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 20,
      bg: 'secondary',
      color: 'text',
      ':hover': {
        bg: 'primary',
        color: 'white'
      }
    }
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
      },
      h1: {
        variant: 'styles.h1'
      },
      h2: {
        variant: 'styles.h2'
      },
      h3: {
        variant: 'styles.h3'
      },
      h4: {
        variant: 'styles.h4'
      },
      h5: {
        variant: 'styles.h5'
      },
      p: {
        pb: 3
      },
      strong: {
        fontWeight: 'bold'
      },
      a: {
        ...tailwind.styles.a,
        color: 'text',
        fontWeight: 'bold',
        ':hover': {
          textDecoration: 'underline'
        }
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
      zIndex: 1
    }
  }
}
