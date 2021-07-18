/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const FullLayout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.sgfuerth.de">SG Fürth</a>
        </footer>
      </div>
    </>
  )
}

FullLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullLayout
