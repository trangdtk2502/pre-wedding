import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"

import SEO from "../components/seo"
import NavBar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";

import Img from "gatsby-image"
import Gallery from "../components/gallery";

class TopPage extends React.Component {
  interval = null

  constructor(props) {
    super(props)
    this._handleScroll = this._handleScroll.bind(this);
    const { data } = props
    moment.locale('vi');
    let today = moment()
    let diff = moment(data.site.siteMetadata.wedding.date) - today
    let duration = moment.duration(diff, 'milliseconds')
    this.state = { duration }
  }

  _handleCountDown() {
    let { duration }  = this.state
    this.setState({
      duration: moment.duration(duration.as('milliseconds') - 1000, 'milliseconds')
    })
  }

  _handleScroll(e) {
    console.log('scrolling')
  }
  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);
    this.interval = setInterval(() => this._handleCountDown(), 1000)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
    clearInterval(this.interval);
  }

  render() {
    const { data } = this.props
    let { duration } = this.state
    const weddingDate = moment(data.site.siteMetadata.wedding.date)

    const weddingDateFmt = weddingDate.format('DD/MM/YYYY')
    return (
      <div>
        <SEO title="Top" />
        <NavBar />
        <Banner bgClass="ht-banner-bg">
          <div className="ht-snow"/>
          <div className="hero-body">
            <div className="tile">
              <div className="tile is-vertical is-8 ht-title">
                <Img fixed={data.names.childImageSharp.fixed} />
                <h3>{ weddingDateFmt }</h3>
                <h1>SAVE THE DATE</h1>
                <Img fixed={data.headding.childImageSharp.fixed} />
              </div>
            </div>
          </div>
          <div className="hero-foot"></div>
        </Banner>
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile is-vertical ht-padtop">
                <div className="tile ht-card-title">
                  <h1>Invitation</h1>
                </div>
                <div className="tile ht-card-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile">
                  <div className="tile is-vertical ht-card-profile">
                    <figure className="image">
                      <Img className="is-rounded" fixed={data.groom.childImageSharp.fixed} />
                    </figure>
                    <h2>{ data.site.siteMetadata.wedding.groom.name }</h2>
                    <p>(S/O Mrs. Jeniffer & Mr. Clark Wills)</p>
                  </div>
                  <div className="tile is-4 is-vertical ht-card-info">
                    <p>We Inviting You And Your Family On</p>
                    <h3>{ weddingDateFmt }</h3>
                    <h1>SAVE THE DATE</h1>
                    <p>At St. Thomas's Church, London, U.K.</p>
                  </div>  
                  <div className="tile is-vertical ht-card-profile">
                    <figure className="image">
                      <Img className="is-rounded" fixed={data.bride.childImageSharp.fixed} />
                    </figure>
                    <h2>{ data.site.siteMetadata.wedding.bride.name }</h2>
                    <p>(S/O Mrs. Jeniffer & Mr. Clark Wills)</p>
                  </div>
                </div>
                <div className="tile is-vertical ">
                  <div className="ht-divide">
                    <h4>Đừng Bỏ Lỡ! Chỉ Còn
                    </h4>
                  </div>
                  <div className="tile ht-countdowm">
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{Math.floor(duration.asDays())}</span>
                      <p>Ngày</p>
                    </div>
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{duration.hours()}</span>
                      <p>Giờ</p>
                    </div>
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{duration.minutes()}</span>
                      <p>Phút</p>
                    </div>
                    <div className="tile is-vertical ht-countdown-item">
                      <span>{duration.seconds()}</span>
                      <p>Giây</p>
                    </div>
                  </div>
                  <div className="ht-divide">
                    <h4>Là Đến Ngày Chúng Tớ Về Chung Một Nhà!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner bgClass="ht-pattern-bg2">
          <div className="hero-body ht-gallery">
            <div className="container is-widescreen">
              <div className="tile is-vertical ht-padtop">
                <div className="tile ht-gallery-title">
                  <h4>Hoàng & Trang</h4>
                </div>
                <div className="tile ht-gallery-title">
                  <h1>Góc Kỉ Niệm
                  </h1>
                </div>
                <div className="tile ht-gallery-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile">
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile is-vertical ht-padtop">
                <div className="tile ht-card-title">
                  <h1>Place</h1>
                </div>
                <div className="tile is-vertical">
                  <div className="tile">
                  <div className="tile">
                      <div className="tile">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.608611670935!2d106.62016345102359!3d17.478437287965267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31475729edd74511%3A0xb217ea600005190c!2zMjUgUGhhbiBDaHUgVHJpbmgsIMSQ4buTbmcgTeG7uSwgxJDhu5NuZyBI4bubaSwgUXXhuqNuZyBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sjp!4v1560052811536!5m2!1svi!2sjp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                      </div>
                      <div className="tile">
                        ss
                      </div>
                    </div>
                  </div>
                  <div className="tile">
                    <div className="tile">
                      <div className="tile">
                        ss
                      </div>
                      <div className="tile">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.358855090208!2d107.78359795097634!3d12.492356991128256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI5JzMyLjUiTiAxMDfCsDQ3JzA4LjkiRQ!5e0!3m2!1svi!2sjp!4v1560052402202!5m2!1svi!2sjp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Footer />
      </div>
    )
  }
}

export default TopPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        wedding {
          date
          groom {
            name
            info
          }
          bride {
            name
            info
          }
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
          }
        }
      }
    }
    names: file(relativePath: { eq: "names.png" }) {
      childImageSharp {
        fixed(width: 400, height: 325) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    headding: file(relativePath: { eq: "headding.png" }) {
      childImageSharp {
        fixed(width: 177, height: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    groom: file(relativePath: { eq: "groom.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bride: file(relativePath: { eq: "bride.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`