import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ src, title, price, rating, reviewCount }) => {
  return (
    <div className="productCard">
      <div className="productContainer">
        <img src={src} alt="제품이미지" className="productImg" />
        <div className="detailContainer">
          <h1 className="productTitle">{title}</h1>
          <p className="productPrice">{price}원</p>
          <div className="wrapper">
            <img src="images/icon_favorite.png" alt="icon" />
            <p className="productRating">{rating}</p>
            <p className="reviewCount">리뷰 {reviewCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
