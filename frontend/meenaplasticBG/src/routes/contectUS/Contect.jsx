import React, { useState } from 'react';
import axios from 'axios';
import './contect.scss'
import Nevbar from '../../component/Nevbar/Nevbar';

axios.defaults.withCredentials = true; 

const Contact = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Massage, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('jwtToken'); 

      const response = await axios.post('http://localhost:5000/post', {
        Name,
        Email,
        Subject,
        Massage
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        console.log("Post created successfully");
      } else {
        console.error('Post creation failed:', response.data);
      }

    } catch (error) {
      console.error('Error during post creation:', error);
    }
  };

  return (
    <>
    <Nevbar/>
    <div className="contact-container">

     <div className="center">
     <div className="from">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={Subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={Massage}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      </div>

     <div className="compnydt">
     <div className="company-details">
        <h3>Company Details</h3>
        <p>Company Name: Your Company Name</p>
        <p>Address: 123 Your Street, Your City, Your Country</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@yourcompany.com</p>
      </div>

      <div className="map-location">
        <h3>Our Location</h3>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed30!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
     </div>
     </div>
    </div></>
  );
};

export default Contact;