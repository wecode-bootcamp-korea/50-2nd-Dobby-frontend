import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './TabContent.scss';

const TabContent = ({ title, price, description, handleSubScribe }) => {
  const [searchParams] = useSearchParams();

  const activeSubType = searchParams.get('dobbyBox');

  const priceName = Number(price).toLocaleString('ko-KR');

  return (
    <div className="tabContent">
      <div className="container">
        {activeSubType ? (
          <>
            <h2 className="title">{title}</h2>
            <div className="price">₩ {priceName}/월</div>
            <p className="description">{description}</p>
          </>
        ) : (
          <p className="description">구독할 옵션을 선택해 주세요!</p>
        )}
      </div>
      <button
        className="subscribeBtn"
        onClick={handleSubScribe}
        disabled={!activeSubType}
      >
        구독하기
      </button>
    </div>
  );
};

export default TabContent;
