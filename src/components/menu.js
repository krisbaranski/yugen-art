import * as React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div
    style={{
      backgroundColor: `#f4f4f4`,
      paddingTop: `10px`,
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-around`,
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

export default Menu
