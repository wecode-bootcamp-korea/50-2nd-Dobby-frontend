import React from 'react';
import './PayComplete.scss';

const PayComplete = () => {
  return (
    <div className="payComplete">
      <div className="payCompleteArea">
        <h2 className="payCompleteTitle">주문 / 결제</h2>
        <div class="payCompleteGroup">
          <strong className="payCompleteText">결제가 완료되었습니다!</strong>
          <button type="button" className="btn btnPrimary">
            <span>홈으로</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayComplete;
