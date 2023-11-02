import React, { useEffect, useState } from 'react';
import ProductList from './Layout/ProductList';
import { useLocation, useParams } from 'react-router-dom';
import { GET_PRODUCT_API } from '../../config';
import './Store.scss';

const Store = () => {
  const { id } = useParams();
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
    const fetchData = id => {
      const url = id
        ? `${GET_PRODUCT_API}/categories/${id}${queryString}`
        : `${GET_PRODUCT_API}/products${queryString}`;
      fetch(url, {
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
    fetchData(id);
  }, [id, queryString]);

  // mock 데이터

  return (
    <div className="store">
      <ProductList productData={productData} menuList={menuList} id={id} />
    </div>
  );
};

export default Store;
