import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Education = ({location}) => (
  <Layout path={location.pathname}>
    <SEO title="Home" />
    <h1>{location.pathname}</h1>
  </Layout>
)

export default Education
