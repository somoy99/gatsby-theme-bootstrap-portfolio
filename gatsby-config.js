module.exports = options => ({
  siteMetadata: {
    title: 'Somoy Portfolio',
    author: {
      name: 'somoy khan',
      summary:
        'who lives and works in planet Earth builiding useful Full Stack Applications using Top notch Javascript Technologies.'
    },
    description: 'A starter portfolio demonstrating what I can do.',
    siteUrl: 'https://elegant-khorana-6044ac.netlify.app/',
    social: {
      twitter: 'mdtsk'
    }
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: options.contentPath || 'work',
        name: 'work'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: options.contentPath || 'blog',
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/
        }
      }
    }
  ]
})
