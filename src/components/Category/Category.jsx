import React from 'react';
import './Category.scss';
import { useNavigate } from 'react-router-dom';

const Category = ({ subType, text, id }) => {
  const navigate = useNavigate();
  const handleMenu = () => {
    return navigate(`store?categoryid=${id}`);
  };

  return (
    <div className="category" onClick={handleMenu}>
      <img
        src={`images/icon_${subType}.svg`}
        alt={text}
        className={`menu ${subType}`}
      />
      <p>{text}</p>
    </div>
  );
};

export default Category;
