// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import useSiteMetadata from "../hooks/use-site-metadata"

import FullLayout from "../components/fullLayout"
import { Box, Grid } from "@material-ui/core"
import { Height } from "@material-ui/icons"

type DataProps = {
  site: {
    buildTime: string
  }
}

const overlay: React.FC<PageProps<DataProps>> = ({ data, path }) => (

  <FullLayout>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>


    <Grid container spacing={3}>
      <Grid item xs={7} md={7}>
        <Grid item xs={12} md={12}>
          <Box height={'90vH'} border={1}>
            <iframe width={'100%'} height={'100%'}
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`
              }}
              src={useSiteMetadata().siteURL + "/admin"}></iframe>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={5} md={5}>
        <Grid item xs={12} md={12}>
          <Box height={'45vH'} width={'100%'} border={1}>
            <iframe 
              style={{
                WebkitTransform: 'scale(0.5) translate(-50%, -50%)',
                height: '90vH',
                width: '150vH'
              }}
              src={useSiteMetadata().siteURL + "/live"}></iframe>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box height={'45vH'} border={1}>
            <iframe 
              style={{
                WebkitTransform: 'scale(0.5) translate(-50%, -50%)',
                height: '90vH',
                width: '150vH',
              }}
              src={useSiteMetadata().siteURL + "/overlay"}></iframe>
          </Box>
        </Grid>
      </Grid>
    </Grid>

    <Link to="/">Go back to the homepage</Link>
  </FullLayout >
)

export default overlay

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
