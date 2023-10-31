import React, { useState } from 'react';
import './FindID.scss';

const FindID = () => {
  // 이름, 휴대폰 번호 입력시
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // 이름, 휴대폰 유효성 검사
  const [nameMessage, setNameMessage] = useState('');
  const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
  // 이름, 휴대폰 오류 메세지
  const [isName, setIsName] = useState(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  // 이름 조건식
  const onChangeName = event => {
    const nameRagex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const nameCurrent = event.target.value;
    setName(nameCurrent);
    if (!nameRagex.test(nameCurrent)) {
      setNameMessage('이름은 한글로 입력해주세요');
      setIsName(false);
    } else {
      setNameMessage('확인되었습니다.');
      setIsName(true);
    }
  };
  // 전화번호 조건식
  const onChangePhoneNumber = event => {
    const phoneNumberRagex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const phoneNumberCurrent = event.target.value;
    setPhoneNumber(phoneNumberCurrent);
    if (!phoneNumberRagex.test(phoneNumberCurrent)) {
      setPhoneNumberMessage('입력한 전화번호를 다시한번 확인해주세요');
      setIsPhoneNumber(false);
    } else {
      setPhoneNumberMessage('확인되었습니다.');
      setIsPhoneNumber(true);
    }
  };

  return (
    <div className="idFindFrame">
      <h1 className="idText">아이디 찾기</h1>
      <form className="findIDFrame">
        <input
          className="userInput"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={onChangeName}
        ></input>
        {name.length > 0 && (
          <span className={`message ${isName ? 'success' : 'error'}`}>
            {nameMessage}
          </span>
        )}
      </form>
      <form className="findIDFrame">
        <input
          className="userInput"
          type="phomenumber"
          maxLength={11}
          onChange={onChangePhoneNumber}
          placeholder="휴대폰 번호를 입력해주세요 (- 제외)"
        ></input>
        {phoneNumber.length > 0 && (
          <span className={`message ${isPhoneNumber ? 'success' : 'error'}`}>
            {phoneNumberMessage}
          </span>
        )}
      </form>
      <div className="IDButtonFrame">
        <button className="findIDButton">아이디 찾기</button>
      </div>
    </div>
  );
};

export default FindID;
