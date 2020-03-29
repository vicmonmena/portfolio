import React from 'react'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import "./skillItem.css"
 

const skillsItem = ({title, summary, handleClick}) => {
  // TODO: crear tooltip con el summary
  // TODO: capturar evento handleClick para mostrar fuera una descripción de la skill
  return (
    <div className="skill-item">
      <Tippy content={<span>{summary}</span>}>
        <button onClick={handleClick} style={{textTransform: "capitalize"}}>{title}</button>
      </Tippy>
    </div>
  )
}

export default skillsItem