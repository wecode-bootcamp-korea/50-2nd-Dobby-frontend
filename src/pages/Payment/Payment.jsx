import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Address from './components/Address';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import {
  GET_PAYMENT_ADDRESS_API,
  POST_PAYMENT_NEW_ADDRESS_API,
  GET_MOCK_API,
} from '../../config';
import './Payment.scss';

const Payment = () => {
  //map함수 활용하기 위한 useState 생성
  const [fullAddress, setFullAddress] = useState([]);

  //Address컴포넌트 활용하기 위한 useState 생성
  const [newAddressInfo, setNewAddressInfo] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    extraAddress: '',
  });

  //1. 백엔드 통신 작업 (첫 배송지 불러올때의 GET 함수 선언 및 실행)
  const newGet = () => {
    fetch(
      { GET_MOCK_API },
      {
        // fetch(`${GET_PAYMENT_ADDRESS_API}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiam9taW5zdTAxMDNAZ21haWwuY29tIiwiaWF0IjoxNjk4NzQwOTQ0fQ.AIgdqEfyPxTUiSthnbsIzGB3Mrj_oTrpT36BCZ-qSuI',
        },
      },
    )
      .then(res => res.json())
      .then(data => setFullAddress(data.data[0].address));
  };

  useEffect(() => {
    newGet();
  }, []);

  //2. 새배송지 POST & 추가된 배송지(GET) 돌릴 두개의 fetch 생성
  const postData = () =>
    fetch(
      { GET_MOCK_API },
      {
        // fetch(`${POST_PAYMENT_NEW_ADDRESS_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiam9taW5zdTAxMDNAZ21haWwuY29tIiwiaWF0IjoxNjk4NzQwOTQ0fQ.AIgdqEfyPxTUiSthnbsIzGB3Mrj_oTrpT36BCZ-qSuI',
        },
        body: JSON.stringify({
          name: newAddressInfo.name,
          phonenumber: newAddressInfo.phoneNumber,
          content: newAddressInfo.address + newAddressInfo.extraAddress,
        }),
      },
    )
      .then(res => res.json())
      .then(result => {
        if (result.message === 'POST - ADDRESS ADDED SUCCESS') {
          alert('새로운 배송지가 추가되었습니다.');
          newGet();
        }
      });

  //onchange이벤트 함수가 발생했을시 변경될 변수 설정
  const handleNewAddressInput = e => {
    const { name, value } = e.target;
    setNewAddressInfo({ ...newAddressInfo, [name]: value });
  };

  //다음API팝업 함수
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

    setNewAddressInfo({ ...newAddressInfo, address: fullAddress });
  };

  const open = useDaumPostcodePopup();

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  //지영님 코드(주문예정상품 불러오기)
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      { GET_MOCK_API },
      {
        // fetch('http://10.58.52.239:8000/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        setProductList(data.data);
      });
  }, []);

  const sumPrice = productList
    .map(list => list.total_price)
    .reduce((acc, cur) => acc + cur, 0);

  const sumDeliveryCharge = productList.reduce((acc, cur) => {
    if (cur.total_price < 50000) {
      return acc + 3000;
    } else return acc;
  }, 0);

  const totalPrice = sumPrice + sumDeliveryCharge;

  return (
    <div className="payment">
      <div className="paymentArea">
        <h2 className="paymentTitle">주문 / 결제</h2>
        <div className="addressArea">
          <strong className="addressTitle">배송지 선택</strong>
          <ul className="addressList">
            {fullAddress &&
              fullAddress.map(test => (
                <li className="addressItem" key={test.id}>
                  <div className="addressLeft">
                    <div className="addressInfo">
                      <span className="name">{test.name}</span>
                      <span className="badge">기본</span>
                    </div>
                    <div className="addressInfo">
                      <span className="phoneNumber">{test.phonenumber}</span>
                    </div>
                    <div className="addressInfo">
                      <span className="address">{test.content}</span>
                      {/* <span className="addressDetail">상세주소키값필요</span> */}
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
              ))}
          </ul>
          <div className="addressBtn">
            <button
              onClick={handleClick}
              type="button"
              className="btn btnSecondary"
            >
              새 배송지 추가하기 +
            </button>
          </div>
          {newAddressInfo.address && (
            <Address
              onClick={postData}
              onChange={handleNewAddressInput}
              {...newAddressInfo}
            />
          )}
        </div>
        <div className="productArea">
          <strong className="productTitle">주문 예정 상품</strong>
          <ul className="productList">
            {productList.map(product => {
              const {
                id,
                products_image,
                quantity,
                products_name,
                total_price,
              } = product;
              const deliveryCharge = total_price < 50000 ? 3000 : 0;

              return (
                <li className="productItem" key={id}>
                  <div className="productTop">
                    <div className="productImage">
                      <img src={products_image} alt="만강에 비친 달 X 2병" />
                    </div>
                    <div className="productInfo">
                      <strong className="infoTitle">예술주조</strong>
                      <span className="infoSubTitle">{products_name}</span>
                      <span className="infoNumber">수량 {quantity}개</span>
                    </div>
                  </div>
                  <div className="productBottom">
                    <dl className="billList">
                      <dt>상품금액</dt>
                      <dd>{total_price}원</dd>
                    </dl>
                    <dl className="billList">
                      <dt>배송비</dt>
                      <dd>{deliveryCharge}원</dd>
                    </dl>
                    <dl className="billList total">
                      <dt>총 금액</dt>
                      <dd>{total_price + deliveryCharge}원</dd>
                    </dl>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="productMoney">
            <dl className="moneyList">
              <dt>총 결제 금액</dt>
              <dd>{totalPrice}원</dd>
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
                value={totalPrice}
                readOnly
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
          <button type="button" className="btn btnSecondary">
            <span>주문취소</span>
          </button>
          <button type="button" className="btn btnPrimary">
            <span>{totalPrice}원 결제하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
