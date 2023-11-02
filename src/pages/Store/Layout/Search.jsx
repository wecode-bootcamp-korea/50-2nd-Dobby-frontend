import React, { useState } from 'react';
import './Search.scss';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
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
