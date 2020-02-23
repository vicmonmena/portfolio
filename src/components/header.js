import PropTypes from "prop-types"
import React from "react"
const Header = ({ siteTitle }) => (
  <h1>Header</h1>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
