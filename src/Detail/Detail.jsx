import React, { useState } from 'react';
import './Detail.scss';
import deliveryFee from './배송정보.jpg';
import Star from './Components/Star';

const Detail = () => {
  const [price, setPrice] = useState('');
  const [count, setCount] = useState(1);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  //콘솔에 count,setcount 해봤는데 콘솔창에 안뜸 질문하기!
  //{count}라고 객체 안에 표시했기 때문에 그랬던거임!
  console.log(count);

  return (
    <>
      <div className="Detail">
        <div className="content-Wrapper">
          <div className="container">
            <div className="productBox">
              <div>
                <img
                  className="proudctImage"
                  src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/jirR-1677568807193-THUMB.jpg"
                  alt="제품사진"
                ></img>
              </div>
              <div className="productName">
                <h1>원피스 퍼즐 1000피스</h1>
                <h2>너 내 동료가 되라!</h2>
                <div className="starrrr">
                  <h2>평점</h2>
                  <Star />
                </div>
                <h3>50,000원</h3>
                <div className="numberBox">
                  <button
                    onClick={minus}
                    disabled={count === 1}
                    className="quantity"
                  >
                    -
                  </button>
                  <input
                    className="quantity number"
                    type="number"
                    value={count}
                  ></input>
                  <button onClick={plus} className="quantity">
                    +
                  </button>
                </div>
                <img className="deliveryFee" src={deliveryFee} alt="배송정보" />{' '}
                <div>배송비 30,000원 이상 무료배송</div>
                <br />
                <input className="total" value="총 상품금액" />
                <input className="total" value="50000" type="number" />
                <button className="cart">장바구니</button>
              </div>
            </div>
            <div className="detail-Box"></div>
            <div className="division" />
            <div className="review">
              <input type="text" className="reviewPage" value="리뷰"></input>
              <div className="review-Header">
                <span>최민지</span>
                <span>평점</span>
                <span>2023-10-24</span>
              </div>
              <div className="content">
                루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤
                diy키트가 올지 두근두근!루피가 너무 잘생겼고 쵸파가 너무
                귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지 두근두근!루피가 너무
                잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지
                두근두근!루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔
                어떤 diy키트가 올지 두근두근!
              </div>
              <div className="review-Header">
                <span>최민지</span>
                <span>2023-10-24</span>
              </div>
              <div className="content">
                루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤
                diy키트가 올지 두근두근!루피가 너무 잘생겼고 쵸파가 너무
                귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지 두근두근!루피가 너무
                잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지
                두근두근!루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔
                어떤 diy키트가 올지 두근두근!
              </div>
              <div className="review-Header">
                <span>최민지</span>
                <span>2023-10-24</span>
              </div>
              <div className="content">
                루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤
                diy키트가 올지 두근두근!루피가 너무 잘생겼고 쵸파가 너무
                귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지 두근두근!루피가 너무
                잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지
                두근두근!루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔
                어떤 diy키트가 올지 두근두근!
              </div>
              <div className="review-Header">
                <span>최민지</span>
                <span>2023-10-24</span>
              </div>
              <div className="content">
                루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤
                diy키트가 올지 두근두근!루피가 너무 잘생겼고 쵸파가 너무
                귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지 두근두근!루피가 너무
                잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔 어떤 diy키트가 올지
                두근두근!루피가 너무 잘생겼고 쵸파가 너무 귀여워요 짱짱짱 다음엔
                어떤 diy키트가 올지 두근두근!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//리뷰: 닉네임,날짜,내용,평점
export default Detail;
