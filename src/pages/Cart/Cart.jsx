import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [checked, setChecked] = useState([]);
  const [cartList, setcartList] = useState([]);
  // const token = localStorage.getItem(
  //   `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpa2VMaW9uODI4MkB3ZWNvZGUuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTgxNjg3NTV9.8tjgbmwn2u7LeYuTKTjr3ZhTA1p5l0Nja5kUEs3yki4`,
  // );

  const handleChange = list => {
    const data = [...checked];
    const isDuplicate = data.find(item => item.id === list.id);
    const handelUnCheckItems = data.filter(item => item.id !== list.id);
    if (!isDuplicate) {
      setChecked([...data, list]);
    } else {
      setChecked(handelUnCheckItems);
    }

    return;
  };

  const handleAllCheck = () => {
    if (checked.length === MOCK_DATA.length) {
      setChecked([]);
    } else {
      setChecked(MOCK_DATA);
    }
  };

  useEffect(() => {
    fetch(MOCK_DATA, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setcartList(data.data);
      });
  }, []);

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
              <input
                type="checkbox"
                id="checkAll"
                className="formCheck"
                onChange={handleAllCheck}
                checked={checked.length === MOCK_DATA.length}
              />
            </div>
          </div>
          <div className="cartBody">
            <ul className="listArea">
              {MOCK_DATA &&
                MOCK_DATA.map(list => {
                  return (
                    <li className="listItem" key={list.id}>
                      <strong className="listTitle">{list.title}</strong>
                      <div className="listDetail">
                        <div className="detailArea">
                          <div className="formInput">
                            <label
                              htmlFor={`checkList${list.id}`}
                              className="formLabel blind"
                            >
                              <span>선택</span>
                            </label>
                            <input
                              type="checkbox"
                              id={`checkList${list.id}`}
                              className="formCheck"
                              onChange={() => handleChange(list)}
                              checked={checked.find(
                                item => item.id === list.id,
                              )}
                            />
                          </div>
                          <div className="detailInfo">
                            <div className="detailImage">
                              <img
                                src={list.image}
                                alt="만강에 비친 달 X 2병"
                              />
                            </div>
                            <div className="detailGroup">
                              <div className="detailTop">
                                <strong className="detailTitle">
                                  {list.name}
                                </strong>
                                <button type="button" className="btn btnClose">
                                  <span className="blind">닫기</span>
                                </button>
                              </div>
                              <div className="detailBottom">
                                <div className="detailControl">
                                  <button
                                    type="button"
                                    className="btn decrease"
                                  >
                                    <span className="blind">-</span>
                                  </button>
                                  <span className="controlText">
                                    {list.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    className="btn increase"
                                  >
                                    <span className="blind">+</span>
                                  </button>
                                </div>
                                <span className="detailPrice">
                                  {list.price}원
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="amountArea">
                          <dl className="amountList">
                            <dt>상품금액</dt>
                            <dd>{list.total_price}원</dd>
                          </dl>
                          <dl className="amountList">
                            <dt>배송비</dt>
                            <dd>3000원</dd>
                          </dl>
                          <dl className="amountList total">
                            <dt>총 금액</dt>
                            <dd>{list.total_price + 3000}원</dd>
                          </dl>
                        </div>
                      </div>
                    </li>
                  );
                })}
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

const MOCK_DATA = [
  {
    id: 1,
    title: '창작적',
    image: '/images/cart_sample.jpg',
    name: '답글 내용',
    quantity: 2,
    price: 34500,
  },
  {
    id: 2,
    title: '수집성',
    image: '/images/cart_sample.jpg',
    name: '답글 내용',
    quantity: 4,
    price: 34500,
  },
];
