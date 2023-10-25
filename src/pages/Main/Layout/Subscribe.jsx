import React, { useState } from 'react';
import TabContent from '../../../components/TabContent/TabContent';
import TabList from '../../../components/TabList/TabList';
import TitleText from '../../../components/TitleText/TitleText';
import './Subscribe.scss';
import { SUBSCRIPTION } from './SUBSCRIPTION';

const Subscribe = () => {
  const [activeColor, setActiveColor] = useState(SUBSCRIPTION[0].color);

  const handleActive = color => {
    setActiveColor(color);
  };

  const activeSub = SUBSCRIPTION.find(type => type.color === activeColor);

  return (
    <div className="subscribe">
      <div className="container">
        <div
          className="backgroundImage"
          style={{
            backgroundImage: `url('${activeSub.imgUrl}')`,
          }}
        >
          <div className="subContainer">
            <div className="content">
              <TitleText
                title={activeSub.title}
                subTitle={activeSub.subTitle}
              />
              <div className="subscribeBox">
                <div className="subscribeContainer">
                  <div className="selectContainer">
                    {SUBSCRIPTION.map(type => (
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
    </div>
  );
};

export default Subscribe;
