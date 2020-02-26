import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EducationItem from '../components/educationItem'
import "./pages.css"

function Education({location}) {

  const { allEducationItemsJson } = useStaticQuery(
    graphql`
      query {
        allEducationItemsJson {
          edges {
            node {
              logo
              centro
              titulo
              descripcion
              periodo
            }
          }
        }
      }
    `
  )

  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <h1>{location.pathname}</h1>
      <div className ='education-container'>
        {allEducationItemsJson.edges.forEach(item => (
          <EducationItem 
            logo={item.logo}
            title={item.titulo}
            date={item.periodo}
            description={item.descripcion}
          />
        ))}
    </div>
    </Layout>
  )
}

Education.propTypes = {
  location: PropTypes.string,
}

export default Education
