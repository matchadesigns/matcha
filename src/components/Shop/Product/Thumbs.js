/** @jsx jsx */
import Img from 'gatsby-image'
import {Grid, jsx} from 'theme-ui'
import {Fragment} from 'react'

export const Thumbs = ({thumbs}) => (
  <Fragment>
    {thumbs && (
      <Grid sx={{mb: 2, mr: 2}} columns={[3, 3, 2, 2, 1]}>
        {thumbs.map(i => (
          <Img
            key={i.asset.fluid.src}
            fluid={i.asset.fluid}
            sx={{
              boxShadow: '0px 10px 10px rgba(0, 0, 0, .035)',
              ':hover': {
                cursor: 'pointer'
              }
            }}
            data-attribute='SRL'
          />
        ))}
      </Grid>
    )}
  </Fragment>
)
