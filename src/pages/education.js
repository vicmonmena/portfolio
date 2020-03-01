import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EducationItem from '../components/educationItem'
import "./pages.css"

function Education({location}) {

  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          noreglada {
            centro
            id
            descripcion
            logo
            periodo {
              desde
              hasta
            }
            titulo
          }
          reglada {
            centro
            descripcion
            id
            logo
            periodo {
              desde
              hasta
            }
            titulo
          }
        }
      }
    }
  `)

  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      {/* <h1>{location.pathname}</h1> */}
      <div className ='education-container'>
        <div className ='education-container-reglada'>
          <h3 className="education-title">Formación Reglada</h3>
          <hr className="gradient_line" /> 
          {
            data.allDataJson.nodes[0].reglada.map(item => {
              return (
                <EducationItem 
                  logo={item.logo}
                  title={item.titulo}
                  since={item.periodo.desde}
                  to={item.periodo.hasta}
                  description={item.descripcion}
                  where={item.centro}
                />
              )
            })
          }
        </div>
        <div className ='education-container-noreglada'>
          <h3 className="education-title">Formación No Reglada</h3>
          <hr className="gradient_line" />
          {
            data.allDataJson.nodes[0].noreglada.map(item => {
              return (
                <EducationItem 
                  logo={item.logo}
                  title={item.titulo}
                  since={item.periodo.desde}
                  to={item.periodo.hasta}
                  description={item.descripcion}
                  where={item.centro}
                />
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

Education.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Education
