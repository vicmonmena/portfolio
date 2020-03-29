import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillItem from "../components/skillItem"

const Skills = ({location}) => {

  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges{
          node {
            skills {
              angularjs {
                summary
              }
              api_rest {
                summary
              }
              css {
                summary
              }
              docker {
                summary
              }
              git {
                summary
              }
              html {
                summary
              }
              java {
                summary
              }
              javascript {
                summary
              }
              json {
                summary
              }
              ldap {
                summary
              }
              linux {
                summary
              }
              maven {
                summary
              }
              mongodb {
                summary
              }
              mysql {
                summary
              }
              nodejs {
                summary
              }
              npm {
                summary
              }
              php {
                summary
              }
              python {
                summary
              }
              reactjs {
                summary
              }
              react_native {
                summary
              }
              redux {
                summary
              }
              soap {
                summary
              }
              sql {
                summary
              }
              sql_server {
                summary
              }
              svn {
                summary
              }
              xml {
                summary
              }
              yii2 {
                summary
              }
            }
          }
        }
      }
    }
    `)

  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <div className="skills-container">
        <div className="skills-items">
          { 
            Object.keys(data.allDataJson.edges[1].node.skills).map(item => 
              <SkillItem 
                title={item}
                summary={data.allDataJson.edges[1].node.skills[item].summary}
              />
            )
          }
        </div>
      </div>
    </Layout>
  )
}

Skills.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Skills
