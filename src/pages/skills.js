import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = ({location}) => (
  <Layout path={location.pathname}>
    <SEO title="Home" />
    <h1>{location.pathname}</h1>
  </Layout>
)

Skills.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Skills
