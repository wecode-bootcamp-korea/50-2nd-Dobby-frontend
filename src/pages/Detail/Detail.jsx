import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Star from './Components/Star';
import Review from './Components/Review';
import delivery from './택배.svg';
import './Detail.scss';

const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    fetch(`http://10.58.52.93:8000/products/${productId}`)
      .then(res => res.json())
      .then(result => {
        setProduct(result.product);
        setReviews(result.review);
      });
  }, [productId]);

  //백엔드에 상품id,갯수를 보낸 뒤 alert창으로 안내
  const addCart = () =>
    fetch(`http://10.58.52.69:8000/cart/${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpa2VMaW9uODI4MkB3ZWNvZGUuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTgxNjg3NTV9.8tjgbmwn2u7LeYuTKTjr3ZhTA1p5l0Nja5kUEs3yki4',
      },
      body: JSON.stringify({
        quantity: count,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.messsage === 'add success') {
          alert('성공적으로 장바구니에 담겼습니다.');
        }
      });

  if (Object.keys(product).length === 0) return null;

  const { id, name, image, content, price, average_score } = product;
  const totalPrice = price * count;

  return (
    <div className="detail">
      <div className="contentWrapper">
        <div className="container">
          <div className="productBox">
            <div>
              <img className="proudctImage" src={image} alt="제품사진" />
            </div>
            <div className="productName">
              <h1>{name}</h1>
              <h2>{content}</h2>
              <div className="starIcon">
                <h2>평점</h2>
                <Star score={average_score} />
              </div>
              <h3>{price.toLocaleString('ko-KR')}원</h3>
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
              <div className="delivery">
                <img className="deliveryFee" src={delivery} alt="배송정보" />
                <div className="free">배송비 50,000원 이상 무료배송</div>
              </div>
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
          <Review reviews={reviews} />
        </div>
      </div>
    </div>
  );
};
export default Detail;
