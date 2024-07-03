import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Deal</span> Dazzle
              </li>
              <li>
                Discover a diverse selection of vehicles tailored to meet your
                driving needs. Find your perfect car among our wide range of
                options.
              </li>
              <li>
                <a href="tel:+971509750351">
                  <i className="fa-solid fa-phone"></i> &nbsp;
                  (+971)-509-750-351
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                khtabtoum@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; khtabtoum@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: '14px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  &copy; 2022 khtab 2-B . All rights reserved.
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Dubai</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
