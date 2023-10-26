import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartLogo from './Cart-icon.png';
import './Nav.scss';
//로그인jsx에서 토큰을 받아와 nav에서
//token과 일치한지 확인후 삼합연산자를 이용하여 onclick 이동하게하기

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navHeader">
      <h1>DOBBY</h1>
      <div
        className="navbarMenu"
        onClick={() => {
          navigate('/payment');
        }}
      >
        스토어
      </div>
      <p>환영합니다!</p>
      <div className="login">
        <label
          onClick={() => {
            navigate('/payment');
          }}
        >
          로그인
        </label>
        |
        <label
          onClick={() => {
            navigate('/cart');
          }}
        >
          로그아웃
        </label>
      </div>
      <div>
        <img className="cart" src={CartLogo} alt="장바구니" />
      </div>
    </div>
  );
};

export default Nav;
