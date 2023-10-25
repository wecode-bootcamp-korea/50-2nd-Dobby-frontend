import React, { useState } from 'react';
import './Main.scss';

import Description from './components/Description';
import SelectBtn from './components/SelectBtn';
import SubscribeContent from './components/SubscribeContent';

const Main = () => {
  const [activeColor, setActiveColor] = useState('blue');

  const handleActive = color => {
    setActiveColor(color);
  };

  const handleActiveSub = active => {
    if (active === 'blue') {
      return (
        <SubscribeContent
          title="blue"
          price="52,000"
          description="인고의 시간 끝에 술을 맑게 걸러 탄생한 귀한 약청주, 깨끗함에 그윽이 배어있는 깊은 맛을 경험해 보세요."
        />
      );
    } else if (active === 'green') {
      return (
        <SubscribeContent
          title="green"
          price="42,000"
          description="green 구독에 대한 설명을 적는 란."
        />
      );
    } else if (active === 'red') {
      return (
        <SubscribeContent
          title="red"
          price="12,000"
          description="red 구독에 대한 설명을 적는 란."
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="backgroundImage">
          <div className="subContainer">
            <div className="content">
              <Description
                title="2023년 11월의 약청주 담화박스"
                description="맑은 술의 원조, 약주로만 구성된 담화박스"
              />

              <div className="subscribeBox">
                <div className="subscribeContainer">
                  <div className="selectContainer">
                    <SelectBtn
                      text="종합"
                      color="blue"
                      handleActive={handleActive}
                      isActive={activeColor === 'blue'}
                    />
                    <SelectBtn
                      text="창작적"
                      color="green"
                      handleActive={handleActive}
                      isActive={activeColor === 'green'}
                    />
                    <SelectBtn
                      text="수집성"
                      color="red"
                      handleActive={handleActive}
                      isActive={activeColor === 'red'}
                    />
                  </div>

                  <div>{handleActiveSub(activeColor)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
