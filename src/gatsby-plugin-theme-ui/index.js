import {tailwind} from '@theme-ui/presets'
// import '../assets/styles/reset.css'
import '../assets/styles/custom.css'
import '../assets/styles/fonts.css'

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
    text: '#000',
    green: '#39B54A',
    red: '#D48464'
  },
  fonts: {
    ...tailwind.fonts,
    body:
      '"Sulphur Point", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'SimplePrint'
  },
  fontWeights: {
    ...tailwind.fontWeights,
    body: 300
  },
  buttons: {
    ...tailwind.buttons,
    primary: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 20,
      bg: 'secondary',
      color: 'text',
      transition: 'background-color 0.5s ease',
      ':hover': {
        cursor: 'pointer',
        bg: 'primary',
        color: 'white'
      }
    },
    discrete: {
      borderRadius: 4,
      px: 2,
      py: 1,
      bg: 'secondary',
      color: 'text',
      ':hover': {
        cursor: 'pointer',
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
      fontSize: '2em',
      letterSpacing: '4px',
      color: 'primary',
      mt: 0,
      pt: 2
    },
    root: {
      maxWidth: '100vw',
      fontWeight: 300,
      ...tailwind.styles.root,
      minHeight: 'full',
      height: 'full',
      bg: 'brownWhite',
      fontFamily: 'body',
      letterSpacing: '1px',
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
      strong: {
        fontWeight: 'bold'
      },
      a: {
        ...tailwind.styles.a,
        color: 'text',
        textDecoration: 'none',
        fontWeight: 'bold',
        ':hover': {
          // textDecoration: 'underline'
          color: 'gray.7'
        }
      },
      'a,button': {
        ':focus': {outline: 0}
      }
    }
  },
  layout: {
    header: {
      // top: 0,
      zIndex: 4,
      p: 2,
      flexWrap: 'wrap',
      alignItems: 'stretch',
      '#logo': {
        flexGrow: 1,
        flexBasis: 'sidebar',
        pl: 3,
        py: 2
      },
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 99999,
        flexBasis: 0,
        minWidth: '50%',
        a: {
          fontWeight: 'light'
        }
      }
    },
    content: {
      bg: 'white',
      minHeight: '60vh',
      position: 'relative'
    },
    main: {
      bg: 'white',
      position: 'relative',
      zIndex: 1
    },
    mobileMenu: {
      bg: 'primary',
      position: 'fixed',
      height: '100%',
      display: ['block', 'block', 'block', 'none'],
      p: 4,
      color: 'white',
      a: {
        color: 'white',
        py: 3,
        borderBottom: '1px solid',
        borderColor: 'rgba(255,255,255,0.125)'
      }
    },
    footer: {
      gridRowStart: 3,
      gridRowEnd: 4,
      bg: 'black',
      color: 'white',
      a: {color: 'white'},
      p: 4,
      textAlign: 'center'
    }
  }
}
