import React, { useState } from "react"
import PropTypes from "prop-types"
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

  function handleClickItem(item) {
    setItemClicked(item)
  }

  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <div className="skills-content">
        <div className="skills-items-description">
          { itemClicked !== "" && items[itemClicked]}
        </div>
        <hr className="gradient_line" /> 
        <div className="skills-items">
          <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
                    <SkillItem 
            title="Javascript"
            summary="Especializado en proyectos con Javascript en FrontEnd (Vanilla, JQuery, Ajax, Lodash, ESx, Angular) y Backend (Node JS, Express, Unirest, Mongoose, LDAP, SQL)"
            handleClick={() => handleClickItem("js")}
          />
          <SkillItem 
            title="Java"
            summary="J2ME, J2EE, Android, Hibernate, MyBatis, Spring, Servlets, PreparedStatements, Maven"
            handleClick={() => handleClickItem("java")}
          />
          <SkillItem 
            title="Python"
            summary="Python 2 y Python 3. Request, Read & Write CSV/Excels."
            handleClick={() => handleClickItem("python")}
          />
        </div>
      </div>
    </Layout>
  )
}

Skills.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Skills
