import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../styles/app.scss'

const BlogPage = (props) => {
  const postList = props.data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <div id="home">
        <div className="container center">
          <div className="row">
            <div className="col-md-12">
              {postList.edges.map(({ node }, i) => (
                 <Link to={node.fields.slug} className="link">
                   <div className="post-list">
                    <h1>{node.frontmatter.title}</h1>
                    <span>{node.frontmatter.date}</span>
                    <p>{node.excerpt}</p>
                  </div>
                 </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`