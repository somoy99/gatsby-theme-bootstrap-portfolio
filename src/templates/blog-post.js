import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

export const pageQuery = graphql`
  query MdxBlogPost($slug: String) {
    allMdx(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          body
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
const BlogPost = ({ data }) => (
  <>
    <Layout>
      <Seo title={data.allMdx.edges[0].node.frontmatter.title} />

      <div style={{ marginTop: '300px' }} className='container'>
        <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
      </div>
    </Layout>
  </>
)

export default BlogPost
