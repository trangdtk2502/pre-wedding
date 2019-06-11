module.exports = {
  siteMetadata: {
    title: `Hoang & Trang`,
    author: `HoangVX`,
    description: `A blogs for ours wedding.`,
    siteUrl: `https://xxx.netlify.com/`,
    wedding: {
      date: '2019-07-22',
      groom: {
        name: 'Võ Xuân Hoàng ',
        info: [
          'Là kỹ sư công nghệ thông tin. Hiện tại đang sống và làm việc tại sứ sở hoa anh đào.',
          'Chơi game rất pro :), đặt biệt là liên minh huyền thoại.',
          'Tính cách hướng nội, nhưng hoà đồng với mọi người'
        ]
      },
      bride: {
        name: 'Đào Thi Khánh Trang',
        info: [
          'Là kỹ sư công nghệ thông tin. Hiện tại đang làm việc tại nhật bản.',
          'Yêu thích kinh doanh và shopping.',
          'Tính cách hoà đồng với mọi người, và yêu ghét rõ ràng.'
        ]
      }
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
  ],
}
