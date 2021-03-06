/** @jsx jsx */
// import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Title} from './Title'
import {getProjectPath} from '../helpers'
import ProjectPlus from '../../../assets/svg/ProjectPlus.svg'

export const ProjectCard = ({title, subtitle, slug, category, previewImages, cardBgColor, width = 300}) => {
  graphql`
    fragment projectCardFields on SanityProject {
      id
      title
      subtitle
      slug {
        current
      }
      category {
        title
        slug {
          current
        }
      }
      previewImages: images {
        asset {
          ...projectCardImageFields
        }
      }
      cardBgColor {
        rgb {
          r
          g
          b
          a
        }
      }
    }
  `
  const projectPath = getProjectPath({category: category.slug, project: slug})
  const image = previewImages && previewImages[0]
  const background = cardBgColor && cardBgColor.rgb && parseRGBA(cardBgColor.rgb)
  return (
    <Grid gap={0} columns={[1, 2]} sx={{}}>
      <Box
        p={4}
        sx={{display: 'grid', order: [1, 0], gap: 0, background, minHeight: ['200px', '300px'], alignItems: 'center'}}
      >
        <ProjectPlus sx={{width: '32px', mb: 3}} />
        <Title title={title} subtitle={subtitle} category={category.title} link={projectPath} />
      </Box>
      <Grid sx={{order: [0, 1]}}>
        <Image image={image} link={projectPath} />
      </Grid>
    </Grid>
  )
}

function parseRGBA ({r, g, b, a}) {
  return `rgba(${r},${g},${b},${a})`
}
