import React from 'react';
import PropTypes from "prop-types"
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./experienceItem.css"
import {Work, Star, School} from "@material-ui/icons"

const  ExperienceItem = ({title, subtitle, description, since, to, itemType}) => {

  function getIcon(type) {
    switch (type) {
      case "work":
        return <Work />
      case "education":
        return <School />
      default:
        return <Star />
    }
  }

  return (
    itemType !== "star" ?
    <VerticalTimelineElement
      className={`vertical-timeline-element--${itemType}`}
      contentStyle={to.toLowerCase() === "present" ? { background: '#0071b8', color: '#fff' } : {}}
      contentArrowStyle={to.toLowerCase() === "present" ? { borderRight: '7px solid  #0071b8' } : {}}
      date={`${since.toUpperCase()} - ${to.toUpperCase()}`}
      iconStyle={{ background: '#0071b8', color: '#fff' }}
      icon={getIcon(itemType)}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>
        {description}
      </p>
    </VerticalTimelineElement>
    :
    <VerticalTimelineElement
      iconStyle={{ background: '#7878784d', color: '#fff' }}
      icon={<Star />}
    >
      <h3 className="vertical-timeline-element-title">Inicio</h3>
    </VerticalTimelineElement>
  )
}

ExperienceItem.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  since: PropTypes.string,
  to: PropTypes.string,
  itemType: PropTypes.string.isRequired
}

export default ExperienceItem