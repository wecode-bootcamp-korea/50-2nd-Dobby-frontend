import React from 'react';
import './Review.scss';

const Review = ({ reviews }) => {
  return (
    <div className="review">
      <p className="reviewPage">리뷰</p>
      {reviews.map(review => {
        const { id, nickname, score, created_date, content } = review;

        return (
          <div className="reviewId" key={id}>
            <div className="reviewHeader">
              <div className="nicknameScore">
                <span>{nickname}</span>
                <span>평점 {score}점</span>
              </div>
              <span>{created_date}</span>
            </div>
            <div className="content">{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
