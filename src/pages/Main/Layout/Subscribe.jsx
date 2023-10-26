import React, { useState } from 'react';
import TabContent from './TabContent/TabContent';
import TabList from './TabList/TabList';
import TitleText from './TitleText/TitleText';
import './Subscribe.scss';
import { subscription } from './subscription';

const Subscribe = () => {
  const [activeColor, setActiveColor] = useState(subscription[0].color);

  const handleActive = color => {
    setActiveColor(color);
  };

  const activeSub = subscription.find(type => type.color === activeColor);

  return (
    <div className="subscribe">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url('${activeSub.imgUrl}')`,
        }}
      >
        <div className="subContainer">
          <div className="content">
            <TitleText title={activeSub.title} subTitle={activeSub.subTitle} />
            <div className="subscribeBox">
              <div className="subscribeContainer">
                <div className="selectContainer">
                  {subscription.map(type => (
                    <TabList
                      key={type.color}
                      text={type.title}
                      color={type.color}
                      handleActive={handleActive}
                      isActive={activeColor === type.color}
                    />
                  ))}
                </div>
              </div>

              <div>
                <TabContent
                  title={activeSub.title}
                  price={activeSub.price}
                  description={activeSub.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
