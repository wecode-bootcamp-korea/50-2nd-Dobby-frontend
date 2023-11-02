import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  // 이메일, 비밀번호, 비밀번호 확인, 이름, 닉네임 확인
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfir, setPasswordConfir] = useState('');
  const [name, setName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [nickname, setNickName] = useState('');
  // (이메일, 비밀번호, 비밀번호 확인, 이름, 닉네임) 오류 메세지 상태 저장
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirMessage, setPasswordConfirMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [phonenumberMessage, setPhonenumberMessage] = useState('');
  const [nicknameMessage, setNickNameMessage] = useState('');
  // (이메일, 비밀번호, 비밀번호 확인, 이름, 닉네임) 입력창 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfir, setIsPasswordConfir] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPhonenumber, setIsPhonenumber] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  // 체크박스(state)
  const [allCheck, setAllcheck] = useState(false);
  const [useCheck, setUsecheck] = useState(false);
  const [infoCheck, setInfocheck] = useState(false);
  // 이메일
  const onChangeEmail = useCallback(event => {
    const emailRagex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);
    if (!emailRagex.test(emailCurrent)) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식입니다.');
      setIsEmail(true);
    }
  }, []);
  // 비밀번호
  const onChangePassword = useCallback(event => {
    const passwordRagex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-11]).{8,25}$/;
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);
    if (!passwordRagex.test(passwordCurrent)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 10자리 이상 입력해주세요.',
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.');
      setIsPassword(true);
    }
  }, []);
  // 비밀번호 확인
  const onChangePasswordConfir = useCallback(
    event => {
      const passwordConfirCurrent = event.target.value;
      setPasswordConfir(passwordConfirCurrent);
      if (password === passwordConfirCurrent) {
        setPasswordConfirMessage('비밀번호가 일치합니다.');
        setIsPasswordConfir(true);
      } else {
        setPasswordConfirMessage(
          '비밀번호가 일치하지 않습니다. 다시한번 확인해주세요',
        );
        setIsPasswordConfir(false);
      }
    },
    [password],
  );
  // 이름
  const onChangeName = useCallback(event => {
    const nameRagex = /^[ㄱ-ㅎ|가-힣]+$/;
    const nameCurrent = event.target.value;
    setName(nameCurrent);
    if (!nameRagex.test(nameCurrent)) {
      setNameMessage('올바른 이름 형식이 아닙니다.');
      setIsName(false);
    } else {
      setNameMessage('올바른 이름 형식입니다.');
      setIsName(true);
    }
  }, []);
  // 전화번호
  const onChangePhoneNumber = useCallback(event => {
    const phoneNumberRagex = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
    const phoneNumberCurrent = event.target.value;
    setPhoneNumber(phoneNumberCurrent);
    if (!phoneNumberRagex.test(phoneNumberCurrent)) {
      setPhonenumberMessage('전화번호를 올바르게 입력해주세요');
      setIsPhonenumber(false);
    } else {
      setPhonenumberMessage('정확한 전화번호 입니다.');
      setIsPhonenumber(true);
    }
  }, []);
  // 닉네임
  const onChangeNickName = useCallback(event => {
    const nicknameRagex = /^[a-z|A-Z]+$/;
    const nicknameCurrent = event.target.value;
    setNickName(nicknameCurrent);
    if (!nicknameRagex.test(nicknameCurrent)) {
      setNickNameMessage('닉네임은 영어로 입력해주세요');
      setIsNickName(false);
    } else {
      setNickNameMessage('올바른 닉네임 형식입니다.');
      setIsNickName(true);
    }
  }, []);
  // 모두 동의 버튼(전체 체크박스를 클릭했을때)
  const inValid = !allCheck;
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
  // 로그인 페이지 이동
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };
  // 회원가입 정보 입력후 회원가입 하기 버튼
  const goToSignup = () => {
    fetch('http://10.58.52.105:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        phonenumber: phonenumber,
        nickname: nickname,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SIGN_UP_SUCCESS') {
          alert('회원가입이 완료 되었습니다.');
          goToLogin('/');
        } else {
          alert('이미 가입된 사용자 입니다.');
        }
        console.log(data);
      });
  };
  return (
    <div className="signupBody">
      <header className="headerFrame">
        <h1 className="headerText">환영합니다!</h1>
        <p className="subText">지금 회원가입하면 최대 100 POINT를 드려요</p>
      </header>
      <form className="inputFrame">
        <div className="formbox">
          <input
            className="userInput"
            type="text"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력해주세요"
          />
          {email.length > 0 && (
            <span className={`message ${isEmail ? 'success' : 'error'}`}>
              {emailMessage}
            </span>
          )}
        </div>
        <div className="formbox">
          <input
            className="userInput"
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요"
            maxLength={10}
          />
          {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>
              {passwordMessage}
            </span>
          )}
        </div>
        <div className="formbox">
          <input
            className="userInput"
            type="password"
            onChange={onChangePasswordConfir}
            placeholder="비밀번호를 다시한번 입력해주세요"
            maxLength={10}
          />
          {passwordConfir.length > 0 && (
            <span
              className={`message ${isPasswordConfir ? 'success' : 'error'}`}
            >
              {passwordConfirMessage}
            </span>
          )}
        </div>
        <div className="formbox">
          <input
            className="userInput"
            type="text"
            value={name}
            onChange={onChangeName}
            placeholder="이름을 입력해주세요"
          />
          {name.length > 0 && (
            <span className={`message ${isName ? 'success' : 'error'}`}>
              {nameMessage}
            </span>
          )}
        </div>
        <div className="formbox">
          <input
            className="userInput"
            type="phonenumber"
            value={phonenumber}
            onChange={onChangePhoneNumber}
            placeholder="전화번호를 입력해주세요"
            maxLength={13}
          />
          {phonenumber.length > 0 && (
            <span className={`message ${isPhonenumber ? 'success' : 'error'}`}>
              {phonenumberMessage}
            </span>
          )}
        </div>
        <div className="formbox">
          <input
            className="userInput"
            type="text"
            value={nickname}
            onChange={onChangeNickName}
            placeholder="닉네임을 입력해주세요"
          />
          {nickname.length > 0 && (
            <span className={`message ${isNickName ? 'success' : 'error'}`}>
              {nicknameMessage}
            </span>
          )}
        </div>
      </form>
      <p className="coditionsText">Dobby 서비스 이용약관에 동의해주세요.</p>
      <div className="checkFormBox">
        <span className="checkboxFrame">
          <input
            className="allCheck"
            type="checkbox"
            checked={allCheck}
            onChange={allBtnevent}
          />
          <p className="checkText">모두 동의합니다</p>
        </span>
        <span className="checkboxFrame">
          <input
            className="termsCheck"
            type="checkbox"
            checked={useCheck}
            onChange={useBtnevent}
          />
          <p className="checkText">(필수) 이용 약관 동의</p>
        </span>
        <span className="checkboxFrame">
          <input
            className="personalCheck"
            type="checkbox"
            checked={infoCheck}
            onChange={infoBtnevent}
          />
          <p className="checkText">(필수) 개인정보 수집 및 이용 동의</p>
        </span>
      </div>
      <div>
        <button
          className={inValid ? 'disableButton' : 'signupButton'}
          onClick={goToSignup}
        >
          회원가입 하기
        </button>
      </div>
    </div>
  );
};

export default Signup;
