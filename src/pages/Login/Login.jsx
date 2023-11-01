import React from 'react';
import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // ID(이메일)
  const [id, setID] = useState('');
  const saveUserID = event => {
    setID(event.target.value);
  };
  // PW(비밀번호)
  const [pw, setPW] = useState('');
  const saveUserPW = event => {
    setPW(event.target.value);
  };
  // 로그인 버튼
  const isInvalid = id.includes('@', '.') && pw.length >= 4;
  const goToMain = () => {
    fetch('http://10.58.52.106:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'LOG_IN_SUCCESS') {
          alert('로그인 되었습니다.');
          localStorage.setItem('token', data.message);
        } else if (data.message === 'INVALID EMAIL OR PASSWORD') {
          alert('가입되지 않은 정보입니다.');
        }
        console.log(data);
      });
  };
  // 회원가입 버튼(회원가입 페이지로 이동)
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/signup');
  };
  return (
    <div className="mainLoginBody">
      <h1 className="helloText">안녕하세요!😊</h1>
      <p className="intoText">즐거움으로 찾아오는 인생취미, Dobby 입니다.</p>
      <div className="loginTextFrame">
        <h2 className="loginText">LOGIN</h2>
      </div>
      <div className="inputFrame">
        <input
          className="idInput"
          type="text"
          onChange={saveUserID}
          placeholder="이메일"
        />
        <input
          className="pwInput"
          type="password"
          onChange={saveUserPW}
          placeholder="비밀번호"
        />
        <button
          className={isInvalid ? 'loginButton' : 'disabledButton'}
          disabled={isInvalid ? false : true}
          onClick={goToMain}
        >
          로그인
        </button>
      </div>
      <div className="idpwButtonFrame">
        <button className="idButton">아이디 찾기</button>
        <button className="pwButton">비밀번호 찾기</button>
      </div>
      <div className="signupButtonFrame">
        <button className="signupButton" onClick={goToSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
};
export default Login;
