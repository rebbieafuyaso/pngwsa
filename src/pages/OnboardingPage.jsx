import { useState } from "react";
import { api } from "../api";
import './form.css';
import FormHeader from "./../components/FormHeader";

function OnboardingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    province: "",
    avatar: null,
    university: "",
    major: "",
    graduateLevel: "",
    expectedGradYear: "",
    phone: "",
    whatsappNumber: "",
    wechatId: "",
    wechatQr: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      // ✅ CORRECT: Store file object for file inputs, value for everything else
      [name]: type === "file" ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // ✅ CORRECT: Single JWT check at the top — no duplicate declarations
    // ❌ WRONG before: jwt was declared twice, second one shadowed the first
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
      setError("You must be logged in");
      setLoading(false); // ✅ Always reset loading on early return
      window.location.href = "/login";
      return;
    }

    try {
      const submitData = new FormData();

      // ✅ Append all text fields (skip file fields and empty values)
      Object.keys(formData).forEach(key => {
        if (key !== 'avatar' && key !== 'wechatQr' && formData[key] !== "" && formData[key] !== null) {
          submitData.append(key, formData[key]);
        }
      });

      // ✅ Append files separately
      if (formData.avatar) submitData.append('avatar', formData.avatar);
      if (formData.wechatQr) submitData.append('wechatQr', formData.wechatQr);

      // ✅ CORRECT: Do NOT set Content-Type manually for FormData
      // ❌ WRONG before: 'Content-Type': 'multipart/form-data' was manually set
      // The browser MUST set it automatically to include the boundary string
      // Without the boundary the server can't parse the request body → causes 400/401
      const response = await api.put('/auth/onboarding', submitData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          // ✅ No Content-Type here — let browser handle it
        }
      });

      console.log('Onboarding response:', response);
      setSuccess("Profile completed successfully!");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);

    } catch (err) {
      console.error("Onboarding error:", err);
      setError(err.response?.data?.error?.message || "Failed to complete profile");
    } finally {
      // ✅ CORRECT: finally always runs — loading always resets
      // ❌ WRONG before: early return before try block skipped setLoading(false)
      setLoading(false);
    }
  };

  return (
    <>
      <FormHeader />
      <form className="form-signup" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Complete Your Profile</h2>
          <p>Tell us more about yourself to get started</p>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        {/* Personal Information */}
        <div className="form-section">
          <h3>Personal Information</h3>

          <div className="form-element">
            <label>Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="form-element">
            <label>Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </div>

          <div className="form-element">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-element">
            <label>Province</label>
            <input type="text" name="province" value={formData.province} onChange={handleChange} placeholder="e.g., National Capital District" />
          </div>

          <div className="form-element">
            <label>Profile Picture</label>
            <input type="file" name="avatar" accept="image/*" onChange={handleChange} />
          </div>
        </div>

        {/* Education */}
        <div className="form-section">
          <h3>Education Information</h3>

          <div className="form-element">
            <label>University *</label>
            <input type="text" name="university" value={formData.university} onChange={handleChange} required placeholder="e.g., Wuhan University" />
          </div>

          <div className="form-element">
            <label>Major / Course *</label>
            <input type="text" name="major" value={formData.major} onChange={handleChange} required placeholder="e.g., Computer Science" />
          </div>

          <div className="form-element">
            <label>Graduate Level</label>
            <select name="graduateLevel" value={formData.graduateLevel} onChange={handleChange}>
              <option value="">Select Level</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Master">Master</option>
              <option value="Doctrate or PhD">Doctrate or PhD</option>
              <option value="Exchange">Exchange Student</option>
            </select>
          </div>

          <div className="form-element">
            <label>Expected Graduation Year</label>
            <input type="text" name="expectedGradYear" value={formData.expectedGradYear} onChange={handleChange} placeholder="e.g. 2026" min="2026" max="2037" />
          </div>
        </div>

        {/* Contact */}
        <div className="form-section">
          <h3>Contact Information</h3>

          <div className="form-element">
            <label>Phone Number *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="e.g., +675 12345678" />
          </div>

          <div className="form-element">
            <label>WhatsApp Number</label>
            <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} placeholder="e.g., +675 12345678" />
          </div>

          <div className="form-element">
            <label>WeChat QR Code</label>
            <input type="file" name="wechatQr" accept="image/*" onChange={handleChange} />
            <small>Upload your WeChat QR code screenshot</small>
          </div>
        </div>

        <div className="form-element">
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Complete Profile"}
          </button>
        </div>
      </form>
    </>
  );
}

export default OnboardingPage;