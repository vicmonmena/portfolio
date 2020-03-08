import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Timeline from "../components/timeline"

const IndexPage = ({location}) => (
  <Layout path={location.pathname}>
    <SEO title="Home" />
    <div className ='experience-container'>
      <Timeline />
    </div>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
