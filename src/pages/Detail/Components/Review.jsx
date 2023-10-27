import React, { useState, useEffect } from 'react';
import './Review.scss';

const Review = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch('/data/MockData.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (Object.keys(product).length === 0) return null;
  return (
    <div>
      <input type="text" className="reviewPage" value="리뷰" />
      {product.reviews.map(review => (
        <div className="review" key={review.commentId}>
          <div className="reviewHeader">
            <div className="nicknameScore">
              <span>{review.nickname}</span>
              <span>평점 {review.score}점</span>
            </div>
            <span>{review.createdAt}</span>
          </div>
          <div className="content">{review.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Review;
