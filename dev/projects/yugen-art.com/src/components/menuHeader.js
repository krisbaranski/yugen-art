import * as React from "react"
import { Link } from "gatsby"

import { CSS } from "./menuHeader.module.css"

const MenuHeader = () => (
  <div
    style={{
      paddingTop: `10px`,
      padding: `.75rem`,
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <li>
        <Link to="/works">Works</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/simulations">Simulations</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default MenuHeader
