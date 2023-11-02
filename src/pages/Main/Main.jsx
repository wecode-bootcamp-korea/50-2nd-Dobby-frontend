import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Subscribe from './Layout/Subscribe/Subscribe';
import CategorizedSlide from './Layout/CategorizedSlide/CategorizedSlide';
import CategoryList from './Layout/CategoryList/CategoryList';
import { GET_PRODUCTLIST_API, GET_SUBSCRIPTION_API } from '../../config';
import './Main.scss';

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productsData, setProductsData] = useState({});
  const [menuList, setMenuList] = useState([]);

  const setSubTypeParams = subtype => {
    const subscriptParams = new URLSearchParams(searchParams);
    subscriptParams.set('dobbyBox', subtype);
    setSearchParams(subscriptParams);
  };

  // 백엔드 통신 데이터
  useEffect(() => {
    fetch(`${GET_PRODUCTLIST_API}/productList`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductsData(data);
      });
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
  //       setProductsData(data);
  //     });
  // }, []);

  // 카테고리 메뉴 데이터
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

  const handleSubScribe = () => {
    fetch(`${GET_SUBSCRIPTION_API}?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Autorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        window.location.href = data.redirectUrl;
      });
  };

  return (
    <div className="main">
      <Subscribe
        handleSubScribe={handleSubScribe}
        setSubTypeParams={setSubTypeParams}
      />
      <CategoryList menuList={menuList} />
      <CategorizedSlide
        slideList={productsData.mdRecommendation}
        title="취향저격! - MD가 선택한 다양한 아이템"
        subTitle="MD의 특별한 추천 아이템을 만나보세요."
        subType="collection"
      />
      <CategorizedSlide
        slideList={productsData.bestProducts}
        title="인기 상품 - 베스트셀러 아이템 모음"
        subTitle="고객들이 가장 많이 선택한 베스트셀러 아이템을 만나보세요."
        subType="creative"
      />
      <CategorizedSlide
        slideList={productsData.newProducts}
        title="신상품 소식 - 최근 출시된 아이템"
        subTitle="최근에 입고된 상품을 소개합니다. 새로운 취미를 발견해보세요."
        subType="basic"
      />
    </div>
  );
};

export default Main;
