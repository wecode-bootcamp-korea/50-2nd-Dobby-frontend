import React, { useState, useEffect } from 'react';
import Star from './Components/Star';
import Review from './Components/Review';
import deliveryFee from './배송정보.jpg';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState('');
  const [count, setCount] = useState(1);
  const savePrice = e => {
    setPrice(e.target.value);
  };
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
    fetch('http://localhost:3000/data/MockData.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);
  //MOCKDATA실행시 배열안에 객체 속 배열 꺼내기 실패 내일 물어보기
  return (
    <>
      <div className="Detail">
        <div className="content-Wrapper">
          {product &&
            product.map(pro => (
              <div className="container">
                <div className="productBox">
                  <div>
                    <img
                      className="proudctImage"
                      src={pro.image_url}
                      alt="제품사진"
                    />
                  </div>
                  <div className="productName">
                    <h1>원피스 퍼즐 1000피스</h1>
                    <h2>{pro.CONTENT}</h2>
                    <div className="starIcon">
                      <h2>평점</h2>
                      <Star />
                    </div>
                    <h3>{pro.price.toLocaleString('ko-KR')}원</h3>
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
                    <img
                      className="deliveryFee"
                      src={deliveryFee}
                      alt="배송정보"
                    />
                    <div>배송비 30,000원 이상 무료배송</div>
                    <br />
                    <input className="total" value="총 상품금액" />
                    <div className="total" onChange={savePrice}>
                      {pro.price.toLocaleString('ko-KR')}원
                    </div>
                    <button className="cart">장바구니</button>
                  </div>
                </div>
                <div className="detail-Box" />
                <div className="division" />
                <div className="review">
                  <input type="text" className="reviewPage" value="리뷰" />
                  <div className="review-Header">
                    <span>{pro.nickname}</span>
                    <span>{pro.score}</span>
                    <span>2023-10-24</span>
                  </div>
                  <div className="content">{pro.comment}</div>
                </div>
              </div>
            ))}
          ;
        </div>
      </div>
    </>
  );
};
export default Detail;
