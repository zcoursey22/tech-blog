import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
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
              <Link to={rootPath}>
                {title.split('.')[0]}
                <span className={style.logoDot}>.</span>
                {title.split('.')[1]}
              </Link>
            </Tag>
            <Tag className={style.titleMobile}>
              <Link to={rootPath}>
                {title.split('.')[0]}
                <span className={style.logoDot}>.</span>
              </Link>
            </Tag>
            <div className={style.headerBtnWrapper}>
              <button className="btn text-btn">Log In</button>
              <button className="btn">Sign Up</button>
            </div>
            <div className={style.headerBtnWrapperMobile}>
              <button className="btn ghost-btn btn-mobile">Get Started</button>
            </div>
          </div>
        </header>
        {children}
        <footer className={`${style.footer}`}>
          <div className={`${style.footerContent} margin-wrapper`}>
            <p>
              &copy; Copyright {this.getYears()}, gnartech. All rights reserved.
            </p>
            <div className={style.social}>
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Template
