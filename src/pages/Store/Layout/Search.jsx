import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    if (!search) {
      alert('검색어를 입력해주세요!');
      return;
    }
    searchParams.set('search', search);
    setSearchParams(searchParams);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Search;
