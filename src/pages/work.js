import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/eeo'
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/work.css'
import WCover from '../../assets/work.svg'
import { MDXRenderer } from 'gatsby-plugin-mdx'
export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/work/" } }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            date
            description
            backgroundColor
          }
        }
      }
    }
  }
`

const work = ({ data }) => {
  const allWork = data.allMdx.edges

  return (
    <>
      <Layout>
        <Seo title='Work' />

        <div className='text-center' id='work'>
          <WCover id='w_cover' />
          <div id='header_text' className='text-center'>
            <h3>What I've been doing.</h3>
          </div>
        </div>
        <div id='posts' className='text-center'>
          <div>
            {allWork.map((e, i) => (
              <div
                key={i}
                style={{
                  paddingTop: '50px',
                  minHeight: '640px',
                  width: '100%',
                  background: e.node.frontmatter.backgroundColor
                }}
              >
                <MDXRenderer>{e.node.body}</MDXRenderer>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default work
