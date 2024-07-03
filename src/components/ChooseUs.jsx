import React from 'react';
import MainImg from '../images/chooseUs/main.png';
import Box1 from '../images/chooseUs/icon1.png';
import Box2 from '../images/chooseUs/icon2.png';
import Box3 from '../images/chooseUs/icon3.png';

const ChooseUs = () => {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Uncover Unbeatable Deals</h2>
                <p>
                  Explore our store to find the most enticing offers you'll ever
                  come across. We are committed to delivering exceptional value,
                  ensuring you enjoy top-quality services and products without
                  straining your budget. Our deals are meticulously crafted to
                  provide you with the ultimate buying experience. Don't miss
                  out on the opportunity to save big.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Elevate Your Cross-Country Journey </h4>
                    <p>
                      Explore the road with our premium vehicles for an
                      unforgettable driving experience.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {' '}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Simplified Pricing</h4>
                    <p>
                      Experience the convenience of all-inclusive pricing,
                      providing you with transparency and everything you need in
                      one straightforward package.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {' '}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Transparent Pricing</h4>
                    <p>
                      Experience worry-free transactions with our commitment to
                      no hidden charges. We prioritize transparency and honesty
                      in our pricing policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
