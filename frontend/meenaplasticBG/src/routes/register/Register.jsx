import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import './register.scss'
import Nevbar from '../../component/Nevbar/Nevbar';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const [name, setName] = useState(''); 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password,
   
      });

      if (response.status === 201) {
        navigate('/login'); 
      } else {
        console.error('Registration failed:', response.data); 
      }
    } catch (error) {
      console.error('Error during registration:', error); 
    }
  };
  
  return (
    <>
    <Nevbar/>
     <div className="sinup">
    <div className="left">
    <form   onSubmit={handleSignup} className="the">
        <div className="header"><h2>Create an Account</h2></div>
        <div className="input">
        <input type='text' name='username'onChange={(e) => setName(e.target.value)} placeholder='username'/>
        <input type='email' name='email'   onChange={(e) => setEmail(e.target.value)}placeholder='email'/>
        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        </div>
        <div className="button">
            <button>Register</button>
            {/* {
              err && <span style={{color:"red"}}>{err}</span>
            } */}
            <a href='/Login'>Do you have an account?</a>
        </div>
        </form>

    </div>
    <div className="right">
      <p>Hii,use your email for registeration</p>
    </div>
   </div>
    </>
  )
}

export default Register