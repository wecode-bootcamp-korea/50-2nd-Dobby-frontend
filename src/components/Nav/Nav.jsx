import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartIcon from './cartIcon.png';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  //저장된 토큰값 불러오기
  const dobbyToken = localStorage.getItem('token');
  //로그인시 환영문구를 위한 localstorage에 저장된 닉네임 불러오기
  const user = localStorage.getItem('nickname');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    alert('로그아웃 되었습니다.');
    navigate('/main');
  };

  return (
    <div className="navHeader">
      <div className="header">
        <h1
          onClick={() => {
            navigate('/main');
          }}
        >
          DOBBY
        </h1>
        <div
          className="navbarMenu"
          onClick={() => {
            navigate('/store');
          }}
        >
          스토어
        </div>
      </div>

      <div className="login">
        {dobbyToken ? (
          <>
            <label>😊{user}님 어서오세요!😊&nbsp;&nbsp;</label>
            <label onClick={logout}> 로그아웃 </label>
          </>
        ) : (
          <label
            onClick={() => {
              navigate('/');
            }}
          >
            로그인/회원가입
          </label>
        )}

        <div>
          <img
            className="cart"
            src={CartIcon}
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
