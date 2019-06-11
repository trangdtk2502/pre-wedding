import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
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
              <Link className="navbar-item" to={`/`}>
                Top
              </Link>
              <Link className="navbar-item" to={`/stories`}>
                Stories
              </Link>
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