import React from "react"
import PropTypes from "prop-types"
import "./educationItem.css"

const EducationItem = ({logo, title, description, period}) => {

  return (
    <div className ='education-item'>
      <div className ='education-item-logo'>{logo}</div>
      <div className ='education-item-info'>
        <div className = 'education-item-info-top'>
          <div className ='education-item-title'>{title}</div><div className='education-item-period'>{period}</div>
        </div>
        <div className ='education-item-description'>
          {description}
        </div>
      </div>
    </div>
  )
}

EducationItem.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  period: PropTypes.string
}

export default EducationItem
