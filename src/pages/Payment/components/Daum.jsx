import React from 'react';
import './Daum.scss';

const Daum = () => {
  return (
    <div className="daum">
      <form className="formArea">
        <div className="formInput">
          <label htmlFor="deliveryName" className="formLabel">
            <span>수령인</span>
          </label>
          <input
            type="text"
            id="deliveryName"
            className="formControl"
            placeholder="성함을 입력해 주세요"
          />
        </div>
        <div className="formInput">
          <label htmlFor="deliveryPhone" className="formLabel">
            <span>연락처</span>
          </label>
          <input
            type="text"
            id="deliveryPhone"
            className="formControl"
            placeholder="'-'을 제외한 숫자만 입력해 주세요"
          />
        </div>
        <div className="formInput">
          <label htmlFor="deliveryAddress" className="formLabel">
            <span>배송지</span>
          </label>
          <input
            type="text"
            id="deliveryAddress"
            className="formControl"
            placeholder="주소를 입력해 주세요"
          />
          <input
            type="text"
            id="deliveryAddress"
            className="formControl"
            placeholder="상세주소를 입력해 주세요"
          />
        </div>
        <div className="deliveryBottom">
          <button type="button" className="btn btnPrimary">
            <span>저장</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Daum;
