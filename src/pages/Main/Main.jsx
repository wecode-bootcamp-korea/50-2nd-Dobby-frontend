import React, { useEffect, useState } from 'react';
import Subscribe from './Layout/Subscribe/Subscribe';
import CategorizedSlide from './Layout/CategorizedSlide/CategorizedSlide';
import CategoryList from './Layout/CategoryList/CategoryList';
import './Main.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductList } from './ProductList';
import { GET_SUBSCRIPTION_API } from '../../config';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Main = () => {
  // const [subscribe, setSubscribe] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setSubTypeParams = subtype => {
    searchParams.set('dobbyBox', subtype);
    setSearchParams(searchParams);
  };

  // useEffect(() => {
  //   fetch('/data/basic.json', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const updateData = data.data[0];
  //       setSubscribe(updateData);
  //     });
  // }, []);

  // ?dobbyBox=basic
  // ?dobbyBox=creative
  // ?dobbyBox=collection

  const handleSubScribe = () => {
    const newParams = searchParams.toString();

    if (newParams === '') {
      alert('구독 옵션을 선택해주세요!');
      return;
    }
    fetch(`${GET_SUBSCRIPTION_API}?${newParams}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        query: `?${newParams}`,
      }),
    })
      .then(res => res.json())
      .then(data => {
        navigate(data.redirectUrl);
      })
      .catch(error => {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
        console.log(error);
      });
  };

  return (
    <div className="main">
      <Subscribe
        handleSubScribe={handleSubScribe}
        setSubTypeParams={setSubTypeParams}
      />
      <CategoryList />
      <CategorizedSlide />
      {/* 
      <div className="textList">
        {ProductList.map((list, index) => (
          <ProductCard
            key={index}
            src={list.src}
            title={list.title}
            price={list.price}
            rating={list.rating}
            reviewCount={list.reviewCount}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Main;
