import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts"
import SEO from "../components/seo"
import Banner from "../components/banner";
import BreadCrumb from "../components/breadcrumb";

class Stories extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Stories" />
        <BreadCrumb />
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile ht-card-title">
                <h1>Ký Sự</h1>
              </div>
              <div className="tile ht-card-title">
                <Img fixed={data.headding.childImageSharp.fixed} />
              </div>
              <div className="tile is-vertical">
                {posts.map(({ node }, idx) => {
                  const title = node.frontmatter.title || node.fields.slug
                  if (idx % 2 == 0) { 
                    return (
                        <div key={node.fields.slug} className="tile">
                          <div className="tile">
                            <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
                          </div>
                          <div className="tile">
                            
                          </div>
                        </div>
                      )
                   } else {
                    return (
                      <div key={node.fields.slug} className="tile">
                        <div className="tile">
                          
                        </div>
                        <div className="tile">
                          <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
                        </div>
                      </div>
                    )
                   }
                })}
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    )
  }
}

export default Stories

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headding: file(relativePath: { eq: "headding.png" }) {
      childImageSharp {
        fixed(width: 177, height: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              id
              publicURL
              childImageSharp {
                fixed(height: 200, width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
