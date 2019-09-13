import React from 'react'
import { Link } from 'gatsby'

export default ({ article }) => (
  <article>
    <header>
      <h3>
        <Link to={`/${article.slug}`}>{article.title}</Link>
      </h3>
      <date datetime={new Date(article.publishDate)}>
        {article.publishDate}
      </date>
    </header>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags && article.tags.map(tag => <div key={tag}>{tag}</div>)}
  </article>
)
