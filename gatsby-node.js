const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState()
  const contentPath = options.contentPath || 'work'
  const workDir = path.join(program.directory, contentPath)
  const contentPath2 = options.contentPath || 'blog'
  const blogDir = path.join(program.directory, contentPath2)
  if (!fs.existsSync(workDir)) {
    mkdirp.sync(workDir)
  }
  if (!fs.existsSync(blogDir)) {
    mkdirp.sync(blogDir)
  }
}

exports.onPreInit = () => {
  console.log('Testing...')
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading ....', result.errors)
  }

  result.data.allMdx.edges.map(e => {
    actions.createPage({
      path: `blog/${e.node.frontmatter.slug}`,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { slug: e.node.frontmatter.slug }
    })
  })
}
