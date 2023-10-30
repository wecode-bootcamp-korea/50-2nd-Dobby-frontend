import React from 'react';
import './Cart.scss';
// import img from '../../../public/images/cart_sample.jpg';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cartArea">
        <form className="formArea">
          <div className="cartHeader">
            <div className="formInput">
              <label htmlFor="checkAll" className="formLabel">
                <span>모두 선택</span>
                <span>(2/2)</span>
              </label>
              <input type="checkbox" id="checkAll" className="formCheck" />
            </div>
            <div className="btnArea">
              <button type="button" className="btn btnText">
                <span>선택삭제</span>
              </button>
            </div>
          </div>
          <div className="cartBody">
            <ul className="listArea">
              <li className="listItem">
                <strong className="listTitle">예술주조</strong>
                <div className="listDetail">
                  <div className="detailArea">
                    <div className="formInput">
                      <label htmlFor="checkAll" className="formLabel blind">
                        <span>선택</span>
                      </label>
                      <input
                        type="checkbox"
                        id="checkAll"
                        className="formCheck"
                      />
                    </div>
                    <div className="detailInfo">
                      <div className="detailImage">
                        <img
                          src="../../../public/images/cart_sample.jpg"
                          alt="만강에 비친 달 X 2병"
                        />
                      </div>
                      <div className="detailGroup">
                        <div className="detailTop">
                          <strong className="detailTitle">
                            만강에 비친 달 X 2병
                          </strong>
                          <button type="button" className="btn btnClose">
                            <span className="blind">닫기</span>
                          </button>
                        </div>
                        <div className="detailBottom">
                          <div className="detailControl">
                            <button type="button" className="btn decrease">
                              <span className="blind">-</span>
                            </button>
                            <span className="controlText">1</span>
                            <button type="button" className="btn increase">
                              <span className="blind">+</span>
                            </button>
                          </div>
                          <span className="detailPrice">30,400원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amountArea">
                    <dl className="amountList">
                      <dt>상품금액</dt>
                      <dd>0원</dd>
                    </dl>
                    <dl className="amountList">
                      <dt>베송비</dt>
                      <dd>0원</dd>
                    </dl>
                    <dl className="amountList total">
                      <dt>총 금액</dt>
                      <dd>0원</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li className="listItem">
                <strong className="listTitle">예술주조</strong>
                <div className="listDetail">
                  <div className="detailArea">
                    <div className="formInput">
                      <label htmlFor="checkAll" className="formLabel blind">
                        <span>선택</span>
                      </label>
                      <input
                        type="checkbox"
                        id="checkAll"
                        className="formCheck"
                      />
                    </div>
                    <div className="detailInfo">
                      <div className="detailImage">
                        <img
                          src="../../../public/images/cart_sample.jpg"
                          alt="만강에 비친 달 X 2병"
                        />
                      </div>
                      <div className="detailGroup">
                        <div className="detailTop">
                          <strong className="detailTitle">
                            만강에 비친 달 X 2병
                          </strong>
                          <button type="button" className="btn btnClose">
                            <span className="blind">닫기</span>
                          </button>
                        </div>
                        <div className="detailBottom">
                          <div className="detailControl">
                            <button type="button" className="btn decrease">
                              <span className="blind">-</span>
                            </button>
                            <span className="controlText">1</span>
                            <button type="button" className="btn increase">
                              <span className="blind">+</span>
                            </button>
                          </div>
                          <span className="detailPrice">30,400원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amountArea">
                    <dl className="amountList">
                      <dt>상품금액</dt>
                      <dd>0원</dd>
                    </dl>
                    <dl className="amountList">
                      <dt>배송비</dt>
                      <dd>0원</dd>
                    </dl>
                    <dl className="amountList total">
                      <dt>총 금액</dt>
                      <dd>0원</dd>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </form>
        <div className="billArea">
          <div className="billGroup">
            <strong className="billTitle">계산서</strong>
            <div className="billBox">
              <dl className="billList">
                <dt>총 상품금액</dt>
                <dd>0원</dd>
              </dl>
              <dl className="billList">
                <dt>총 배송비</dt>
                <dd>0원</dd>
              </dl>
              <dl className="billList total">
                <dt>총 결제 예상 금액</dt>
                <dd>0원</dd>
              </dl>
            </div>
          </div>
          <div className="btnArea">
            <button type="button" className="btn btnPrimary">
              <span>구매하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
