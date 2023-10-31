import React, { useEffect, useState } from 'react';
import ProductList from './Layout/ProductList';
import { useParams } from 'react-router-dom';
import './Store.scss';
import { GET_PRODUCT_API } from '../../config';

const Store = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [menuList, setMenuList] = useState([]);

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

  //`${GET_PRODUCT_API}/category?categoryId=2`
  //'/data/slideList.json'

  const categoriesFetch = () => {
    fetch(`${GET_PRODUCT_API}/categories/${id}`, {
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

  const mainFetch = () => {
    fetch(`${GET_PRODUCT_API}/products`, {
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

  // 백엔드 데이터
  useEffect(() => {
    if (!id) {
      mainFetch();
    } else {
      categoriesFetch();
    }
  }, []);

  // mock 데이터
  // useEffect(() => {
  //   fetch('/data/slideList.json', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProductData(data.newProducts);
  //     });
  // }, []);

  return (
    <div className="store">
      <ProductList
        productData={productData}
        // subType={subType}
        menuList={menuList}
      />
    </div>
  );
};

export default Store;
