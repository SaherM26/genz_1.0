
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
     
      <div className='footer-content'>
       
        <div className='footer-section'>
          <h3>GEN-Z School</h3>
          <ul>
            <li><a href='/what-we-offer'>What We Offer</a></li>
            <li><a href='/leader'>Leader</a></li>
            <li><a href='/partners'>Partners</a></li>
          </ul>
        </div>

   
        <div className='footer-section'>
          <h3>Community</h3>
          <ul>
            <li><a href='/webinars'>Webinars</a></li>
                     <li><a href='/Leaders'>Leaders</a></li>
           <li><a href='/Partners'>Partners</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>More</h3>
          <ul>
            <li><a href='/help'>Help</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/terms'>Terms</a></li>
          </ul>
        </div>
      </div>

    
      <div className='footer-line'></div>

    
      <div className='footer-bottom'>
      
        <p className='footer-copyright'>© 2025 GEN-Z School Inc. All rights reserved.</p>

    
        <div className='footer-social'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <FaFacebookF />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <FaTwitter />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <FaYoutube />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <FaLinkedinIn />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
