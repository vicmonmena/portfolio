import React from "react"
import PropTypes from "prop-types"
import "./educationItem.css"

const EducationItem = ({logo, title, description, since, to, where}) => {

  function formatPeriod(since, to) {
    return (since) && (to) && since !== to
      ? `${since} - ${to}` 
      : !(since) 
        ? to
        : !(to)
          ? since
          : since === to
            ? since
            : 'Sin definir'
  }

  return (
    <div className ='education-item'>
      <div className ='education-item-logo'>{logo}</div>
      <div className ='education-item-info'>
        <div className = 'education-item-main'>
          <div className ='education-item-title'>{title}</div><div className='education-item-period'>{formatPeriod(since, to)}</div>
        </div>
        <div className ='education-item-where'>{where}</div>
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
  since: PropTypes.string,
  to: PropTypes.string,
  where: PropTypes.string
}

export default EducationItem
