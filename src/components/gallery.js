import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

// import { Link } from "gatsby"
import "../styles/custom-slider.scss"

const Gallery = () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <div className="ht-gallery-slide">
        <div className="slider">
          <input type="radio" name="slider" title="slide1" defaultChecked className="slider__nav"/>
          <input type="radio" name="slider" title="slide2" className="slider__nav"/>
          <input type="radio" name="slider" title="slide3" className="slider__nav"/>
          <input type="radio" name="slider" title="slide4" className="slider__nav"/>
          <div className="slider__inner">
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g3.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g1.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g2.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g3.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default Gallery

export const pageQuery = graphql`
  query {
    g1: file(relativePath: { eq: "g1.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g2: file(relativePath: { eq: "g2.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g3: file(relativePath: { eq: "g3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`