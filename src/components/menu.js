import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

const Menu = () => (
  <Layout
    style={{
      backgroundColor: `#f4f4f4`,
      paddingTop: `20px`,
    }}
  >
    <ul
      style={{
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-evenly`,
      }}
    >
      <li>
        <Link to="/works">Works</Link>
      </li>
      <li>
        <Link to="/simulation">Simulation</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Layout>
)

export default Menu
