import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [cartList, setCartList] = useState([]);
  const navigate = useNavigate();

  const getCartList = () => {
    fetch('/data/data.json', {
      // fetch('http://10.58.52.239:8000/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpa2VMaW9uODI4MkB3ZWNvZGUuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTgxNjg3NTV9.8tjgbmwn2u7LeYuTKTjr3ZhTA1p5l0Nja5kUEs3yki4',
      },
    })
      .then(res => res.json())
      .then(data => {
        // setCartList(data.data);
        setCartList(data);
      });
  };

  useEffect(() => {
    getCartList();
  }, []);

  const deleteItem = id => {
    fetch(`http://10.58.52.239:8000/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpa2VMaW9uODI4MkB3ZWNvZGUuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTgxNjg3NTV9.8tjgbmwn2u7LeYuTKTjr3ZhTA1p5l0Nja5kUEs3yki4',
      },
    }).then(res => {
      if (res.ok) {
        getCartList();
      } else {
        alert('에러가 발생했습니다.');
      }
    });
  };

  const handleQuantity = (isPlus, productId) => {
    if (
      !isPlus &&
      cartList.find(({ product_id }) => product_id === productId).quantity <= 1
    )
      return;

    fetch(
      `http://10.58.52.239:8000/cart/${
        isPlus ? 'increase' : 'decrease'
      }/${productId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpa2VMaW9uODI4MkB3ZWNvZGUuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTgxNjg3NTV9.8tjgbmwn2u7LeYuTKTjr3ZhTA1p5l0Nja5kUEs3yki4',
        },
        body: JSON.stringify({
          quantityDifference: isPlus ? '+' : '-',
        }),
      },
    ).then(res => {
      if (res.ok) {
        getCartList();
      } else {
        alert('에러가 발생했습니다.');
      }
    });
  };

  const sendClick = () => {
    fetch('http://10.58.52.67:8000/cart/payment', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        product_id: cartList.id,
        quantity: cartList.quantity,
      }),
    }).then(res => {
      if (res.ok) {
        navigate('/payment');
      } else {
        alert('에러가 발생했습니다.');
      }
    });
  };

  const handleChange = list => {
    const isChecked = checkedItems.some(item => item.id === list.id);
    const handelUnCheckItems = checkedItems.filter(item => item.id !== list.id);

    if (!isChecked) {
      setCheckedItems([...checkedItems, list]);
    } else {
      setCheckedItems(handelUnCheckItems);
    }
  };

  const handleAllCheck = () => {
    if (checkedItems.length === cartList.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems(cartList);
    }
  };

  const sumPrice = cartList
    .map(list => list.total_price)
    .reduce((a, b) => a + b, 0);

  // 배송비 구하기 어렵습니다...
  // const deliveryCharge = cartList.map(list => {
  //   return list.total_price < 50000 ? 3000 : 0;
  // });

  const sumDeliveryCharge = cartList
    .map(list => list.total_price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="cart">
      <div className="cartArea">
        <form className="formArea">
          <div className="cartHeader">
            <div className="formInput">
              <label htmlFor="checkAll" className="formLabel">
                <span>모두 선택</span>
                <span>
                  ({checkedItems.length}/{cartList.length})
                </span>
              </label>
              <input
                type="checkbox"
                id="checkAll"
                className="formCheck"
                onChange={handleAllCheck}
                checked={
                  checkedItems.length === cartList.length &&
                  cartList.length !== 0
                }
              />
            </div>
          </div>
          <div className="cartBody">
            <ul className="listArea">
              {cartList.map(list => {
                const {
                  id,
                  title,
                  image,
                  name,
                  product_id,
                  quantity,
                  total_price,
                } = list;
                const deliveryCharge = total_price < 50000 ? 3000 : 0;

                return (
                  <li className="listItem" key={id}>
                    <strong className="listTitle">{title}</strong>
                    <div className="listDetail">
                      <div className="detailArea">
                        <div className="formInput">
                          <label
                            htmlFor={`checkList${id}`}
                            className="formLabel blind"
                          >
                            <span>선택</span>
                          </label>
                          <input
                            type="checkbox"
                            id={`checkList${id}`}
                            className="formCheck"
                            onChange={() => handleChange(list)}
                            checked={checkedItems.find(item => item.id === id)}
                          />
                        </div>
                        <div className="detailInfo">
                          <div className="detailImage">
                            <img src={image} alt="만강에 비친 달 X 2병" />
                          </div>
                          <div className="detailGroup">
                            <div className="detailTop">
                              <strong className="detailTitle">{name}</strong>
                              <button
                                type="button"
                                className="btn btnClose"
                                onClick={() => deleteItem(id)}
                              >
                                <span className="blind">닫기</span>
                              </button>
                            </div>
                            <div className="detailBottom">
                              <div className="detailControl">
                                <button
                                  type="button"
                                  className="btn decrease"
                                  onClick={() =>
                                    handleQuantity(false, product_id)
                                  }
                                >
                                  <span className="blind">-</span>
                                </button>
                                <span className="controlText">{quantity}</span>
                                <button
                                  type="button"
                                  className="btn increase"
                                  onClick={() =>
                                    handleQuantity(true, product_id)
                                  }
                                >
                                  <span className="blind">+</span>
                                </button>
                              </div>
                              <span className="detailPrice">
                                {total_price}원
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="amountArea">
                        <dl className="amountList">
                          <dt>상품금액</dt>
                          <dd>{total_price}원</dd>
                        </dl>
                        <dl className="amountList">
                          <dt>배송비</dt>
                          <dd>{deliveryCharge}원</dd>
                        </dl>
                        <dl className="amountList total">
                          <dt>총 금액</dt>
                          <dd>{total_price + deliveryCharge}원</dd>
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
                <dd>{sumPrice}원</dd>
              </dl>
              <dl className="billList">
                <dt>총 배송비</dt>
                <dd>{sumDeliveryCharge}원</dd>
              </dl>
              <dl className="billList total">
                <dt>총 결제 예상 금액</dt>
                <dd>0원</dd>
              </dl>
            </div>
          </div>
          <div className="btnArea">
            <button
              type="button"
              className="btn btnPrimary"
              onClick={sendClick}
            >
              <span>구매하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
