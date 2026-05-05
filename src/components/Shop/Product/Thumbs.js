/** @jsx jsx */
import {sanityConfig} from '../../../../sanity-config'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {Grid, jsx} from 'theme-ui'
import {Fragment} from 'react'

export const Thumbs = ({thumbs}) => (
  <Fragment>
    {thumbs && (
      <Grid sx={{mb: 2, mr: 2}} columns={[3, 3, 2, 2, 1]}>
        {thumbs.map((i) => (
          <a key={i.asset._id} href={i.asset.url} data-attribute="SRL">
            <GatsbyImage
              image={getGatsbyImageData(i.asset, {}, sanityConfig)}
              alt={"Image"}
              sx={{
                boxShadow: "0px 10px 10px rgba(0, 0, 0, .035)",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
          </a>
        ))}
      </Grid>
    )}
  </Fragment>
)
