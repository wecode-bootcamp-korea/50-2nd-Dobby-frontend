import React from 'react';
import './Sorting.scss';
import { useSearchParams } from 'react-router-dom';

const Sorting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const FILTER = [
    { id: 1, text: '낮은가격순', value: 'priceAsc' },
    { id: 2, text: '높은가격순', value: 'priceDesc' },
    { id: 3, text: '이름순', value: 'nameAsc' },
    { id: 4, text: '최신순', value: 'newest' },
  ];
  const handleFilter = value => {
    searchParams.set('sortBy', value);
    setSearchParams(searchParams);
  };

  return (
    <div className="sorting">
      <div className="container">
        <ul>
          {FILTER.map(filter => {
            return (
              <div
                className="sortBtn"
                onClick={() => handleFilter(filter.value)}
                key={filter.value}
              >
                <li className={filter.value}>{filter.text}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sorting;
