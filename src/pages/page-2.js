import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';

import DeleteIcon from '@material-ui/icons/Delete';

const SecondPage = () => (

  <Layout>
    <Box color="red">
    <p><b>Test</b></p>
    <p><DeleteIcon /></p>
    </Box>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Grid container spacing={10}>
      <Grid item xs={6} md={3}> 
        <Button variant="contained" color="primary">
          1
        </Button>
      </Grid>
      <Grid item xs={6} md={3}>
        <Button variant="contained" color="primary">
          2
        </Button>
      </Grid>
      <Grid item xs={6} md={3}>
        <Button variant="contained" color="primary">
          3
        </Button>
      </Grid>
      <Grid item xs={6} md={3}>
        <Button variant="contained" color="primary" href="http://www.youtube.com">
          4
        </Button>
      </Grid>
    </Grid>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
