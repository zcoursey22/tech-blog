import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location, children, title } = this.props

    const rootPath = '/'
    const Tag = location.pathname === rootPath ? 'h1' : 'h3'

    return (
      <div className="layout">
        <Tag>
          <Link to={rootPath}>{title}</Link>
        </Tag>
        {children}
      </div>
    )
  }
}

export default Template
