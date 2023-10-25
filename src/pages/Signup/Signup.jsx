import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="signupBody">
      <header className="headerFrame">
        <h1 className="headerText">환영합니다!</h1>
        <p className="subText">지금 회원가입하면 최대 4,000P를 드려요</p>
      </header>
      <form className="inputFrame">
        <input
          className="email"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <input
          className="password"
          type="text"
          placeholder="비밀번호를 입력해주세요"
        />
        <input className="name" type="text" placeholder="이름을 입력해주세요" />
        <input
          className="phonenumber"
          type="text"
          placeholder="휴대폰 번호를 입력해주세요"
        />
        <input
          className="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
      </form>
      <p className="coditionsText">Dobby 서비스 이용약관에 동의해주세요.</p>
      <span className="checkboxFrame01">
        <input className="allCheck" type="checkbox" />
        <p className="checkText">모두 동의합니다</p>
      </span>
      <span className="checkboxFrame02">
        <input className="termsCheck" type="checkbox" />
        <p className="checkText">(필수) 이용 약관 동의</p>
      </span>
      <span className="checkboxFrame03">
        <input className="personalCheck" type="checkbox" />
        <p className="checkText">(필수) 개인정보 수집 및 이용 동의</p>
      </span>
      <span className="checkboxFrame04">
        <input className="marketingCheck" type="checkbox" />
        <p className="checkText">(선택) 광고성 및 마케팅 정보 동의</p>
      </span>
      <button className="signupButton">회원가입 하기</button>
    </div>
  );
};

export default Signup;
