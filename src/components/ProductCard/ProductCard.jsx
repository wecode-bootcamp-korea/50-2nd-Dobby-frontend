import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ src, title, price, score, commentCount, content }) => {
  const priceName = price.toLocaleString('ko-KR');
  const scoreName = score ? score.slice(0, 3) : '';
  return (
    <div className="productCard">
      <Link to="/" className="productLink">
        <div className="basic" />
        <img src={src} alt={title} className="productImg" />
        <div className="detailContainer">
          <p className="productTitle">{title}</p>
          <p className="productPrice">{priceName}원</p>
          <div className="wrapper">
            <img src="/images/icon_star.svg" alt="icon" className="scoreImg" />
            <p className="score">{scoreName}점</p>
            <p className="commentCount">리뷰 {commentCount}</p>
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
