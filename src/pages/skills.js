import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillItem from "../components/skillItem"
import SkillTag from "../components/skillTag"

const Skills = ({location}) => {

  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges{
          node {
            skills {
              angularjs {
                summary
                tag
              }
              api_rest {
                summary
                tag
              }
              css {
                summary
                tag
              }
              docker {
                summary
                tag
              }
              git {
                summary
                tag
              }
              html {
                summary
                tag
              }
              java {
                summary
                tag
              }
              javascript {
                summary
                tag
              }
              json {
                summary
                tag
              }
              ldap {
                summary
                tag
              }
              linux {
                summary
                tag
              }
              maven {
                summary
                tag
              }
              mongodb {
                summary
                tag
              }
              mysql {
                summary
                tag
              }
              nodejs {
                summary
                tag
              }
              npm {
                summary
                tag
              }
              php {
                summary
                tag
              }
              python {
                summary
                tag
              }
              reactjs {
                summary
                tag
              }
              react_native {
                summary
                tag
              }
              redux {
                summary
                tag
              }
              soap {
                summary
                tag
              }
              sql {
                summary
                tag
              }
              sql_server {
                summary
                tag
              }
              svn {
                summary
                tag
              }
              xml {
                summary
                tag
              }
              yii2 {
                summary
                tag
              }
              android {
                summary
                tag
              }
              blackberry {
                summary
                tag
              }
            }
          }
        }
      }
    }
    `)

  const [skills, setSkills] = useState([])
  const [tagSelected, setTagSelected] = useState('all' )

  function handleClickTag(tag) {
    // Si volvemos a clicar en el mismo skill ya marco entonces mostramos todos
    setTagSelected(tag === tagSelected ? 'all' : tag)
  }

  useEffect(() => {
    // TODO: filtrar listado de skills por tag seleccionado
    
    const totalSkills = data.allDataJson.edges[1].node.skills
    if (tagSelected === 'all') setSkills(totalSkills)
    else {
      const filteredSkills = Object.keys(totalSkills)
        .filter(key => totalSkills[key].tag.includes(tagSelected))
      setSkills(Object.fromEntries(filteredSkills.map(key => ([[key], totalSkills[key]]))))
    }
  }, [tagSelected])

  useEffect(() => {
    setSkills(data.allDataJson.edges[1].node.skills)
  }, [data])
  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <div className="skills-container">
        <div className="skills-tags">
          {
            ['development', 'devops', 'dba', 'mobile'].map(tag => (
              <SkillTag 
                key={tag}
                name={tag}
                handleClick={handleClickTag}
              />
            ))
          }
        </div>
        <hr className="gradient_line" />
        <div className="skills-items">
          { 
            Object.keys(skills).map(key => 
              <SkillItem 
                title={key}
                summary={skills[key].summary}
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
