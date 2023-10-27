import React, { useEffect, useState } from 'react';
import './Signup.scss';

const Signup = () => {
  // 체크박스(state)
  const [allCheck, setAllcheck] = useState(false);
  const [useCheck, setUsecheck] = useState(false);
  const [infoCheck, setInfocheck] = useState(false);
  // 회원가입 유효성 검사
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfir: '',
    name: '',
    nickname: '',
  });
  // 모두 동의 버튼
  const allBtnevent = () => {
    if (allCheck === false) {
      setAllcheck(true);
      setUsecheck(true);
      setInfocheck(true);
    } else {
      setAllcheck(false);
      setUsecheck(false);
      setInfocheck(false);
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
  // 2개 버튼 모두체크시 전체동의 자동체크
  useEffect(() => {
    if (useCheck === true && infoCheck === true) {
      setAllcheck(true);
    } else {
      setAllcheck(false);
    }
  }, [useCheck, infoCheck]);

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
          value={form.email}
          onChange={event => setForm({ ...form, email: event.target.value })}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={form.password}
          onChange={event => setForm({ ...form, password: event.target.value })}
        />
        <input
          className="passwordConfir"
          type="password"
          placeholder="비밀번호를 다시한번 입력해주세요"
          value={form.passwordConfir}
          onChange={event =>
            setForm({ ...form, passwordConfir: event.target.value })
          }
        />
        <input
          className="name"
          type="text"
          placeholder="이름을 입력해주세요"
          value={form.name}
          onChange={event => setForm({ ...form, name: event.target.value })}
        />
        <input
          className="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={form.nickname}
          onChange={event => setForm({ ...form, nickname: event.target.value })}
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
      <button className="signupButton">회원가입 하기</button>
    </div>
  );
};

export default Signup;
