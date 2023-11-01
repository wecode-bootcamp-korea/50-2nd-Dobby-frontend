import React from 'react';
import StarIcon from './StarIcon';
import './Star.scss';

const Star = ({ score, max = 5, color = '#fcc419' }) => {
  return (
    <div className="star">
      <span>
        {Array.from({ length: max }, (_, i) => (
          <StarIcon key={i} color={color} filled={score >= i + 1} />
        ))}
      </span>
      <p>{score}점</p>
    </div>
  );
};

export default Star;
