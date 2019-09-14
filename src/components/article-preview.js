import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from './article-preview.module.css'

export default ({ article }) => (
  <article className={style.wrapper}>
    <Img className={style.img} fluid={article.heroImage.fluid} />
    <header>
      <h3 className={style.title}>
        <Link to={`/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className={style.date}>{article.publishDate}</p>
    </header>
    <p
      className={style.desc}
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags && (
      <div className={style.tagsWrapper}>
        {article.tags.map(tag => (
          <button className={style.tag} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    )}
  </article>
)
