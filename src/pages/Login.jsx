import { useState } from "react"
import { api } from "../api";
import FormHeader from "./../components/FormHeader";
import { Link } from "react-router-dom";
const STRAPI_URI = import.meta.env.VITE_STRAPI_URI; 

function Login() {
  
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log("Password attempt:", {identifier, password,});
    
    try {
      //  Step 1: Login
      const response = await api.post(`/auth/local`, {
        identifier: identifier, // email or username
        password: password,
      });
      
      console.log(identifier, password);
      console.log(response.data.user);


      const jwt = response.data.jwt;
      localStorage.setItem('jwt', jwt);
      console.log(jwt);
      
      //  Step 2: Get user data with member profile (use GET, not POST)
      // Step 2: Get user data with member profile
const token = localStorage.getItem('jwt');
const userData = await fetch(`${STRAPI_URI}/auth/me`, {
    method: 'GET',
    headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});
const data = await userData.json();  // ← Fixed: use userData.json()
console.log('Data from fetch: ', data);

// Step 3: Redirect based on onboarding status
if (!data.member?.isOnboarded) {  // ← Fixed: use data, not userData.data
    window.location.href = '/onboarding';
} else {
    window.location.href = '/dashboard';
}
      
    } catch (error) {
       console.error('❌ Login error:', error.response?.data);
        console.error('Status:', error.response?.status);
        console.error('Message:', error.response?.data?.error?.message);
        setError(error.response?.data?.error?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  
  return(
    <>
    <FormHeader />
    <form className="form-signup" onSubmit={handleLogin}>
      <div className="form-header">
        <img className="form-logo" src="pngwsa.png" alt="pngwsa logo" />
        <h2>Login</h2>
        <p>Enter your email and password to login to your account</p>
      </div>
      <div className="form-element">
        <label>Email or Username:</label> {/* ✅ Changed to Email or Username */}
        <input 
          type="text"
          name="identifier" 
          required
          value={identifier} 
          onChange={(e) => setIdentifier(e.target.value)} 
        />
      </div>
      <div className="form-element">
        <label>Password:</label>
        <input 
          value={password}
          type="password" 
          name="password" 
          required
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <div className="form-element">
        {error && <p className="error">{error}</p>}
      </div>
      <div className="form-element">
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </div>
      <div className="form-element">
        <p>Don't have an account? <Link to="/account">Sign Up Now</Link></p>
        <p><a href="/reset-password">Reset password</a></p>
      </div>
    </form>
    </>
  )
}

export default Login;