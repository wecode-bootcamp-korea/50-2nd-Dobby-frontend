import React from 'react';
import './TitleText.scss';

const TitleText = ({ title, subTitle }) => {
  return (
    <div className="titleText">
      <div className="textArea">
        <h2 className="title">{title}</h2>
        <p className="subTitle">{subTitle}</p>
      </div>
    </div>
  );
};

export default TitleText;
