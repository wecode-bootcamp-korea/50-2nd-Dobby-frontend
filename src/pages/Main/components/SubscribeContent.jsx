import React from 'react';
import './SubscribeContent.scss';

const SubscribeContent = ({ title, price, description, handleSubScribe }) => {
  return (
    <div className="subscribeContent">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="price">₩ {price}/월</div>
        <p className="description">{description}</p>
      </div>

      <div className="btn">
        <button className="subscribeBtn" onClick={handleSubScribe}>
          구독하기
        </button>
      </div>
    </div>
  );
};

export default SubscribeContent;
