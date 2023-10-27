import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <div className="mainLoginBody">
        <h1 className="helloText">안녕하세요!😊</h1>
        <p className="intoText">즐거움으로 찾아오는 인생취미, Dobby 입니다.</p>
        <div className="loginTextFrame">
          <h2 className="loginText">LOGIN</h2>
        </div>
        <div className="inputFrame">
          <input className="idInput" type="text" placeholder="이메일" />
          <input className="pwInput" type="text" placeholder="비밀번호" />
          <button className="loginButton">로그인</button>
          <hr className="underline" />
        </div>
        <div className="idpwButtonFrame">
          <button className="idButton">아이디 찾기</button>
          <button className="pwButton">비밀번호 찾기</button>
        </div>
        <div className="signupButtonFrame">
          <button className="signupButton">회원가입</button>
        </div>
      </div>
    </div>
  );
};

return <div>로그인 페이지 입니다.</div>;

export default Login;
