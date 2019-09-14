import React from 'react'
import { Link } from 'gatsby'
import './base.css'

import style from './layout.module.css'

class Template extends React.Component {
  render() {
    const { location, children, title } = this.props

    const rootPath = '/'
    const Tag = location.pathname === rootPath ? 'h1' : 'h3'

    return (
      <div className={style.wrapper}>
        <header className={style.header}>
          <Tag className={style.title}>
            <Link to={rootPath}>{title}</Link>
          </Tag>
        </header>
        {children}
        <footer>
          <p>&copy; Copyright 2019, GnarTech</p>
        </footer>
      </div>
    )
  }
}

export default Template
