/** @jsx jsx */
import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {FcLike} from 'react-icons/fc'
import {FaComment} from 'react-icons/fa'
import {Card, Link, Flex, Image, jsx, Text} from 'theme-ui'
import {truncateString} from '../../lib/helpers'

export const Post = ({id, caption, thumbnails, likes, comments}) => {
  graphql`
    fragment InstagramPostFields on InstaNode {
      id
      caption
      likes
      comments
      thumbnails {
        src
        config_width
        config_height
      }
    }
  `
  const likesCommentsColor = 'gray.4'
  return (
    <motion.div whileTap={{scale: 0.9}}>
      <a
        href={`https://instagram.com/p/${id}`}
        sx={{
          fontWeight: 'light',
          color: 'gray.7',
          ':hover': {
            color: 'black'
          }
        }}
        target='_blank'
        noopener='true'
        noreferrer='true'
      >
        <Card
          as='article'
          sx={{
            bg: 'gray.1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'background-color 0.5s ease',
            ':hover': {
              bg: 'gray.2'
            },
            maxWidth: thumbnails[2].config_width
          }}
        >
          <Image src={thumbnails[2].src} />
          <Text p={3} pb={1}>
            {truncateString(caption, 140)}
          </Text>
          <Flex px={3} pb={3} sx={{color: likesCommentsColor, alignItems: 'center'}}>
            <FcLike sx={{path: {fill: 'gray.4'}}} /> <span sx={{pl: 1, pr: 3}}>{likes}</span>
            <FaComment /> <span sx={{pl: 1, pr: 3}}>{comments}</span>
          </Flex>
        </Card>
      </a>
    </motion.div>
  )
}
