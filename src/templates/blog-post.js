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
              <p className={style.date}>
                <span className={style.dot} />
                {post.publishDate}
              </p>
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
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
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
