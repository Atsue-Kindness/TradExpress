import React from "react";
import "../App.css";
import quote from "../Images/quotation mark.svg";
import person from "../Images/photo.jpg";
import arrow from "../Images/arrow.svg";

const Testimonial = () => {
  return (
    <div className="test-mag">
      <div className="testimonial-sect">
        <h2>Customers Review</h2>
        <div className="testimonial-container">
          <div className="test-box-one">
            <div className="quotess">
              <img src={quote} alt="" />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate
              </p>
            </div>
            <img width={50} src={arrow} alt="" className="quote-arrow" />

            <div className="person">
              <img width={80} src={person} alt="" className="persons" />
              <div>
                <h5>Ireti</h5>
                <p>Nigeria</p>
              </div>
            </div>
          </div>

          <div className="test-box-one">
            <div className="quotess">
              <img src={quote} alt="" />
              <p>
                They have the best rate compared to other platforms with fast
                payout.
              </p>
            </div>
            <img width={50} src={arrow} alt="" className="quote-arrow" />

            <div className="person">
              <img width={80} src={person} alt="" className="persons" />
              <div>
                <h5>Bayo</h5>
                <p>USA</p>
              </div>
            </div>
          </div>

          <div className="test-box-one">
            <div className="quotess">
              <img src={quote} alt="" />
              <p>
                Easy to fund and withdraw coins or cash on their platform, I
                will definitely trade with them again.
              </p>
            </div>
            <img width={50} src={arrow} alt="" className="quote-arrow" />

            <div className="person">
              <img width={80} src={person} alt="" className="persons" />
              <div>
                <h5>Olagoke</h5>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
