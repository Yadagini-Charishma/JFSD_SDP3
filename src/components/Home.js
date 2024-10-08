import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling
import companyLogos from './companyLogos'; // Import an array of company logos

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Placement Portal</h1>
        <p>Your gateway to career opportunities with top companies.</p>
        {/* Removed the scroll down button */}
      </header>
      
      <section id="about-us" className="section about-us">
        <h2>About Us</h2>
        <p>This ia anplacement portal website is an online platform designed to streamline the job placement process for students, educational institutions, and employers. It features a comprehensive job listing database where students can search and apply for positions that match their skills and interests. The portal often includes tools for creating and managing resumes, tracking job applications, and preparing for interviews. It also provides access to career resources such as resume-building tools, interview tips, and skill development courses. Additionally, the site offers detailed company profiles, including job openings and company culture, allowing students to make informed decisions. Networking opportunities through forums and events facilitate connections with professionals and peers, while employers benefit from tools to post jobs, review candidates, and manage recruitment. Analytics and reporting features provide insights into placement trends and performance, enhancing the overall efficiency of the job placement process.
        </p>
        <img src="about-us-image.jpg" alt="About Us" className="about-us-image" />
      </section>
      
      <section id="services" className="section services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="service1-icon.png" alt="Service 1" />
            <h3>Application Tracking</h3>
            <p>Features that allow students and institutions to track the status of job applications, including whether an application has been viewed or if an interview has been scheduled.</p>
          </div>
          <div className="service-card">
            <img src="service2-icon.png" alt="Service 2" />
            <h3>Placement Reports and Analytics</h3>
            <p>Data and insights on placement trends, success rates, and the performance of students and institutions, which can help in understanding job market dynamics.</p>
          </div>
          <div className="service-card">
            <img src="service3-icon.png" alt="Service 3" />
            <h3>Customizable Dashboards</h3>
            <p>Personalized dashboards for students, institutions, and employers to manage their profiles, applications, and interactions effectively.</p>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </section>
      
      <section id="companies" className="section companies">
        <h2>Our Partner Companies</h2>
        <div className="company-logos">
          {companyLogos.map((logo, index) => (
            <img key={index} src={logo} alt="Company Logo" className="company-logo" />
          ))}
        </div>
      </section>
      
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>For more information, please reach out to us at:</p>
        <p>Email: contact@placementportal.com</p>
        <p>Phone: +123 456 7890</p>
      </section>
      
      <footer className="home-footer">
        <p>&copy; 2024 Placement Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
