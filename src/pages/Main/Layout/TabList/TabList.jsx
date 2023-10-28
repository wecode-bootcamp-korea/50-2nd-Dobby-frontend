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
      <img
        src={`images/icon_${subType}.svg`}
        alt="icon"
        className={`iconImg ${subType} ${isActive ? 'active' : ''}`}
      />
      <p className="iconName">{name}</p>
    </div>
  );
};

export default TabList;
