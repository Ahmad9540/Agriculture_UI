import React from 'react';
import './ContactSection.css';


const ContactSection = () => {
  return (
    <div className="contact-wrapper d-flex">
      
      
      <div className="left-section d-flex">
        <img src="/assets/banner19.png" alt="Farmer" className="farmer-img" />

        <div className="contact-form-box">
          <p className="small-title">Have Questions?</p>
          <h2 className="form-heading">Send us a massage</h2>
          <form>
            <input type="text" className="form-control mb-2" placeholder="Name" />
            <div className="d-flex gap-2 mb-2">
              <input type="email" className="form-control" placeholder="Email*" />
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <textarea className="form-control mb-3" placeholder="Tell Us About Project *" rows="3"></textarea>
            <button className="btn btn-warning w-100">✉ Get In Touch</button>
          </form>
        </div>
      </div>

      
      <div className="right-section">
        <h3 className="info-title">
          Contact<span className="highlight">Information</span>
        </h3>
        <p className="info-desc">
          Plan upon yet way get cold spot this week. Almost do am or limits hearts. Resolve parties but why she shewing.
        </p>
        <div className="info-item">
          <strong>Hotline</strong><br />
          +4723378901
        </div>
        <div className="info-item">
          <strong>Our Location</strong><br />
          55 Main Street, The Grand Avenue 2nd Block,<br />
          New York City
        </div>
        <div className="info-item">
          <strong>Official Email</strong><br />
          info@ggral.com
        </div>
        <img src="/assets/banner20.png" alt="Plant" className="plant-img" />
      </div>
    </div>
  );
};

export default ContactSection;
