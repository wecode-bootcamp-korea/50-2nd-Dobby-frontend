import React, { useState, useEffect } from 'react';
import './Star.scss';

const Star = ({ max = 5, color = '#fcc419' }) => {
  const [rate, setRate] = useState(3);
  return (
    <div className="icon">
      <span className="star_icon">
        {Array.from({ length: max }, (_, i) => (
          <StarIcon key={i} color={color} filled={rate >= i + 1} />
        ))}
      </span>
      <p>{rate}점</p>
    </div>
  );
};

export default Star;

const StarIcon = ({ color, filled }) => {
  return (
    <span>
      {filled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="39"
          viewBox="0 0 14 13"
        >
          <path
            id="star"
            d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
            transform="translate(-2 -2)"
            fill={color}
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="39"
          viewBox="0 0 14 13"
        >
          <path
            id="star"
            d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
            transform="translate(-2 -2)"
            fill={'#f4f4f4'}
          />
        </svg>
      )}
    </span>
  );
};
