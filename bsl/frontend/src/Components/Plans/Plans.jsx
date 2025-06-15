import React from 'react'
import './Plans.css';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
const Plans = () => {
  return (
    <div className="plan">
      <h1>Top picks from our plans</h1>
      <div className="plan-container">
        <div className="plan-box">Single Program
          <p>Learn a single topic or skill and earn a credentail</p>
          <h3>₹4,122-₹6,646 /month</h3>
          <p>Visit an individual course or Specialization page to purchase.</p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Easy Access</span>
          </p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Certification upon completion</span>
          </p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Job-relevant skills</span>
          </p>
        </div>
        <div className="plan-box">Multiple Program
          <p>Genz schoolPlus Monthly Complete multiple courses and earn credentials in the short term</p>
          <h3>₹4,963 /month</h3>
          <Link to="/trial">
            <button>Start 1 week free trial</button>
          </Link>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Access to 1000+ courses</span>
          </p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Free trial</span>
          </p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Doubt solving</span>
          </p>

        </div>
        <div className="plan-box">Annual Program
          <p>Combine flexibility and savings with long-term learning goals</p>
          <h3>₹33,568 /year</h3>
          <p>14-day money-back guarantee</p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Easy refund</span>
          </p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Specialised eduactors</span>
          </p>
          <p className="plan-feature">
            <TiTick className="tick-icon" />
            <span>Progress reports</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Plans
