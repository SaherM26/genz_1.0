import React from 'react'
import './Trial.css';
import trial from '../../Components/Assets/trial.jpg';
import { FaBookOpen, FaUnlock, FaClock, FaTimesCircle } from "react-icons/fa";
const Trial = () => {
  return (
    <div className='trial'>
    <div className="trial-image-wrapper">
      <img src={trial} alt="trial" className="trial-image" />
      <div className="trial-overlay-box">
        <h1>Achieve your career goals with Genz school</h1>
        <p>Subscribe to build job-ready skills from world-class institutions.</p>
        <h3>₹5,140/month, cancel anytime</h3>
        <button className="trial-button">Start 1 week free trial</button>
        <p className="extra-text">Learn from top industry experts and experienced educators</p>
        <p className="extra-text">Or ₹5000/ yearly with 14 days money-back guarantee.</p>
      </div>
    </div>
    <div className="trial-info-box">
  <h2>Invest in your career</h2>
  <p className="subtext">
    82% of learners say they achieved career growth, such as securing a new job, earning a raise, developing in-demand skills, and more
  </p>
  <div className="trial-features">
    <p><FaBookOpen className="trial-icon" /> Choose Any Course – Explore a wide range of subjects that interest you.</p>
    <p><FaUnlock className="trial-icon" /> Full Access – Enjoy all classes, videos, and resources without restrictions.</p>
    <p><FaClock className="trial-icon" /> Learn at Your Pace – Study anytime, anywhere with flexible learning options.</p>
    <p><FaTimesCircle className="trial-icon" /> No Commitment – Cancel anytime within the trial period with no charges.</p>
  </div>
</div>
<section className="contact-section">
  <div className="contact-container">
    <h2>Get in Touch with GENZ School</h2>
    <p className="contact-subtext">
      We're here to help! Whether you have questions about our courses, pricing, partnerships, or just want to say hello, feel free to reach out.
    </p>

    <div className="contact-details">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> support@genzschool.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Location:</strong> 2nd Floor, EduTech Park, Delhi - 110093</p>
        <p><strong>Business Hours:</strong> Mon–Sat, 9 AM – 6 PM</p>
      </div>

      <form className="contact-form">
        <h3>Send us a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</section>

  </div>
  )
}

export default Trial
