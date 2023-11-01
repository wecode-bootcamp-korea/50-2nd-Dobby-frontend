import React from 'react';
import { useSearchParams } from 'react-router-dom';
import TabContent from '../TabContent/TabContent';
import TabList from '../TabList/TabList';
import TitleText from '../TitleText/TitleText';
import { subscription } from '../subscription';
import './Subscribe.scss';

const Subscribe = ({ handleSubScribe, setSubTypeParams }) => {
  const [searchParams] = useSearchParams();

  const activeSubType = searchParams.get('dobbyBox');

  const activeOption =
    subscription.find(type => type.subType === activeSubType) || {};

  const noneOption =
    'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?auto=format&fit=crop&q=80&w=2907&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="subscribe">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: activeOption.imgUrl
            ? `url('${activeOption.imgUrl}')`
            : `url('${noneOption})`,
        }}
      >
        <div className="backgroundDark" />
        <div className="subContainer">
          <div className="content">
            <TitleText
              title={activeOption.title ? activeOption.title : 'DIY의 모든 것'}
              subTitle={
                activeOption.subTitle ? activeOption.subTitle : `DOBBY STORE`
              }
            />
            <div className="subscribeBox">
              <div className="subscribeContainer">
                <div className="selectContainer">
                  {subscription.map(type => (
                    <TabList
                      key={`${type.id}subscription`}
                      name={type.name}
                      subType={type.subType}
                      isActive={activeOption.subType === type.subType}
                      setSubTypeParams={() => setSubTypeParams(type.subType)}
                    />
                  ))}
                </div>
              </div>
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
  );
};

export default Subscribe;
