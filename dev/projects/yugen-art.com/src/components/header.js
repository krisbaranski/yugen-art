import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MenuHeader from "./menuHeader"
import { yugenLogo } from "../images/yugen_logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      background: `transparent`,
      margin: `auto`,
      maxWidth: 960,
    }}
  >
    <div
      style={{
        margin: 0,
        maxWidth: 960,
        padding: `1.0875rem`,
      }}
    >
      {/* Title / Logo Area */}
      <span style={{ display: "flex", alignItems: "center", zIndex: 100 }}>
        <img
          src={yugenLogo}
          alt="YUGENart Logo"
          style={{
            width: `auto`,
            margin: "0 10px",
          }}
        />
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
      </span>
    </div>
    <MenuHeader />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
