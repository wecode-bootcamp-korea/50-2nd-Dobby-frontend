import React, { useState } from 'react';
import './FindPW.scss';

const FindPW = () => {
  // 이메일 입력시
  const [email, setEmail] = useState('');
  // 이메일 유효성 검사
  const [emailMessage, setEmailMessage] = useState('');
  // 이메일 오류 메세지
  const [isEmail, setIsEmail] = useState(false);
  // 이메일 예외처리
  const isInvalid = email.includes('@') && email.includes('.');
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
          ></input>
          {email.length > 0 && (
            <span className={`message ${isEmail ? 'success' : 'error'}`}>
              {emailMessage}
            </span>
          )}
        </div>
      </form>
      <div className="confirButtonFrame">
        <button
          className={isInvalid ? 'confirButton' : 'disabledButton'}
          disabled={isInvalid ? false : true}
        >
          본인 인증하기
        </button>
      </div>
    </div>
  );
};

export default FindPW;
