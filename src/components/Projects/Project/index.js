/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {getCategoryPath} from '../helpers'
import {Body} from './Body'
import {Images} from './Images'
import {Title} from './Title'
// import {Date} from './Date'

export const Project = project => {
  graphql`
    fragment projectFields on SanityProject {
      ...projectCardFields
      images {
        asset {
          ...projectImageFields
        }
      }
      _rawBody
      publishedAt
    }
  `
  const {
    title,
    subtitle,
    category,
    images,
    _rawBody
    // publishedAt
  } = project
  const categoryPath = getCategoryPath({category: category.slug})

  const thumbs = [...images]
  const image = thumbs.shift()

  return (
    <article>
      <Grid gap={2} columns={[1, 1, 2]}>
        <Box sx={{order: 0}}>
          <Images image={image} thumbs={thumbs} />
        </Box>
        <Box
          sx={{
            p: 4,
            mb: 2,
            order: [1, 2, 1],
            gridColumnStart: ['auto', 1, 'auto'],
            gridColumnEnd: ['auto', 4, 'auto']
          }}
        >
          <Title
            title={title}
            subtitle={subtitle}
            category={{title: category.title, link: categoryPath}}
          />
          <Body raw={_rawBody} />
          {/*
          <Date date={publishedAt} />
          */}
        </Box>
      </Grid>
    </article>
  )
}
