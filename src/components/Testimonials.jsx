import React from 'react';
import Img2 from '../images/testimonials/pfp1.jpg';
import Img3 from '../images/testimonials/pfp2.jpg';

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Customer Reviews</h4>
              <h2>Hear from Satisfied Clients</h2>
              <p>
                Gain insights into the positive impact we've had on our clients
                by exploring their testimonials. Our valued customers have
                shared their experiences, highlighting the exceptional service
                and results they've enjoyed. Read their testimonials and
                discover the satisfaction they've experienced firsthand.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Seamless and Affordable Car Buying Experience! I had an
                  exceptional time purchasing a car from this website. The
                  process was effortless, and the prices were incredibly
                  reasonable. Highly recommended! "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Samar Mohammed</h4>
                      <p>Sudan</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  " The car was in excellent condition and enhanced our trip
                  significantly. Highly recommend this Deal Dazzle website for
                  an exceptional experience! "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Osama Tom</h4>
                      <p>Sudan</p>
                    </span>
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

export default Testimonials;
