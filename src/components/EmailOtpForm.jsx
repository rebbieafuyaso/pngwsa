/* eslint-disable no-undef */
import { useState } from "react";
import axios from 'axios';
import './forms.css';

function EmailOtpForm() {
  const [email, setEmail] = useState('');
  const [timer, setTimer] = useState(30);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

    //Call backend here..(Generate OTP)
    const sendOTP = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/otp/send-otp',
          {email}
        );
        alert(res.data.message);
      } catch (e) {
        console.error('Error: ', e);
      }
    }
    const verifyOtp = async () => {
      try {
        const res = axios.post('http://localhost:5000/',
          {
            email, 
            otp,
          }
        );
        alert(res.data.message);
      } catch (e) {
        console.error('Error: ', e);
      }
  }
  const onOtpSubmit = (otp) => {
    console.log('Successful logging...', otp);
  }
  return(
    <>
    <div>
        <div className="form-heading">
        <h2>Sign Up</h2>
        <p>Sign up and become a member of PNG Wuhan Students Association embark your journey in China.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h4>OTP Verification</h4>
        <label>Enter Email:</label>
      <div className="form-element flex-box">
        <input
        type="email" 
        required 
        placeholder="joeblow@example.com"
        value={email}
        onChange={handleEmail}
        />
        <button type="submit" className="btn" onClick={sendOTP}>Get OTP</button>
        </div>
        <div className="form-element">
          <input name='otp' type="text" placeholder="Enter OTP here..." />
          <br />
          <button type="submit" onClick={verifyOtp}>Verify OTP</button>
        </div>
      </form> 
      </div> 
    </>
  )
}
export default EmailOtpForm;