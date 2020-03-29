import React from 'react'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import "./skillItem.css"
 

const skillsItem = ({title, summary, handleClick}) => {
  
  function formatTitle(title) {
    console.log("replace: ", title)
    return title.replace("_", " ")
  }

  return (
    <div className="skill-item">
      <Tippy content={<span>{summary}</span>}>
        <button onClick={handleClick} style={{textTransform: "capitalize"}}>{formatTitle(title)}</button>
      </Tippy>
    </div>
  )
}

export default skillsItem