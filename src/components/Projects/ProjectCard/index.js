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
    <Grid
      gap={0}
      sx={{
        gridTemplateColumns: `minmax(150px, ${width}px) minmax(150px, ${width}px)`
      }}
    >
      <Box p={4} sx={{display: 'grid', background, height: '300px', alignItems: 'center'}}>
        <ProjectPlus sx={{width: '32px'}} />
        <Title title={title} subtitle={subtitle} category={category.title} link={projectPath} />
      </Box>
      <Grid>
        <Image image={image} link={projectPath} />
      </Grid>
    </Grid>
  )
}

function parseRGBA ({r, g, b, a}) {
  return `rgba(${r},${g},${b},${a})`
}
