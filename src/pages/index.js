import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"
import Banner from "../components/banner";
import Layout from "../layouts";

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
      <Layout>
        <SEO title="Top" />
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
                    {
                      data.site.siteMetadata.wedding.groom.info.map(i => (
                        <p>{i}</p>
                      ))
                    }
                    <p></p>
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
                    {
                      data.site.siteMetadata.wedding.bride.info.map(i => (
                        <p>{i}</p>
                      ))
                    }
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
                <div className="tile ht-card-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile ht-place-map">
                      <div className="tile ht-right">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.608611670935!2d106.62016345102359!3d17.478437287965267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31475729edd74511%3A0xb217ea600005190c!2zMjUgUGhhbiBDaHUgVHJpbmgsIMSQ4buTbmcgTeG7uSwgxJDhu5NuZyBI4bubaSwgUXXhuqNuZyBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sjp!4v1560052811536!5m2!1svi!2sjp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                      </div>
                      <div className="tile ht-left">
                        <div>
                          <h1>Tư Gia Nhà Gái</h1>
                          <p>125 Phan Chu Trinh, Đồng Mỹ, Đồng Hới, Quảng Bình, Việt Nam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tile">
                    <div className="tile ht-place-map">
                      <div className="tile ht-right">
                        <div>
                          <h1>Tư Gia Nhà Trai</h1>
                          <p>178 Thanh Sơn, Nam Xuân, Krông Nô, Đak Nông, Việt Nam</p>
                        </div>
                      </div>
                      <div className="tile ht-left">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.358855090208!2d107.78359795097634!3d12.492356991128256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI5JzMyLjUiTiAxMDfCsDQ3JzA4LjkiRQ!5e0!3m2!1svi!2sjp!4v1560052402202!5m2!1svi!2sjp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner bgClass="ht-pattern-bg3">
          <div className="ht-mask"/>
          <div className="hero-body ht-gallery">
            <div className="container is-widescreen">
              <div className="tile is-vertical ht-padtop">
                <div className="tile ht-gallery-title">
                  <h1>Tham Gia | Gửi Lời Chúc</h1>
                </div>
                <div className="tile ht-gallery-title">
                  <Img fixed={data.headding.childImageSharp.fixed} />
                </div>
                <div className="tile ht-guest">
                  <div className="tile is-vertical ht-somewords">
                    <h1>Lời Ngỏ </h1>
                    <p>
                      Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker
                    </p>
                  </div>
                  <div className="tile ht-form">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgFpQKSSHddqeJsIo792liorHnSiW8XTfuiJx39cHPNdrqWQ/viewform?embedded=true" width="640" height="628" frameBorder="0" marginHeight="0" marginWidth="0">Đang tải...</iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Banner>
        <Banner sizeClass="is-small" bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile ht-fb">
                <div className="tile is-vertical">
                  <FontAwesomeIcon size="6x" icon={faFacebook} color="#4267b2" />
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100001147277648">
                    <span className="icon">
                      <img src="http://graph.facebook.com/100001147277648/picture?type=square" />
                    </span>
                    <span> hoangvx</span>
                  </a>
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100009074477752">
                    <span className="icon">
                      <img src="http://graph.facebook.com/100009074477752/picture?type=square" />
                    </span>
                    <span> Trang</span>
                  </a>
                </div>
                <div className="tile is-1 ht-divide-vertical">
                  <h4>OR</h4>
                </div>
                <div className="tile is-vertical">
                  <FontAwesomeIcon size="6x" icon={faEnvelope} color="#4267b2" />
                  <a href="mailto:hoang.vx@outlook.jp?subject=[Wedding] FAQ">
                    hoang.vx@outlook.jp
                  </a>
                  <a href="mailto:trangdtk93@gmail.com?subject=[Wedding] FAQ">
                    trangdtk93@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
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
    groom: file(relativePath: { eq: "groom-profile.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bride: file(relativePath: { eq: "bride-profile.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`