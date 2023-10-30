import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarIcon from './StarIcon';
import './Star.scss';

const Star = ({ max = 5, color = '#fcc419' }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://10.58.52.93:8000/products/${id}`)
      .then(res => res.json())
      .then(result => setProduct(result.product));
  }, [id]);

  if (Object.keys(product).length === 0) return null;
  return (
    <div className="star">
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
