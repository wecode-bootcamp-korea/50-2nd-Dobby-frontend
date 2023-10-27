import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon';
import './Star.scss';

const Star = ({ max = 5, color = '#fcc419' }) => {
  const [rate, setRate] = useState({});
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('http://10.58.52.77:8000/products/2')
      .then(res => res.json())
      .then(result => setProduct(result.data));
  }, []);

  if (Object.keys(product).length === 0) return null;
  return (
    <div className="icon">
      <span>
        {Array.from({ length: max }, (_, i) => (
          <StarIcon
            key={i}
            color={color}
            filled={product.average_score >= i + 1}
          />
        ))}
      </span>
      <p>{product.average_score}점</p>
    </div>
  );
};

export default Star;
