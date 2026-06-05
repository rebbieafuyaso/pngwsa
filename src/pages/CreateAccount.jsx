import { useState } from "react"
import { api } from "../api";
import FormHeader from "../components/FormHeader";
import './form.css';
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    verificationCode: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post(`/auth/complete-registration`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        code: formData.verificationCode
      });
      console.log("Account created successfully...", res.data);
      
      // IMPORTANT: Store user ID and email for the check email page
      sessionStorage.setItem('pendingUserId', res.data.user.id);
      sessionStorage.setItem('pendingUserEmail', formData.email);
      setError('');
      setFormData({
        username: "",
        email: "",
        password: "",
        verificationCode: "",
      });
    } catch (error) {
      setError(error.response?.data?.error?.message || error.message || 'Registration Failed!');
      console.error("Error: ", error);
    } finally {
      setLoading(false);
      navigate('/confirmation-page');
    }
  }
  //Deal with existing usernames
  //Get code here
  const handleGetCode = async () => {
    try {
      const response = api.post('auth/register', {email: formData.email} );
      console.log(response?.data);
    setCodeSent(true);
    alert('Verification code sent...');
    } catch (error) {
      console.log(error);
      alert("Failed to send code...");
    }
  };

  return(
    <>
      <FormHeader />
      <form className="form-signup" onSubmit={handleSubmit}>
        <div className="form-header">
          <img className="form-logo" src="/pngwsa.png" alt="pngwsa logo" /> 
          <h2>Register</h2>
          <p>Fill in your details as precise as possible, avoid any irrelevant information.</p>
        </div>
        
        <div className="form-element">
          <label>Fullname:</label>
          <input
            autoComplete="off"
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            placeholder="i.e Joe Bloe"
            required
          />
        </div>
        
        <div className="form-element">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="someone@example.com"
          />
          <div className="email-section">
            <div className="input-container">
            <input 
            name="verificationCode"
            onChange={handleChange}
            value={formData.verificationCode}
            type="text"
            maxLength={6}
            required 
            placeholder="Enter verification Code"
            />
            <button 
          type="button" 
          onClick={handleGetCode}
          className="code-box"
          >Get Code</button>
            </div>
          </div>
        </div>
        
        <div className="form-element">
          <label>Password:</label>
          <input 
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            placeholder="Test#1234"
          />
          <div className="password-requirements">
            <p><b>Password requirements:</b></p>
          <ul className="form-list">
            <li>Atleast one capital letter</li>
            <li>Include number</li>
            <li>One special character</li>
            <li>More than 8 characters</li>
          </ul>
          </div>
        </div>
        
        <div className="form-element">
          <button disabled={loading} type="submit">
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </div>
        <div>
          <p>Need help? <a href="#">Contact Us</a></p>
        </div>
      </form>

    </>
  )
}

export default CreateAccount;