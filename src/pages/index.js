import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <Layout path={location.pathname}>
    <SEO title="Home" />
    <h1>{location.pathname}</h1>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
