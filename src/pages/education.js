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
        no_reglada {
          centro
          id
          description
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
  }`)
  console.log('data: ', data);
    
  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <h1>{location.pathname}</h1>
      <div className ='education-container'>
        <div className ='education-container-reglada'>
          {
            data.allDataJson.nodes[0].reglada.map(item => {
              return (
                <EducationItem 
                  logo={item.logo}
                  titulo={item.titulo}
                  date={item.periodo}
                  description={item.descripcion}
                  centro={item.centro}
                />
              )
            })
          }
        </div>
        <div className ='education-container-noreglada'>
          {
            data.allDataJson.nodes[0].no-reglada.map(item => {
              return (
                <EducationItem 
                  logo={item.logo}
                  titulo={item.titulo}
                  date={item.periodo}
                  description={item.descripcion}
                  centro={item.centro}
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
