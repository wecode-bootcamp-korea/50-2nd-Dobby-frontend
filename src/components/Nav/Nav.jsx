import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartLogo from './Cart-icon.png';
import './Nav.scss';

//token과 일치한지 확인후 삼합연산자를 이용하여 onclick 이동하게하기
//TOKEN STATE로 안해도 되고  localStorage에서만 가져와서 처리가능
// 로그인시 localStorage.getItem('nickname')님 어서오세요 :) ,메시지 남기기
const Nav = () => {
  const navigate = useNavigate();
  //저장된 토큰값 불러오기
  const dobbyToken = localStorage.getItem('TOKEN');
  //로그인 유무 분기처리를 위해 state 생성,
  const [login, setLogin] = useState(true);
  //처음엔 login=false 그 뜻은 즉 로그인버튼이 떠야함
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
            navigate('/main');
          }}
        >
          DOBBY
        </h1>
        <div
          className="navbarMenu"
          onClick={() => {
            navigate('/main');
          }}
        >
          스토어
        </div>
      </div>

      <div className="login">
        {login ? (
          <>
            <label>헝그리민지님 어서오세요!</label>
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
