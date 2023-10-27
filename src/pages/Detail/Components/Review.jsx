import React, { useState, useEffect } from 'react';
import './Review.scss';

const Review = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch('http://10.58.52.77:8000/products/2')
      .then(res => res.json())
      .then(result => setProduct(result.review));
  }, []);

  if (Object.keys(product).length === 0) return null;
  return (
    <div>
      <input type="text" className="reviewPage" value="리뷰" />
      {product.map(review => (
        <div className="review" key={review.id}>
          <div className="reviewHeader">
            <div className="nicknameScore">
              <span>{review.nickname}</span>
              <span>평점 {review.score}점</span>
            </div>
            <span>{review.created_at}</span>
          </div>
          <div className="content">{review.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Review;
