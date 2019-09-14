import React from 'react'
import { Link } from 'gatsby'

import style from './article-preview.module.css'

export default ({ article }) => (
  <article className={style.wrapper}>
    <header>
      <h3 className={style.title}>
        <Link to={`/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.publishDate}</p>
    </header>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags && (
      <div>
        {article.tags.map(tag => (
          <button className={style.tag} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    )}
  </article>
)
