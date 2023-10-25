import React from 'react';
import './SelectBtn.scss';

const SelectBtn = ({ text, color, handleActive, isActive }) => {
  const handleClick = () => {
    handleActive(color);
  };
  return (
    <div
      className={`selectBtn ${color} ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src="images/sampleIcon.png" alt="icon" />

      {text}
    </div>
  );
};

export default SelectBtn;
