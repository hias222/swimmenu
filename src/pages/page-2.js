import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from '@material-ui/core/Button';

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button variant="contained" color="primary">
        Primary
      </Button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
