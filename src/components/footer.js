import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Banner = () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <section className={`hero is-dark`}>
        <div className="hero-body">
          <nav className="navbar">
            <div className="navbar-brand">
              <Img fixed={ data.logo.childImageSharp.fixed } /> 
            </div>
          </nav>
        </div>
      </section>
    )}
  />
)

export default Banner

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo3.png" }) {
      childImageSharp {
        fixed(width: 300, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`