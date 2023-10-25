import React from 'react';
import './Description.scss';

const Description = ({ title, description }) => {
  return (
    <div className="description">
      <div className="textArea">
        <h2 className="title">{title}</h2>
        <p className="subTitle">{description}</p>
      </div>
    </div>
  );
};

export default Description;
