import React, { useState } from 'react';
import './FindPW.scss';
import { useNavigate } from 'react-router-dom';

const FindPW = () => {
  // 이메일 입력시
  const [email, setEmail] = useState('');
  // 인증번호, 새 비밀번호, 새 비밀번호 확인 입력시
  const [number, setNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newpasswordConfir, setNewPasswordConfir] = useState('');
  // 이메일 유효성 검사
  const [emailMessage, setEmailMessage] = useState('');
  // 인증번호, 새 비밀번호, 새 비밀번호 확인 유효성 검사
  const [numberMessage, setNumberMessage] = useState('');
  const [newpasswordMessage, setNewPasswordMessage] = useState('');
  const [newpasswordConfirMessage, setNewPasswordConfirMessage] = useState('');
  // 이메일 오류 메세지
  const [isEmail, setIsEmail] = useState(false);
  // 인증번호, 새 비밀번호, 새 비밀번호 확인 오류 메세지
  const [isNumber, setIsNumber] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [isNewPasswordConfir, setIsNewPasswordConfir] = useState(false);
  // 이메일 조건식
  const onChangeEmail = event => {
    const emailRagex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);
    if (!emailRagex.test(emailCurrent)) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바르게 입력하셨습니다.');
      setIsEmail(true);
    }
  };
  // 인증번호 조건식
  const onChangeNumber = event => {
    const numberRagex = /^[0-9]+$/;
    const numberCurrent = event.target.value;
    setNumber(numberCurrent);
    if (!numberRagex.test(numberCurrent)) {
      setNumberMessage('전송받은 인증번호를 다시한번 확인해주세요');
      setIsNumber(false);
    } else {
      setNumberMessage('확인되었습니다.');
      setIsNumber(true);
    }
  };
  // 새 비밀번호 조건식
  const onChangeNewPassword = event => {
    const newPasswordRagex = /^(?=.*[a-zA-Z])(?=.*\d).{9,}$/;
    const passwordCurrent = event.target.value;
    setNewPassword(passwordCurrent);
    if (!newPasswordRagex.test(passwordCurrent)) {
      setNewPasswordMessage('영문+숫자 조합으로 10자리 이상 입력해주세요.');
      setIsNewPassword(false);
    } else {
      setNewPasswordMessage('안전한 비밀번호 입니다.');
      setIsNewPassword(true);
    }
  };
  // 새 비밀번호 확인 조건식
  const onChangeNewPasswordConfir = event => {
    const newPasswordConfirCurrent = event.target.value;
    setNewPasswordConfir(newPasswordConfirCurrent);
    if (newPassword === newPasswordConfirCurrent) {
      setNewPasswordConfirMessage('비밀번호가 일치합니다.');
      setIsNewPasswordConfir(true);
    } else {
      setNewPasswordConfirMessage(
        '비밀번호가 일치하지 않습니다. 다시한번 확인해주세요',
      );
      setIsNewPasswordConfir(false);
    }
  };

  // 이메일 예외처리
  const emailIsvalid = email.includes('@') && email.includes('.');
  // 새 비밀번호, 새 비밀번호 확인 예외 처리
  const newPasswordIsvalid =
    number.length && newPassword.length >= 8 && newpasswordConfir.length >= 8;
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };
  // 인증받기 버튼
  const handleCertificate = () => {
    fetch('http://10.58.52.198:8000/users/emailauth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'AUTHENTICATION_MAIL_SUCCESS') {
          alert('이메일로 인증번호를 전송했습니다. 확인해주세요');
        } else {
          alert('아이디를 찾을 수 없습니다.');
        }
      });
  };
  // 새 비밀번호 등록하기 버튼
  const handleNewPassword = () => {
    fetch('http://10.58.52.198:8000/users/emailauth/emailverifynumber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email, number, newPassword }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'AUTHENTICATION_PASSWORD_SUCCESS') {
          alert('비밀번호 등록이 완료되었습니다.');
          goToLogin('/');
        } else {
          alert('비밀번호를 다시한번 확인해주세요');
        }
      });
  };
  return (
    <div className="findPWFrame">
      <h1 className="findpwText">비밀번호 찾기</h1>
      <form className="formPWFrame">
        <div>
          <input
            className="emailInput"
            type="text"
            onChange={onChangeEmail}
            placeholder="이메일을 입력해주세요"
          />
          {email.length > 0 && (
            <span className={`message ${isEmail ? 'success' : 'error'}`}>
              {emailMessage}
            </span>
          )}
        </div>
      </form>
      <div className="confirButtonFrame">
        <button
          className={emailIsvalid ? 'confirButton' : 'disabledButton'}
          disabled={emailIsvalid ? false : true}
          onClick={handleCertificate}
        >
          본인 인증하기
        </button>
      </div>
      <form className="formCertFrame">
        <div>
          <input
            className="userInput"
            type="text"
            onChange={onChangeNumber}
            maxLength={6}
            placeholder="인증번호를 입력해주세요"
          />
          {number.length > 0 && (
            <span className={`message ${isNumber ? 'success' : 'error'}`}>
              {numberMessage}
            </span>
          )}
        </div>
      </form>
      <form className="formCertFrame">
        <div>
          <input
            className="userInput"
            type="password"
            onChange={onChangeNewPassword}
            placeholder="새 비밀번호를 입력해주세요"
          />
          {newPassword.length > 0 && (
            <span className={`message ${isNewPassword ? 'success' : 'error'}`}>
              {newpasswordMessage}
            </span>
          )}
        </div>
      </form>
      <form className="formCertFrame">
        <div>
          <input
            className="userInput"
            type="password"
            onChange={onChangeNewPasswordConfir}
            placeholder="새 비밀번호를 다시한번 입력해주세요"
          />
          {newpasswordConfir.length > 0 && (
            <span
              className={`message ${isNewPasswordConfir ? 'success' : 'error'}`}
            >
              {newpasswordConfirMessage}
            </span>
          )}
        </div>
      </form>
      <div className="confirButtonFrame">
        <button
          className={newPasswordIsvalid ? 'confirButton' : 'disabledButton'}
          disabled={newPasswordIsvalid ? false : true}
          onClick={handleNewPassword}
        >
          새 비밀번호 등록하기
        </button>
      </div>
    </div>
  );
};

export default FindPW;
