import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Daum from './components/Daum';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import './Payment.scss';

const Payment = () => {
  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <div className="payment">
      <div className="paymentArea">
        <h2 className="paymentTitle">주문 / 결제</h2>
        <div className="addressArea">
          <strong className="addressTitle">배송지 선택</strong>
          <ul className="addressList">
            <li className="addressItem">
              <div className="addressLeft">
                <div className="addressInfo">
                  <span className="name">홍지영</span>
                  <span className="badge">기본</span>
                </div>
                <div className="addressInfo">
                  <span className="phoneNumber">010-1111-2222</span>
                </div>
                <div className="addressInfo">
                  <span className="address">주소주소주소주소주소주소</span>
                  <span className="addressDetail">주소주소주소주</span>
                </div>
              </div>
              <div className="addressRight">
                <button type="button" className="btn btnLine">
                  <span>수정</span>
                </button>
                <button type="button" className="btn btnPrimary">
                  <span>선택</span>
                </button>
              </div>
            </li>
            <li className="addressItem">
              <div className="addressLeft">
                <div className="addressInfo">
                  <span className="name">홍지영</span>
                  <span className="badge">기본</span>
                </div>
                <div className="addressInfo">
                  <span className="phoneNumber">010-1111-2222</span>
                </div>
                <div className="addressInfo">
                  <span className="address">서울특별시 강서구 가로공원로</span>
                  <span className="addressDetail">성우하이츠빌 201호</span>
                </div>
              </div>
              <div className="addressRight">
                <button type="button" className="btn btnLine">
                  <span>수정</span>
                </button>
                <button type="button" className="btn btnPrimary">
                  <span>선택</span>
                </button>
              </div>
            </li>
            <li className="addressItem">
              <div className="addressLeft">
                <div className="addressInfo">
                  <span className="name">홍지영</span>
                  <span className="badge">기본</span>
                </div>
                <div className="addressInfo">
                  <span className="phoneNumber">010-1111-2222</span>
                </div>
                <div className="addressInfo">
                  <span className="address">주소주소주소주소주소주소</span>
                  <span className="addressDetail">주소주소주소주</span>
                </div>
              </div>
              <div className="addressRight">
                <button type="button" className="btn btnLine">
                  <span>수정</span>
                </button>
                <button type="button" className="btn btnPrimary">
                  <span>선택</span>
                </button>
              </div>
            </li>
          </ul>
          <div className="addressBtn">
            <button
              onClick={handleClick}
              type="button"
              className="btn btnSecondary"
            >
              <span>새 배송지 추가하기 +</span>
            </button>
          </div>
        </div>
        <div className="productArea">
          <strong className="productTitle">주문 예정 상품</strong>
          <ul className="productList">
            <li className="productItem">
              <div className="productTop">
                <div className="productImage">
                  <img
                    src="/images/cart_sample.jpg"
                    alt="만강에 비친 달 X 2병"
                  />
                </div>
                <div className="productInfo">
                  <strong className="infoTitle">예술주조</strong>
                  <span className="infoSubTitle">만강에 비친 달 X 2병</span>
                  <span className="infoNumber">수량 1개</span>
                </div>
              </div>
              <div className="productBottom">
                <dl className="billList">
                  <dt>상품금액</dt>
                  <dd>0원</dd>
                </dl>
                <dl className="billList">
                  <dt>배송비</dt>
                  <dd>0원</dd>
                </dl>
                <dl className="billList total">
                  <dt>총 금액</dt>
                  <dd>0원</dd>
                </dl>
              </div>
            </li>
            <li className="productItem">
              <div className="productTop">
                <div className="productImage">
                  <img
                    src="/images/cart_sample.jpg"
                    alt="만강에 비친 달 X 2병"
                  />
                </div>
                <div className="productInfo">
                  <strong className="infoTitle">예술주조</strong>
                  <span className="infoSubTitle">만강에 비친 달 X 2병</span>
                  <span className="infoNumber">수량 1개</span>
                </div>
              </div>
              <div className="productBottom">
                <dl className="billList">
                  <dt>상품금액</dt>
                  <dd>0원</dd>
                </dl>
                <dl className="billList">
                  <dt>배송비</dt>
                  <dd>0원</dd>
                </dl>
                <dl className="billList total">
                  <dt>총 금액</dt>
                  <dd>0원</dd>
                </dl>
              </div>
            </li>
          </ul>
          <div className="productMoney">
            <dl className="moneyList">
              <dt>총 결제 금액</dt>
              <dd>0원</dd>
            </dl>
          </div>
        </div>
        <form className="formArea">
          <div className="pointArea">
            <strong className="pointTitle">포인트 결제</strong>
            <div className="formInput">
              <label htmlFor="pointPayment" className="formLabel">
                <span>포인트</span>
              </label>
              <input
                type="number"
                id="pointPayment"
                className="formControl"
                placeholder="사용 할 포인트를 입력해 주세요"
              />
            </div>
            <div className="pointHold">
              <strong className="holdText">
                사용 가능한 포인트: <span>10,000P</span>
              </strong>
            </div>
          </div>
          <div className="clauseArea">
            <div className="formInput">
              <label htmlFor="checkAll" className="formLabel">
                <span>(필수)</span>
                <Link to="#">이용 약관 동의</Link>
              </label>
              <input type="checkbox" id="checkAll" className="formCheck" />
            </div>
          </div>
        </form>
        <div className="btnArea">
          <button type="button" className="btn btnPrimary">
            <span>0원 결제하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
