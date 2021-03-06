import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

import style from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <main>
          <Img className={style.img} fluid={post.heroImage.fluid} />
          <div
            className={`margin-wrapper post-margin-wrapper ${style.postWrapper}`}
          >
            <header className={style.header}>
              <h1 className={style.title}>{post.title}</h1>
              {post.author && (
                <div className={style.authorWrapper}>
                  <Img fluid={post.author.image.fluid} />
                  <div>
                    <p className={style.author}>{post.author.name}</p>
                    <p className={style.date}>{post.publishDate}</p>
                  </div>
                </div>
              )}
            </header>
            <div
              className={style.postContent}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </main>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
        image {
          fluid(maxWidth: 2048, background: "rgb:000000") {
            ...GatsbyContentfulFluid
          }
        }
      }
      publishDate(formatString: "MMM D, YYYY")
      heroImage {
        fluid(maxWidth: 2048, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
