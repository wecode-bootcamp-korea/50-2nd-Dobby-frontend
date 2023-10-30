import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Review.scss';

const Review = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://10.58.52.93:8000/products/${id}`)
      .then(res => res.json())
      .then(result => setProduct(result.review));
  }, [id]);

  if (Object.keys(product).length === 0) return null;
  return (
    <div className="review">
      <input type="text" className="reviewPage" value="리뷰" />
      {product.map(review => (
        <div className="reviewId" key={review.id}>
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
