import React, { useEffect, useState } from 'react';
import ProductList from './Layout/ProductList';
import { useLocation } from 'react-router-dom';
import { GET_PRODUCT_API } from '../../config';
import './Store.scss';

const Store = () => {
  const [productData, setProductData] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const location = useLocation();
  const queryString = location.search;

  // 카테고리 데이터
  useEffect(() => {
    fetch('/data/menu.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMenuList(data.menu);
      });
  }, []);

  // 백엔드 데이터
  useEffect(() => {
    const fetchData = () => {
      fetch(`${GET_PRODUCT_API}/products${queryString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(res => res.json())
        .then(data => {
          setProductData(data.message);
        });
    };
    fetchData(queryString);
  }, [queryString]);

  return (
    <div className="store">
      <ProductList
        productData={productData}
        menuList={menuList}
        id={menuList.id}
      />
    </div>
  );
};

export default Store;
