import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ src, title, price, rating, reviewCount, content }) => {
  const priceName = price.toLocaleString('ko-KR');
  return (
    <div className="productCard">
      <Link to="/" className="productLink">
        <div className="basic" />
        <img src={src} alt="제품이미지" className="productImg" />
        <div className="detailContainer">
          <p className="productTitle">{title}</p>
          <p className="productPrice">{priceName}원</p>
          <div className="wrapper">
            <img src="images/icon_star.svg" alt="icon" className="scoreImg" />
            <p className="score">{rating}</p>
            <p className="commentCount">리뷰 {reviewCount}</p>
          </div>
          <div className="contentWrapper">
            <p className="content">{content}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
