// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Paper } from "@material-ui/core"

import useSiteMetadata from '../hooks/use-site-metadata';

type DataProps = {
  site: {
    buildTime: string
  }
}

const defaultIndex: React.FC<PageProps<DataProps>> = ({ data, path }) => (

  <Layout>
     <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <Seo title="Base" />
    <Box height={30} />
    <Paper>
      <Grid container spacing={5}>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/display"}>
            Display
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/admin"}>
            Admin
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/frontend"}>
            Frontend
          </Button>
        </Grid>
      </Grid>
    </Paper>

    <Box height={50} />

    <Paper>
      <Grid container spacing={5}>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/peer"}>
            Peer Camera Remote
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/live"}>
            Live
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/overlay"}>
            Overlay
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/camera"}>
            Camera Test
          </Button>
        </Grid>

      </Grid>
    </Paper>


    <Paper>
      <Grid container spacing={5}>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteUnsecureURL + "/obstablet"}>
            OBS Tablet
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/obscontrol/api-docs"}>
            OBS Control
          </Button>
        </Grid>

        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteUnsecureURL + "/myCA.pem"}>
            myCA.pem
          </Button>
        </Grid>

        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={useSiteMetadata().siteURL + "/sound"}>
            sound
          </Button>
        </Grid>

      </Grid>
    </Paper>

    <Box height={50} />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default defaultIndex

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
