import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartLogo from './Cart-icon.png';
import './Nav.scss';

//token과 일치한지 확인후 삼합연산자를 이용하여 onclick 이동하게하기
//TOKEN STATE로 안해도 되고  localStorage에서만 가져와서 처리가능
// 로그인시 localStorage.getItem('nickname')님 어서오세요 :) ,메시지 남기기
const Nav = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const dobbyToken = localStorage.getItem('TOKEN');

  useEffect(() => {
    dobbyToken && setLogin(true);
  }, [dobbyToken, login]);

  const logout = () => {
    localStorage.removeItem('TOKEN');
    alert('로그아웃 되셨습니다!');
    setLogin(false);
  };

  return (
    <div className="navHeader">
      <div className="header">
        <h1
          onClick={() => {
            navigate('/');
          }}
        >
          DOBBY
        </h1>
        <div
          className="navbarMenu"
          onClick={() => {
            navigate('/payment');
          }}
        >
          스토어
        </div>
      </div>

      <div className="login">
        {login ? (
          <label onClick={logout}> 로그아웃 </label>
        ) : (
          <label
            onClick={() => {
              navigate('/');
            }}
          >
            로그인
          </label>
        )}

        <div>
          <img
            className="cart"
            src={CartLogo}
            alt="장바구니"
            onClick={() => {
              navigate('/cart');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

/* <div className="login">
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
</label> */
