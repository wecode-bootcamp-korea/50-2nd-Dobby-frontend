import React from 'react';
import './FindID.scss';

const FindID = () => {
  return (
    <div className="idFindFrame">
      <h1 className="idText">아이디 찾기</h1>
      <form className="findInputFrame">
        <input
          className="nameInput"
          type="text"
          placeholder="이름을 입력해주세요"
        ></input>
        <input
          className="phoneInput"
          type="text"
          placeholder="휴대폰 번호를 입력해주세요 (- 제외)"
        ></input>
      </form>
      <div className="IDButtonFrame">
        <button className="findIDButton">아이디 찾기</button>
      </div>
    </div>
  );
};

export default FindID;
