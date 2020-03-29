import React from 'react';
import PropTypes from 'prop-types';
import "./skillTag.css"

const SkillTag = ({name, handleClick}) => {

  function handleClickTag(tag) {
    handleClick(name)
  }

  return (
    <div key={name} className= "skill-tag">
      #<button onClick={()=>{handleClickTag(name)}} className="button-tag">{name}</button>
    </div>
  );
};

SkillTag.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default SkillTag;