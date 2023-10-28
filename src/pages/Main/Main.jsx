import React, { useEffect, useState } from 'react';
import Subscribe from './Layout/Subscribe/Subscribe';
import CategorizedSlide from './Layout/CategorizedSlide/CategorizedSlide';
import CategoryList from './Layout/CategoryList/CategoryList';
import './Main.scss';
import { GET_SUBSCRIPTION_API } from '../../config';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [slideList, setSlideList] = useState([]);

  const setSubTypeParams = subtype => {
    searchParams.set('dobbyBox', subtype);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch('/data/slideList.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setSlideList(data);
      });
  }, []);

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
      .catch(alert('오류가 발생했습니다. 다시 시도해주세요.'));
  };

  return (
    <div className="main">
      <Subscribe
        handleSubScribe={handleSubScribe}
        setSubTypeParams={setSubTypeParams}
      />
      <CategoryList />
      <CategorizedSlide
        slideList={slideList.mdRecommendation}
        title="취향저격! - MD가 선택한 다양한 아이템"
        subTitle="MD의 특별한 추천 아이템을 만나보세요."
        subType="collection"
      />
      <CategorizedSlide
        slideList={slideList.bestProducts}
        title="인기 상품 - 베스트셀러 아이템 모음"
        subTitle="고객들이 가장 많이 선택한 베스트셀러 아이템을 만나보세요."
        subType="creative"
      />
      <CategorizedSlide
        slideList={slideList.newProducts}
        title="신상품 소식 - 최근 출시된 아이템"
        subTitle="최근에 입고된 상품을 소개합니다. 새로운 취미를 발견해보세요."
        subType="basic"
      />
    </div>
  );
};

export default Main;
