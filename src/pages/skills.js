import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillItem from "../components/skillItem"

const items = {
  js: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, quam eget dapibus egestas, lorem arcu condimentum mi, eget congue elit nunc sit amet neque.",
  java: "Vestibulum et neque nunc. Vestibulum sit amet augue in tortor pulvinar mollis. Phasellus mollis nisi in faucibus gravida. Curabitur vitae est turpis. Phasellus at vehicula purus. ",
  python: "Fusce id nisl ac augue mollis elementum. Maecenas non aliquet metus. Nam mollis tincidunt lectus, sit amet pellentesque urna sodales et."
}
const Skills = ({location}) => {

  const [itemClicked, setItemClicked] = useState("");
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
  
  function handleClickItem(item) {
    setItemClicked(item)
  }

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
                handleClick={() => handleClickItem(item)}
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
