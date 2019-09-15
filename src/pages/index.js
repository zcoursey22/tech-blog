import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet title={siteTitle} />
        <main className="margin-wrapper">
          <div className="article-list">
            {posts.map(({ node }) => {
              return <PostPreview post={node} key={node.slug} />
            })}
          </div>
        </main>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          author {
            name
          }
          slug
          publishDate(formatString: "MMM D, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 2048, maxHeight: 1024, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
