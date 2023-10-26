import React, { useState, useEffect } from 'react';
import Star from './Components/Star';
import Review from './Components/Review';
import deliveryFee from './배송정보.jpg';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };
  /*상품금액 * 상품수량 = 총상품금액 기능 구현하기(어렵당..)
  const totalPrice = () => {
    setPrice(price * count);
  };*/

  useEffect(() => {
    fetch('/data/MockData.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  console.log(product);

  if (Object.keys(product).length === 0) return null;

  return (
    <div className="detail">
      <div className="contentWrapper">
        <div className="container">
          <div className="productBox">
            <div>
              <img
                className="proudctImage"
                src={product.image_url}
                alt="제품사진"
              />
            </div>
            <div className="productName">
              <h1>원피스 퍼즐 1000피스</h1>
              <h2>{product.content}</h2>
              <div className="starIcon">
                <h2>평점</h2>
                <Star />
              </div>
              <h3>{product.price.toLocaleString('ko-KR')}원</h3>
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
                />
                <button onClick={plus} className="quantity">
                  +
                </button>
              </div>
              <img className="deliveryFee" src={deliveryFee} alt="배송정보" />
              <div>배송비 30,000원 이상 무료배송</div>
              <br />
              <input className="total" value="총 상품금액" />
              <div className="total">
                {product.price.toLocaleString('ko-KR')}원
              </div>
              <button className="cart">장바구니</button>
            </div>
          </div>
          <div className="detailBox" />
          <div className="division" />
          <Review />
        </div>
      </div>
    </div>
  );
};
export default Detail;
