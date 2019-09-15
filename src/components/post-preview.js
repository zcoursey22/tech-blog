import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from './post-preview.module.css'

export default ({ post }) => (
  <article className={style.wrapper}>
    <Link to={`/${post.slug}`}>
      <Img className={style.img} fluid={post.heroImage.fluid} />
    </Link>
    <div className={style.content}>
      <header>
        <Link to={`/${post.slug}`}>
          <h3 className={style.title}>{post.title}</h3>
        </Link>
        <p className={style.date}>
          <span className={style.dot} />
          {post.publishDate}
        </p>
        {/* {post.author && <p>{post.author.name}</p>} */}
      </header>

      <div
        className={style.desc}
        dangerouslySetInnerHTML={{
          __html: post.description.childMarkdownRemark.html,
        }}
      />
    </div>
    {/* {post.tags && (
      <div className={style.tagsWrapper}>
        {post.tags.map(tag => (
          <button className={style.tag} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    )} */}
  </article>
)
