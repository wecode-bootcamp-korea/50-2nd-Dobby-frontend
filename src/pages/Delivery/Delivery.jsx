import React from 'react';
import './Delivery.scss';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="deliveryArea">
        <h2 className="deliveryTitle">배송지 추가</h2>
        <div className="deliveryGroup">
          <strong className="deliverySubTitle">
            새 배송지를 추가해 주세요.
          </strong>
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
            <div className="formInput check">
              <label htmlFor="deliveryCheck" className="formLabel">
                <span>기본 배송지로 등록</span>
              </label>
              <input type="checkbox" id="deliveryCheck" className="formCheck" />
            </div>
          </form>
          <div className="deliveryBottom">
            <button type="button" className="btn btnPrimary">
              <span>저장</span>
            </button>
            <button type="button" className="btn btnLine">
              <span>취소</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
