import React from 'react';
import './Address.scss';

const Address = ({ onChange, name, phoneNumber, address, extraAddress }) => {
  return (
    <div className="address">
      <form className="formArea" onChange={onChange}>
        <div className="formInput">
          <label className="formLabel">
            <span>수령인</span>
          </label>
          <input
            type="text"
            name="name"
            className="formControl"
            placeholder="성함을 입력해 주세요"
            value={name}
          />
        </div>
        <div className="formInput">
          <label className="formLabel">
            <span>연락처</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            className="formControl"
            placeholder="'-'을 제외한 숫자만 입력해 주세요"
            value={phoneNumber}
          />
        </div>
        <div className="formInput">
          <label className="formLabel">
            <span>배송지</span>
          </label>
          <input
            type="text"
            name="address"
            className="formControl"
            placeholder="주소를 입력해 주세요"
            value={address}
            readOnly
          />
          <input
            type="text"
            name="extraAddress"
            className="formControl"
            placeholder="상세주소를 입력해 주세요"
            value={extraAddress}
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

export default Address;
