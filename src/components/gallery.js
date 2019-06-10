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
          <input type="radio" name="slider" title="slide5" className="slider__nav"/>
          <input type="radio" name="slider" title="slide6" className="slider__nav"/>
          <input type="radio" name="slider" title="slide7" className="slider__nav"/>
          <input type="radio" name="slider" title="slide8" className="slider__nav"/>
          <input type="radio" name="slider" title="slide9" className="slider__nav"/>
          <input type="radio" name="slider" title="slide10" className="slider__nav"/>
          <input type="radio" name="slider" title="slide11" className="slider__nav"/>
          <div className="slider__inner">
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g1.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g2.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g3.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g4.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g5.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g6.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g7.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g8.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g9.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g10.childImageSharp.fluid} />
            </div>
            <div className="slider__contents">
              <Img className="ht-gallery-img" fluid={data.g11.childImageSharp.fluid} />
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
    g1: file(relativePath: { eq: "g1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g2: file(relativePath: { eq: "g2.jpg" }) {
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
    g4: file(relativePath: { eq: "g4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g5: file(relativePath: { eq: "g5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g6: file(relativePath: { eq: "g6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g7: file(relativePath: { eq: "g7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g8: file(relativePath: { eq: "g8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g9: file(relativePath: { eq: "g9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g10: file(relativePath: { eq: "g10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    g11: file(relativePath: { eq: "g11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`