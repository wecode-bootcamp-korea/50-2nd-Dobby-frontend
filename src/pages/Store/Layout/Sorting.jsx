import React from 'react';
import './Sorting.scss';
import { Link } from 'react-router-dom';

const Sorting = ({ id }) => {
  const FILTER = [
    { id: 1, text: '낮은가격순', value: 'priceAsc' },
    { id: 2, text: '높은가격순', value: 'priceDesc' },
    { id: 3, text: '이름순', value: 'nameAsc' },
    { id: 4, text: '최신순', value: 'newest' },
  ];

  return (
    <div className="sorting">
      <div className="container">
        <ul>
          {FILTER.map(filter => (
            <Link
              to={`/store${id ? `/${id}` : ''}?sortBy=${filter.value}`}
              key={filter.value}
            >
              <li className={filter.value}>{filter.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sorting;
