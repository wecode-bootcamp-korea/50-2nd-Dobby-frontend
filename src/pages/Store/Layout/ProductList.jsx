import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './ProductList.scss';
import { Link } from 'react-router-dom';

const ProductList = ({ productData, menuList }) => {
  return (
    <div className="productList">
      <div className="menuWrapper">
        <div className="menu">
          <ul className="menuList">
            {menuList.map(menu => (
              <div key={`${menu.id}menu`}>
                <Link
                  to={menu.id === 3 ? '/store' : `/store?categoryid=${menu.id}`}
                >
                  <li>{menu.name}</li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="listData">
        {productData.map(data => (
          <ProductCard
            key={data.id}
            src={data.image}
            title={data.name}
            price={data.price}
            score={data.score}
            commentCount={data.commentCount}
            content={data.content}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
