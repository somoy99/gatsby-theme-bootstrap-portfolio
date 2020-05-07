import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BCover from "../../assets/work.svg";
import "../styles/blog.css";

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
const blog = ({ data }) => {
    const posts = data.allMdx.edges;
    return (
        <>
            <Layout>
                <SEO title="All posts" />

                <div className="text-center" id="blog">
                    <BCover id="b_cover" />
                    <div id="bheader_text" className="text-center">
                        <h3>What I've been writing.</h3>
                    </div>
                </div>
                <div>
                    {posts.map(({ node }, index) => {
                        const title = node.frontmatter.title || node.frontmatter.slug;
                        return (
                            <article key={node.frontmatter.slug} className="text-center" style={{background:"white" }}>
                                <header>
                                    <h3>
                                        <Link
                                            style={{ boxShadow: `none`, textDecoration:`none`, color:'#324DB2' }}
                                            to={"blog/" + node.frontmatter.slug}
                                        >
                                            {title}
                                        </Link>
                                    </h3>
                                    <small>{node.frontmatter.date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: node.frontmatter.description || node.excerpt,
                                        }}
                                    />
                                </section>
                            </article>
                        );
                    })}
                </div>

            </Layout>

        </>
    );
};

export default blog;
