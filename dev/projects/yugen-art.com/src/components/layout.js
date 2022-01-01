/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout.css"
import "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          overflow: `hidden`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            // position: `fixed`,
            background: `#fff`,
            width: `100%`,
            padding: `1.0875rem`,
            bottom: 0,
            marginBottom: 0,
          }}
        >
          © {new Date().getFullYear()}, by YUGENart
          {` `}
          <a href="https://www.gatsbyjs.com">Contact</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
