// pages/CheckEmail.jsx - Fixed version with pending email usage
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import FormHeader from "../components/FormHeader";

function EmailConfirmation() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const [pendingEmail, setPendingEmail] = useState('');
  
  useEffect(() => {
    const pendingUserId = sessionStorage.getItem('pendingUserId');
    const storedEmail = sessionStorage.getItem('pendingUserEmail');
    
    if (!pendingUserId || !storedEmail) {
      navigate('/members/signup');
      return;
    }
    
    setPendingEmail(storedEmail);
    
    // Check if already confirmed in this session
    if (sessionStorage.getItem('emailConfirmed') === 'true') {
      navigate('/members/register');
      return;
    }
    
    // Poll to check if email has been confirmed
    const checkConfirmationStatus = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/users/${pendingUserId}`);
        const user = await response.json();
        
        if (user.confirmed === true) {
          // Email confirmed! Set the flag and redirect
          sessionStorage.setItem('emailConfirmed', 'true');
          setConfirmed(true);
          setChecking(false);
          
          // Redirect to create profile after 2 seconds
          setTimeout(() => {
            navigate('/create-profile');
          }, 2000);
        } else {
          setChecking(false);
        }
      } catch (error) {
        console.error("Error checking status:", error);
        setChecking(false);
      }
    };
    
    // Check immediately
    checkConfirmationStatus();
    
    // Set up polling every 10 seconds
    const interval = setInterval(() => {
      if (!confirmed) {
        checkConfirmationStatus();
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, [navigate, confirmed]);
  
  // Function to resend confirmation email
  const handleResendEmail = async () => {
    if (resending) return;
    
    setResending(true);
    setResendMessage('');
    
    try {
      const response = await fetch('http://localhost:1337/api/auth/send-email-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: pendingEmail
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResendMessage('✓ Confirmation email resent successfully! Please check your inbox.');
        // Reset the checking state to start polling again
        setChecking(true);
        setTimeout(() => {
          setResendMessage('');
        }, 5000);
      } else {
        throw new Error(data.error?.message || 'Failed to resend email');
      }
    } catch (error) {
      console.error('Resend error:', error);
      setResendMessage('❌ Failed to resend email. Please try again later.');
      setTimeout(() => {
        setResendMessage('');
      }, 5000);
    } finally {
      setResending(false);
    }
  };
  
  return (
    <>
      <FormHeader />
      <div className="check-email-container" style={{ textAlign: "center", padding: "50px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>✓ Check Your Email</h2>
        
        {confirmed ? (
          <div style={{ background: "#4CAF50", color: "white", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
            <h3>Email Confirmed! 🎉</h3>
            <p>Redirecting you to create your profile...</p>
          </div>
        ) : (
          <>
            <p>We've sent a confirmation link to <strong>{pendingEmail}</strong>.</p>
            
            <div style={{ background: "#e8f5e9", padding: "20px", borderRadius: "8px", margin: "30px 0" }}>
              <p><strong>📱 Works on any device!</strong></p>
              <ol style={{ textAlign: "left" }}>
                <li>Open the confirmation email on any device (PC, phone, tablet)</li>
                <li>Click the confirmation link inside the email</li>
                <li><strong>Return to this page on your original device</strong></li>
                <li>We'll detect the confirmation and redirect you automatically</li>
              </ol>
            </div>
            
            <div style={{ background: "#f0f0f0", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
              <p>🔄 Waiting for email confirmation...</p>
              {checking && <p>Checking status...</p>}
              <p style={{ fontSize: "12px", marginTop: "10px" }}>
                Auto-checking every 10 seconds
              </p>
            </div>
            
            {/* Resend email section */}
            <div style={{ marginTop: "30px", padding: "20px", borderTop: "1px solid #ddd" }}>
              <p>Didn't receive the email?</p>
              <button 
                onClick={handleResendEmail} 
                disabled={resending}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: resending ? "not-allowed" : "pointer",
                  opacity: resending ? 0.6 : 1
                }}
              >
                {resending ? "Sending..." : "Resend Confirmation Email"}
              </button>
              {resendMessage && (
                <p style={{ 
                  marginTop: "10px", 
                  color: resendMessage.includes('✓') ? "green" : "red",
                  fontSize: "14px"
                }}>
                  {resendMessage}
                </p>
              )}
            </div>
          </>
        )}
        
        <div style={{ marginTop: "20px" }}>
          <Link to="/">← Return to Home</Link>
        </div>
      </div>
    </>
  );
}

export default EmailConfirmation;