import React from 'react'
import './footer.scss'
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="se">
          <div className="txt">
            <h1>
              Your Business Name Here
            </h1>
            <p>
              We are a business with a focus on providing high quality products and services. 
              Replace this text with a description of your business.
            </p>
            <div className="logos">
              <IoLogoInstagram className='log' />
              <FaWhatsapp className='log' />
              <CiFacebook className='log' />
              <CiLinkedin className='log'/>
            </div>
          </div>
        </div>
        <div className="se" style={{ margin: "-15px 0px" }}><h1 style={{ margin: "20px 0px" }}>Links</h1>
          <div className="links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="">Products</a>
            <a href="">Contact Us</a>
          </div></div>
        <div className="se" ><h1 >Contact</h1>
          <div className="adress">
            <p>Address:vaodara</p>
            <p>Phone: 9016538384</p>
            <p>Email:hridoy03102003@gmail.com</p>
          </div></div>
      </div>
      <div className="copyright">
        <p>Copyright @2024 Your Business Name Here. All Rights Reserved </p>
        <p>Site Developed by <a href="">Hridoy Sarkar</a></p>
      </div>
    </>
  )
}

export default Footer