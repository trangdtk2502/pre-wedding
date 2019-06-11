import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"
import Banner from "../components/banner";

class Stories extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO title="Stories" />
        <Banner sizeClass="is-medium" bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              demo
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
  }
`
