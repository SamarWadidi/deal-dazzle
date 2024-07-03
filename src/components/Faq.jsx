import React from 'react';
import { useState } from 'react';

function Faq() {
  const [activeQ, setActiveQ] = useState('q1');

  const openQ = id => {
    setActiveQ(activeQ === id ? '' : id);
  };

  const getClassAnswer = id => {
    return activeQ === id ? 'active-answer' : '';
  };

  const getClassQuestion = id => {
    return activeQ === id ? 'active-question' : '';
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Discover answers to common inquiries about the car-selling
                process on our website. Find comprehensive information about the
                booking process and address any concerns or questions you may
                have.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ('q1')}
                  className={`faq-box__question  ${getClassQuestion('q1')}`}
                >
                  <p>
                    1. What makes comparing car deals special when shopping for
                    a cars?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ('q1')}
                  className={`faq-box__answer ${getClassAnswer('q1')}`}
                >
                  Comparing car deals is crucial as it allows you to discover
                  the ideal offer that aligns with your budget and preferences,
                  ensuring optimal value for your investment. By comparing
                  different options, you can find deals featuring competitive
                  prices, additional benefits, or superior car models.
                  Conducting online research and comparing prices from various
                  car-selling websites empowers you to uncover the best car
                  deals available in the market.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ('q2')}
                  className={`faq-box__question ${getClassQuestion('q2')}`}
                >
                  <p>
                    2. How can I discover car deals on a Deal Dazzle website?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ('q2')}
                  className={`faq-box__answer ${getClassAnswer('q2')}`}
                >
                  To find car deals on Deal Dazzle website, begin by conducting
                  online research and comparing prices from various sellers.
                  Explore popular websites like Cars.com, Autotrader, and
                  CarGurus to browse available options and compare prices.
                  Additionally, consider subscribing to email newsletters and
                  following car-selling companies on social media to stay
                  updated on exclusive deals and promotions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ('q3')}
                  className={`faq-box__question ${getClassQuestion('q3')}`}
                >
                  <p>
                    3. How can I find affordable prices for car purchases on a
                    Deal Dazzle?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ('q3')}
                  className={`faq-box__answer ${getClassAnswer('q3')}`}
                >
                  To find low car prices on a car-selling website, follow these
                  tips: Book in advance: Planning and booking your car purchase
                  in advance can often lead to lower prices. Look for discounts:
                  Keep an eye out for discount codes, promotions, and coupons
                  that can help reduce the price of your car purchase.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
