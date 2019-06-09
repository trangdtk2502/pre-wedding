import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../styles/custom-navbar.scss"

const NavBar = () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <nav className="navbar is-fixed-top ht-navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ht-logo">
          <Img fixed={ data.logo.childImageSharp.fixed } /> 
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="navbar-item">
                Home
              </a>
              <a className="navbar-item">
                Gallery
              </a>
              <a className="navbar-item">
                Stories
              </a>
              <a className="navbar-item">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo1.png" }) {
      childImageSharp {
        fixed(width: 300, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`