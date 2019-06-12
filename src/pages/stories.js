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

    return (
      <Layout>
        <SEO title="Stories" />
        <BreadCrumb />
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile ht-card-title">
                <h1>Những Câu Chuyện</h1>
              </div>
              <div className="tile ht-card-title">
                <Img fixed={data.headding.childImageSharp.fixed} />
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
  }
`
