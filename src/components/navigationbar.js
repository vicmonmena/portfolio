import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavigationBar = ({path}) => {
  return (
    <div className='navigation-container'>
      <div className={`navigation-item ${path === '/' ? 'item-selected' : ''}`}>
        <Link to="/"> Experience </Link>
      </div>
      <div className={`navigation-item ${path === '/skills' ? 'item-selected' : ''}`}>
        <Link to="/skills" > Skills </Link>
      </div>
      <div className={`navigation-item ${path === '/education' ? 'item-selected' : ''}`}>
        <Link to="/education" > Education </Link>
      </div>
    </div>
  )
}

NavigationBar.propTypes = {
  path: PropTypes.string
}

NavigationBar.defaultProps = {
  path: '/'
};

export default NavigationBar
