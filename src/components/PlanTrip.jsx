import React from 'react';
import SelectCar from '../images/plan/icon1.png';
import Contact from '../images/plan/icon2.png';
import Drive from '../images/plan/icon3.png';

const PlanTrip = () => {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Find your dream car now</h3>
              <h2>Quick & easy car purchase</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Choose Your Car</h3>
                <p>
                  Discover our extensive selection of vehicles tailored to suit
                  your driving requirements. Find the perfect car that matches
                  your needs and preferences.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Sales Team</h3>
                <p>
                  Our experienced and friendly sales team is available to assist
                  you with any inquiries or concerns you may have.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Own the Road</h3>
                <p>
                  Whether you're embarking on an adventure or simply seeking a
                  reliable ride, our diverse selection of cars ensures we have
                  the perfect one for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanTrip;
