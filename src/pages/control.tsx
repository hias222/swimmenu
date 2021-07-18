// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import useSiteMetadata from "../hooks/use-site-metadata"

import FullLayout from "../components/fullLayout"
import { Box, Grid } from "@material-ui/core"

type DataProps = {
  site: {
    buildTime: string
  }
}

const control: React.FC<PageProps<DataProps>> = ({ data, path }) => (

  <FullLayout>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>

    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <Box height={'90vH'}>
          <iframe width={'100%'} height={'100%'} src={useSiteMetadata().siteURL + "/admin"}></iframe>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <iframe width={'100%'} height={'100%'} src={useSiteMetadata().siteURL + "/display"}></iframe>
      </Grid>
    </Grid>

    <Link to="/">Go back to the homepage</Link>
  </FullLayout>
)

export default control

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
