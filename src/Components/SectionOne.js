import React from "react";
import profimage from "../Images/undraw_profile_image_re_ic2f.svg";
import image22 from "../Images/Illustration 2.svg";
import profile22 from "../Images/illustration one.svg";

const SectionOne = () => {
  return (
    <div className="sectionOne">
      <h2>Buy and sell your Cryptocurrency in 3 simple steps</h2>
      <div className="section-one-container">
        <div className="sect-box-1">
          <div className="number">
            <p>1</p>
          </div>
          <div className="other-texts">
            <h4>Create a free account</h4>
            <p>
              Sign up for your TradExpress Wallet on Web, ios, or Android
              devices and follow our easy process to set up your profile
            </p>
          </div>
        </div>
        <div className="image-side">
          <img width={210} src={profimage} alt="" />
        </div>
      </div>

      <div className="section-one-container add-margin-top">
        <div className="image-side">
          <img width={300} src={image22} alt="" />
        </div>

        <div className="sect-box-1">
          <div className="number">
            <p>2</p>
          </div>
          <div className="other-texts">
            <h4>Create a free account</h4>
            <p>
              Sign up for your TradExpress Wallet on Web, ios, or Android
              devices and follow our easy process to set up your profile
            </p>
          </div>
        </div>
      </div>

      <div className="section-one-container add-margin-top">
        <div className="sect-box-1">
          <div className="number">
            <p>3</p>
          </div>
          <div className="other-texts">
            <h4>Create a free account</h4>
            <p>
              Sign up for your TradExpress Wallet on Web, ios, or Android
              devices and follow our easy process to set up your profile
            </p>
          </div>
        </div>

        <div className="image-side">
          <img width={300} src={profile22} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
