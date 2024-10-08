import React, { useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ContactUs.css';

const mapStyles = {
  height: "60vh",  // Fixed height to fit within one page
  width: "100%"
};

const defaultCenter = {
  lat: 12.8717, // Latitude for Jyothy Institute of Technology
  lng: 77.5150  // Longitude for Jyothy Institute of Technology
}

function ContactUs() {
  const contactSectionRef = useRef(null);

  // Smooth scroll to contact section when map is clicked
  useEffect(() => {
    const handleScrollToContact = () => {
      if (contactSectionRef.current) {
        contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.getElementById('contactSection').addEventListener('click', handleScrollToContact);

    return () => {
      document.getElementById('contactSection').removeEventListener('click', handleScrollToContact);
    };
  }, []);

  return (
    <div className="smooth-scroll">
      {/* Title Section */}
      <div className="title-section">
        <h1>Contact Us</h1>
        <h2>Jyothy Institute of Technology</h2>
      </div>

      {/* Resized Map */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerClassName="resized-map"
          zoom={15}
          center={defaultCenter}
          onClick={() => contactSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>

      {/* Contact Section */}
      <div ref={contactSectionRef} id="contactSection" className="contact-container">
        {/* Left side: Contact Information */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <h3>Placement Cell</h3>
          <p><strong>Location:</strong> Jyothy Institute of Technology, Pipeline Rd, near Ravi Shankar Guruji Ashram, Thathaguni, Karnataka 560082</p>
          <p><strong>Email:</strong> <a href="mailto:rekha.kv.placement@jyothyit.ac.in">rekha.kv.placement@jyothyit.ac.in</a></p>
          <p><strong>Call:</strong> <a href="tel:+919742859408">97428 59408</a></p>
        </div>

        {/* Right side: Contact Form */}
        <div className="contact-form">
          <form>
            <div className="contact-form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" required className="full-width" />
            <textarea name="message" placeholder="Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
