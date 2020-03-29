import React from 'react'
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import "./skillItem.css"
 

const SkillsItem = ({title, summary, handleClick}) => {
  
  function formatTitle(title) {
    return title.replace("_", " ")
  }

  return (
    <div className="skill-item">
      <Tippy content={<span>{summary}</span>}>
        <button onClick={handleClick} className="button-item">{formatTitle(title)}</button>
      </Tippy>
    </div>
  )
}

SkillsItem.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  handleClick: PropTypes.func
};

export default SkillsItem