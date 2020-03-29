import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import "./layout.css"
import SideBar from "./sidebar"
import NavigationBar from './navigationbar';
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'

const Layout = ({ children, path }) => {
  return (
  <div className='layout'>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <SideBar />
    <div className='content'>
      <NavigationBar path={path}/>
      <main className='main-container'>{children}</main>
      <Footer />
    </div>
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string
}

Layout.defaultProps = {
  children: {},
  path: '/'
};

export default Layout
