// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Paper } from "@material-ui/core"

type DataProps = {
  site: {
    buildTime: string
  }
}

const url = window.location.hostname;
const port = window.location.port;


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
          <Button variant="contained" color="primary" href={"https://" + url + ":" + port + "/display"}>
            Display
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={"https://" + url + ":" + port + "/live"}>
            Live
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={"https://" + url + ":" + port + "/overlay"}>
            Overlay
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={"https://" + url + ":" + port + "/admin"}>
            Admin
          </Button>
        </Grid>
      </Grid>
    </Paper>

    <Box height={50} />

    <Paper>
      <Grid container spacing={5}>
        <Grid item xs={6} md={3}>
          <Button variant="contained" color="primary" href={"https://" + url + ":" + port + "/camera"}>
            Camera
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
