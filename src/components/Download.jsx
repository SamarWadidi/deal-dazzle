import React from 'react';
import Img1 from '../images/download/appstore.svg';
import Img2 from '../images/download/googleapp.svg';

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app</h2>
            <p>
              Elevate your experience with our app and unlock exclusive
              benefits. Download now for a seamless and personalized car-selling
              journey.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
