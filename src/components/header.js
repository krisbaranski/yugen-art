import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `auto`,
        maxWidth: 960,
        padding: `1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#c0a118`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
