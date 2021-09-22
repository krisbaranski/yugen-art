import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <h1>Latest posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read more</Link>
          <br />
          <br />
          <hr />
        </small>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            author
          }
        }
      }
    }
  }
`

export default BlogPage
