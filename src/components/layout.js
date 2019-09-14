import React from 'react'
import { Link } from 'gatsby'
import './base.css'

import style from './layout.module.css'

class Template extends React.Component {
  getYears = () => {
    const start = 2019
    const current = new Date().getFullYear()
    return current > start ? `${start} - ${current}` : start
  }

  render() {
    const { location, children, title } = this.props

    const rootPath = '/'
    const Tag = location.pathname === rootPath ? 'h1' : 'h3'

    return (
      <div className={style.wrapper}>
        <header className={`${style.header}`}>
          <div className={`margin-wrapper ${style.headerContent}`}>
            <Tag className={style.title}>
              <Link to={rootPath}>{title}</Link>
            </Tag>
            <div className={style.headerBtnWrapper}>
              <button className="btn text-btn">Log In</button>
              <button className="btn ghost-btn">Sign Up</button>
            </div>
          </div>
        </header>
        {children}
        <footer className={`${style.footer}`}>
          <div className="margin-wrapper">
            <p>
              &copy; Copyright {this.getYears()}, GnarTech. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Template
