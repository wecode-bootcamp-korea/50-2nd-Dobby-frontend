import React from 'react';
import './TabContent.scss';

const TabContent = ({ title, price, description, handleSubScribe }) => {
  return (
    <div className="tabContent">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="price">₩ {price}/월</div>
        <p className="description">{description}</p>
      </div>

      <div className="btn" onClick={handleSubScribe}>
        <button className="subscribeBtn">구독하기</button>
      </div>
    </div>
  );
};

export default TabContent;
