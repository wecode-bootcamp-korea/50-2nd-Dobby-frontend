import React from 'react';
import './FindPW.scss';

const FindPW = () => {
  return (
    <div className="findPWFrame">
      <h1 className="findpwText">비밀번호 찾기</h1>
      <form className="formPWFrame">
        <input
          className="emailInput"
          type="text"
          placeholder="이메일을 입력해주세요"
        ></input>
      </form>
      <div className="confirButtonFrame">
        <button className="confirButton">본인 인증하기</button>
      </div>
    </div>
  );
};

export default FindPW;
