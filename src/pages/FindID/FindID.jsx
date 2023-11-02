import React, { useState } from 'react';
import './FindID.scss';

const FindID = () => {
  // 휴대폰 번호 입력시
  const [phoneNumber, setPhoneNumber] = useState('');
  // 인증번호 입력시
  const [number, setNumber] = useState('');
  // 휴대폰 유효성 검사
  const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
  // 인증번호 유효성 검사
  const [numberMessage, setNumberMessage] = useState('');
  // 휴대폰 오류 메세지
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  // 인증번호 오류 메세지
  const [isNumber, setIsNumber] = useState(false);

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
  // 인증번호 조건식
  const onChangeVerifinNumber = event => {
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
  // 이름과 휴대폰 번호 입력값이 모두 비어있지 않을때 버튼 활성화
  const phoneinValid = phoneNumber.length !== 11;
  const verifinValid = number.length !== 6;
  // 인증번호 받기 버튼
  const handleVerifin = () => {
    fetch('http://10.58.52.198:8000/users/phoneauth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'AUTHENTICATION_NUMBER_SUCCESS') {
          alert('문자로 인증번호를 전송했습니다. 확인해주세요');
        } else {
          alert('아이디를 찾을 수 없습니다.');
        }
      });
  };
  // 아이디 찾기 버튼
  const handleIDFind = () => {
    fetch('http://10.58.52.198:8000/users/phoneauth/phoneverifynumber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        number: number,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'FIND_ID_SUCCESS') {
          alert(`회원님의 아이디는 ${data.email} 입니다.`);
        } else {
          alert('아이디를 찾을 수 없습니다.');
        }
      });
  };
  return (
    <div className="idFindFrame">
      <h1 className="idText">아이디 찾기</h1>
      <form className="findIDFrame">
        <input
          className="userInput"
          type="phomenumber"
          maxLength={11}
          onChange={onChangePhoneNumber}
          placeholder="휴대폰 번호를 입력해주세요 (- 제외)"
        />
        {phoneNumber.length > 0 && (
          <span className={`message ${isPhoneNumber ? 'success' : 'error'}`}>
            {phoneNumberMessage}
          </span>
        )}
      </form>
      <form className="findIDFrame">
        <input
          className="userInput"
          type="text"
          maxLength={6}
          onChange={onChangeVerifinNumber}
          placeholder="인증번호를 입력해주세요"
        />
        {number.length > 0 && (
          <span className={`message ${number ? 'success' : 'error'}`}>
            {numberMessage}
          </span>
        )}
      </form>
      <div className="phoneButtonFrame">
        <button
          className={phoneinValid ? 'disabledButton' : 'findIDButton'}
          disabled={phoneinValid}
          onClick={handleVerifin}
        >
          인증번호 받기
        </button>
        <div className="verifinButtonFrame">
          <button
            className={verifinValid ? 'disabledButton' : 'findIDButton'}
            disabled={verifinValid}
            onClick={handleIDFind}
          >
            아이디 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindID;
