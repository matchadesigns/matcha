/** @jsx jsx */
import {jsx, Box} from 'theme-ui'
import {useSiteMetadata} from '../../../lib/useSiteMetadata'

export const TopMessage = () => {
  const {topMessage} = useSiteMetadata()
  return (
    topMessage &&
    topMessage.length > 0 && (
      <Box
        sx={{
          width: 'full',
          zIndex: 10,
          textAlign: 'center',
          bg: 'primary',
          color: 'white',
          fontSize: [0, 1, 1],
          p: [1],
          mb: 1,
        }}
      >
        {topMessage}
      </Box>
    )
  )
}
