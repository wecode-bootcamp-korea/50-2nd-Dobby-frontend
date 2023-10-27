import React, { useEffect, useState } from 'react';
import './Signup.scss';

const Signup = () => {
  // 체크박스(state)
  const [allCheck, setAllcheck] = useState(false);
  const [useCheck, setUsecheck] = useState(false);
  const [infoCheck, setInfocheck] = useState(false);
  const [marketingCheck, setMarketingcheck] = useState(false);
  // 모두 동의 버튼
  const allBtnevent = () => {
    if (allCheck === false) {
      setAllcheck(true);
      setUsecheck(true);
      setInfocheck(true);
      setMarketingcheck(true);
    } else {
      setAllcheck(false);
      setUsecheck(false);
      setInfocheck(false);
      setMarketingcheck(false);
    }
  };
  // 이용약관 동의 버튼
  const useBtnevent = () => {
    if (useCheck === false) {
      setUsecheck(true);
    } else {
      setUsecheck(false);
    }
  };
  // 개인정보 수집 버튼
  const infoBtnevent = () => {
    if (infoCheck === false) {
      setInfocheck(true);
    } else {
      setInfocheck(false);
    }
  };
  // 마케팅 정보동의 버튼
  const marketBtnevent = () => {
    if (marketingCheck === false) {
      setMarketingcheck(true);
    } else {
      setMarketingcheck(false);
    }
  };
  // 3개 버튼 모두체크시 전체동의 자동체크
  useEffect(() => {
    if (useCheck === true && infoCheck === true && marketingCheck === true) {
      setAllcheck(true);
    } else {
      setAllcheck(false);
    }
  }, [useCheck, infoCheck, marketingCheck]);
  // 회원가입 버튼

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
        <input
          className="passwordConfir"
          type="text"
          placeholder="비밀번호를 다시한번 입력해주세요"
        />
        <input className="name" type="text" placeholder="이름을 입력해주세요" />
        <input
          className="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
      </form>
      <p className="coditionsText">Dobby 서비스 이용약관에 동의해주세요.</p>
      <span className="checkboxFrame01">
        <input
          className="allCheck"
          type="checkbox"
          checked={allCheck}
          onChange={allBtnevent}
        />
        <p className="checkText">모두 동의합니다</p>
      </span>
      <span className="checkboxFrame02">
        <input
          className="termsCheck"
          type="checkbox"
          checked={useCheck}
          onChange={useBtnevent}
        />
        <p className="checkText">(필수) 이용 약관 동의</p>
      </span>
      <span className="checkboxFrame03">
        <input
          className="personalCheck"
          type="checkbox"
          checked={infoCheck}
          onChange={infoBtnevent}
        />
        <p className="checkText">(필수) 개인정보 수집 및 이용 동의</p>
      </span>
      <span className="checkboxFrame04">
        <input
          className="marketingCheck"
          type="checkbox"
          checked={marketingCheck}
          onChange={marketBtnevent}
        />
        <p className="checkText">(선택) 광고성 및 마케팅 정보 동의</p>
      </span>
      <button className="signupButton">회원가입 하기</button>
    </div>
  );
};

export default Signup;
