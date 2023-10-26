import React, { useState, useEffect } from 'react';
import './Review.scss';

const Review = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch('/data/MockData.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  console.log(product);

  if (Object.keys(product).length === 0) return null;
  return (
    <div>
      {product.reviews.map(review => (
        <div className="review" key={review.commentId}>
          <input type="text" className="reviewPage" value="리뷰" />
          <div className="reviewHeader">
            <span>{review.nickname}</span>
            <span>{review.score}</span>
            <span>{review.createdAt}</span>
          </div>
          <div className="content">{review.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Review;
