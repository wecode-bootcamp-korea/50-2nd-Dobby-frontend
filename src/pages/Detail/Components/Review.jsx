import React from 'react';
import './Review.scss';

const Review = ({ reviews }) => {
  return (
    <div className="review">
      <input type="text" className="reviewPage" value="리뷰" />
      {reviews.map(review => {
        const { id, nickname, score, created_at, content } = review;

        return (
          <div className="reviewId" key={id}>
            <div className="reviewHeader">
              <div className="nicknameScore">
                <span>{nickname}</span>
                <span>평점 {score}점</span>
              </div>
              <span>{created_at}</span>
            </div>
            <div className="content">{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;

() => {
  return <></>;
};

() => <></>;
