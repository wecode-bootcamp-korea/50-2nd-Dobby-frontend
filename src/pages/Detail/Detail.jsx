import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Star from './Components/Star';
import Review from './Components/Review';
import deliveryFee from './배송정보.jpg';
import './Detail.scss';
//product.id 등 객체구조할당으로 다 바꾸기
//params 활용하기
const Detail = () => {
  const { id } = useParams();
  // const params = useParams();
  // const productId = params.id;
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    fetch('http://10.58.52.77:8000/products/${id}')
      .then(res => res.json())
      .then(result => setProduct(result.data));
  }, [id]);

  const totalPrice = product.price * count;

  const addCart = () =>
    fetch('http://10.58.52.93:8000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpa2VMaW9uODI4MkB3ZWNvZGUuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTgxNjg3NTV9.8tjgbmwn2u7LeYuTKTjr3ZhTA1p5l0Nja5kUEs3yki4',
      },
      body: JSON.stringify({
        productId: product.id,
        quantity: count,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));

  if (Object.keys(product).length === 0) return null;

  return (
    <div className="detail">
      <div className="contentWrapper">
        <div className="container">
          <div className="productBox">
            <div>
              <img
                className="proudctImage"
                src={product.image}
                alt="제품사진"
              />
            </div>
            <div className="productName">
              <h1>{product.name}</h1>
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
              <div>배송비 50,000원 이상 무료배송</div>
              <br />
              <br />
              <div className="total">총 상품금액</div>
              <div className="total">
                {totalPrice.toLocaleString('ko-KR')}원
              </div>
              <button className="cart" onClick={addCart}>
                장바구니
              </button>
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
