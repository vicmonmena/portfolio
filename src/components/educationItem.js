import React from "react"
import PropTypes from "prop-types"
import "./educationItem.css"

const EducationItem = ({logo, titulo, description, period, centro}) => {

  return (
    <div className ='education-item'>
      <div className ='education-item-logo'>{logo}</div>
      <div className ='education-item-info'>
        <div className = 'education-item-titulo'>
          <div className ='education-item-title'>{titulo}</div><div className='education-item-period'>{period}</div>
        </div>
        <div className ='education-item-centro'>{centro}</div>
        <div className ='education-item-description'>
          {description}
        </div>
      </div>
    </div>
  )
}

EducationItem.propTypes = {
  logo: PropTypes.string,
  titulo: PropTypes.string,
  description: PropTypes.string,
  period: PropTypes.string,
  centro: PropTypes.string
}

export default EducationItem
