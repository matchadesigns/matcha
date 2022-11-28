/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Arrow} from './Arrow'
// import {motion} from 'framer-motion'
import {Bottom} from './Bottom'
import {Subtitle} from './Subtitle'
import {Title} from './Title'
import {AnimTopLeft} from './AnimTopLeft'
import {AnimBottomLeft} from './AnimBottomLeft'
import {AnimBottomCenter} from './AnimBottomCenter'
import {AnimBottomRight} from './AnimBottomRight'

const bottomHeight = '40px'

export const Homepage = () => {
  return (
    <div
      sx={{
        height: '100vh',
        zIndex: 0,
      }}
    >
      <div
        sx={{
          height: `calc(100vh - ${bottomHeight})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 'inherit',
        }}
      >
        <Title />
        <Subtitle />
        <AnimTopLeft width={['55vmin']} top={['-10vmin']} left={['-5vmin']} />
        <AnimBottomLeft height={['40vmin']} bottom={['20vmin']} left={['0']} />
        <AnimBottomCenter
          height={['55vmin']}
          bottom={['35vmin']}
          right={['33%']}
        />
        <AnimBottomRight
          height={['55vmin']}
          bottom={['55vmin']}
          right={['30vmin']}
        />
        <Arrow />
      </div>
      <Bottom height={bottomHeight} />
    </div>
  )
}
