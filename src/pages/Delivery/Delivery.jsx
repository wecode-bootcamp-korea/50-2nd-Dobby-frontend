import React from 'react';
import './Delivery.scss';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="deliveryArea">
        <h2 className="deliveryTitle">배송지 목록</h2>
        <div className="deliveryGroup">
          <strong className="deliverySubTitle">배송지를 선택해 주세요.</strong>
          <ul className="deliveryList">
            <li className="deliveryItem">
              <div className="deliveryLeft">
                <div className="deliveryInfo">
                  <span className="name">홍지영</span>
                  <span className="badge">기본</span>
                </div>
                <div className="deliveryInfo">
                  <span className="phoneNumber">010-1111-2222</span>
                </div>
                <div className="deliveryInfo">
                  <span className="address">주소주소주소주소주소주소</span>
                  <span className="addressDetail">주소주소주소주</span>
                </div>
              </div>
              <div className="deliveryRight">
                <button type="button" className="btn btnLine">
                  <span>수정</span>
                </button>
                <button type="button" className="btn btnPrimary">
                  <span>선택</span>
                </button>
              </div>
            </li>
            <li className="deliveryItem">
              <div className="deliveryLeft">
                <div className="deliveryInfo">
                  <span className="name">홍지영</span>
                  <span className="badge">기본</span>
                </div>
                <div className="deliveryInfo">
                  <span className="phoneNumber">010-1111-2222</span>
                </div>
                <div className="deliveryInfo">
                  <span className="address">주소주소주소주소주소주소</span>
                  <span className="addressDetail">주소주소주소주</span>
                </div>
              </div>
              <div className="deliveryRight">
                <button type="button" className="btn btnLine">
                  <span>수정</span>
                </button>
                <button type="button" className="btn btnPrimary">
                  <span>선택</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
