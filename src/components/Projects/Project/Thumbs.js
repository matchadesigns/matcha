/** @jsx jsx */
import {sanityConfig} from '../../../../sanity-config'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {Grid, jsx} from 'theme-ui'
import {Fragment} from 'react'

export const Thumbs = ({thumbs}) => (
  <Fragment>
    {thumbs && (
      <Grid sx={{mb: 2, mr: 2}} columns={[2, 3]}>
        {thumbs.map(i => (
          <GatsbyImage
            key={i.asset._id}
            image={getGatsbyImageData(i.asset, {}, sanityConfig)}
            alt={'Image'}
            sx={{
              boxShadow: '0px 10px 10px rgba(0, 0, 0, .035)',
              ':hover': {
                cursor: 'pointer',
              },
            }}
            data-attribute="SRL"
          />
        ))}
      </Grid>
    )}
  </Fragment>
)
