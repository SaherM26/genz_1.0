import React from 'react';
import './Content.css';
import { MdPeopleAlt } from "react-icons/md";
import { RxLaptop } from "react-icons/rx";
import { LuArrowBigUp } from "react-icons/lu";

const Content = () => {
  return (
    <div className='quote'>
      <h2>Master everything, in one spot</h2>
      <h1>Build the career you've always dreamed of, with GEN-Z school by your side.</h1>
      <div className="keys">
        <div className="ellipse-container">
          <div className="ellipse left">
            <MdPeopleAlt className="icon" />
          </div>
          <p className="ellipse-text"> Quick Access</p>
          <p className="ellipse-para">
          Gain seamless access to<br/>
all essential resources to<br/>
enhance & accelerate learning
</p>

        </div>

        <div className="ellipse-container">
          <div className="ellipse center">
            <RxLaptop className="icon2" />
          </div>
          <p className="ellipse-text2">Effortless Learning</p>
          <p className="ellipse-para2">
  Learn at your own pace with<br />
  simple engaging methods that<br />
  make growth seamless
</p>
        </div>

        <div className="ellipse-container">
          <div className="ellipse right">
            <LuArrowBigUp className="icon3" />
          </div>
          <p className="ellipse-text3">Cost-Effective</p>
          <p className="ellipse-para3">
          Get smart, affordable solutions<br />
Save more, spend less wisely<br />
Achieve value effortlessly
</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
