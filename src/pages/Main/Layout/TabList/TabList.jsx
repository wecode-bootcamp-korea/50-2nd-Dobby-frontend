import React from 'react';
import './TabList.scss';

const TabList = ({
  name,
  subType,
  handleActive,
  isActive,
  setSubTypeParams,
}) => {
  const handleClick = () => {
    handleActive(subType);
    setSubTypeParams(subType);
  };
  return (
    <div
      className={`selectBtn ${subType} ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src="images/sampleIcon.png" alt="icon" />
      {name}
    </div>
  );
};

export default TabList;
