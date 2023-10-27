import React, { useState } from 'react';
import TabContent from '../TabContent/TabContent';
import TabList from '../TabList/TabList';
import TitleText from '../TitleText/TitleText';
import './Subscribe.scss';
import { Subscription } from '../Subscription';

const Subscribe = ({ handleSubScribe, setSubTypeParams }) => {
  const [activeSubType, setActiveSubType] = useState(Subscription[0].subType);

  const handleActive = option => {
    setActiveSubType(option);
  };

  const activeOption = Subscription.find(
    type => type.subType === activeSubType,
  );

  return (
    <div className="subscribe">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url('${activeOption.imgUrl}')`,
        }}
      >
        <div className="subContainer">
          <div className="content">
            <TitleText
              title={activeOption.title}
              subTitle={activeOption.subTitle}
            />
            <div className="subscribeBox">
              <div className="subscribeContainer">
                <div className="selectContainer">
                  {Subscription.map(type => (
                    <TabList
                      key={`select${type.subType}`}
                      name={type.name}
                      subType={type.subType}
                      handleActive={handleActive}
                      isActive={activeOption.subType === type.subType}
                      setSubTypeParams={setSubTypeParams}
                    />
                  ))}
                </div>
              </div>

              <div>
                <TabContent
                  title={activeOption.title}
                  price={activeOption.price}
                  description={activeOption.description}
                  handleSubScribe={handleSubScribe}
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
