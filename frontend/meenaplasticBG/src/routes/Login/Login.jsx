import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Nevbar from '../../component/Nevbar/Nevbar';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:5000/login', {
        
        email,
        password,
        
      });

      if (response) {
        navigate('/'); 
      } 
      else {
        navigate('/register'); 
       
       
      }
    } catch (error) {
      console.error('Error during registration:', error);
      navigate('/register'); 
        
    }
  };
  return (
   <>
 <Nevbar/>
     <div className="sinup">
    <div className="left">
    <form onSubmit={handleLogin}  className="the">
        <div className="header"><h2>Create an Account</h2></div>
        <div className="input">
       
        <input type='email' onChange={(e) => setEmail(e.target.value)} name='email' placeholder='email'/>
        <input type='password' onChange={(e) => setPassword(e.target.value)} name='password' placeholder='password'/>
        </div>
        <div className="button">
            <button >Login</button>
            {/* {
              err && <span style={{color:"red"}}>{err}</span>
            } */}
            <a href='/register'>Do not have an account?</a>
        </div>
        </form>

    </div>
    <div className="right">
      <p>Wealcome back user,please login before using</p>
    </div>
   </div>
   </>
  )
}

export default Login