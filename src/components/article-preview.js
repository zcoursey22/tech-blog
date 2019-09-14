import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from './article-preview.module.css'

export default ({ article }) => (
  <article className={style.wrapper}>
    <Link to={`/${article.slug}`}>
      <Img className={style.img} fluid={article.heroImage.fluid} />
    </Link>
    <div className={style.content}>
      <header>
        <Link to={`/${article.slug}`}>
          <h3 className={style.title}>{article.title}</h3>
        </Link>
        <p className={style.date}>{article.publishDate}</p>
      </header>

      <div
        className={style.desc}
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
    {/* {article.tags && (
      <div className={style.tagsWrapper}>
        {article.tags.map(tag => (
          <button className={style.tag} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    )} */}
  </article>
)
