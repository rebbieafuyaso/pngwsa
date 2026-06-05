import { useState } from "react";
import "./form.css";
import { api } from "../api";
import ProvinceList from "../components/ProvinceLists";


function SignupForm() {
{/* Form Logic Goes in Here */}
/* constants here */
const [formData, setFormData] = useState({
  fullname: "",
  age: "",
  gender: "",
  province: "",
  university: "",
  otherUniversity: "",
  course: "",
  graduateLevel: "",
  otherGraduateLevel: "",
  graduateYear: "",
  phone: "",
  email: ""
  /*
  1. Later be filled in the profile
    Profile Picture
    Bio
    Projects
    Social Links
  
  2. For the account creation
    Email
    Password
    ID - (slug)
    Token
  */
});
const API_URL = import.meta.env.Vite_STRAPI_URI;

/* Handle change in the data */
  const handleChange = (e) => {
    // decompose the variables (type and files for images)
    const {name, value} = e.target;
    setFormData(prev => ({
      //copy all the previous data - do nothing
      ...prev,
      //only change this one
      [name]:value
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //User data
      const data = new FormData();
      data.append("fullname", formData.fullname);
      data.append("age", formData.age);
      data.append("gender", formData.gender);
      data.append("province", formData.province)
      data.append("university", formData.university);
      data.append("otheruniversity", formData.otherUniversity);
      data.append("course", formData.course);
      data.append("graduateLevel", formData.graduateLevel);
      data.append("otherGraduateLevel", formData.otherGraduateLevel);
      data.append("graduateYear", formData.graduateYear);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      const res = api.post(`/members`, data);
      console.log(res.data);

      //Send the data
      const userData = {
        //Personal Info
        fullname: formData.fullname,
        age: formData.age,
        gender: formData.gender,
        province: formData.province,
        //Acedemic Info
        university: formData.university,
        otherUniversity: formData.otherUniversity,
        course: formData.course,
        graduateLevel: formData.graduateLevel,
        otherGraduateLevel: formData.otherGraduateLevel,
        graduateYear: formData.graduateYear,
        //Contact Info
        email: formData.email,
        phone: formData.phone
      }
      const userRes = await api.post('/members', userData);
      console.log(userRes.data);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form className="form-signup" onSubmit={handleSubmit}>
      <div className="form-header">
        <img
          src="/pngwsa.png"
          alt="logo"
          className="form-logo"
        />
        <h2>PNG WSA Signup</h2>
      </div>
     <fieldset>
      <legend>Personal Information</legend>
      <div className="form-element">
        <label>Fullname:</label>
          <input
            type="text"
            name="fullname"
            placeholder="i.e Joe Blow"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
      </div>
      <div className="form-element">
        <label>Age:</label>
        <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
      </div>
      <div className="form-element">
        <label>Gender:</label>
        <label>
          <input 
          type="radio" 
          name="gender" 
          value="female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
          />
          &nbsp;
          Female:
        </label>
        <label>
          <input 
          type="radio" 
          name="gender" 
          value="male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
          />
          &nbsp;
          Male:
        </label>
      </div>
      <div className="form-element">
        <ProvinceList />
      </div>
     </fieldset>
     <fieldset>
      <legend>Academic Information:</legend>
      <div className="form-element">
        <label>University:</label>
        <select
          name="university"
          value={formData.university}
          onChange={handleChange}
        >
          <option value="">Select school</option>
          <option value="Wuhan University">
            Wuhan University
          </option>
          <option value="China Three Gorges University">
            China Three Gorges University
          </option>
          <option value="Wuhan University of Technology">
            Wuhan University of Technology
          </option>
          <option value="other">Other</option>
        </select>
      </div>
      {/* When Others are selected */}
      {formData.university === "other" && (
        <div className="form-element">
          <label>University:</label>
          <input 
          type="text"
          name="otherUniversity"
          placeholder="Please Specify"
          value={formData.otherUniversity}
          onChange={handleChange}
          />
        </div>
      )}
      <div className="form-element">
        <label>Course:</label>
        <input
        type="text"
        name="course"
        required
        value={formData.course}
        onChange={handleChange}
        placeholder="i.e. Bachelor Computer Science..."
        />
      </div>
      <div className="form-element">
        <label>Graduate Level:</label>
        <select
          name="graduateLevel"
          value={formData.graduateLevel}
          onChange={handleChange}
        >
          <option value="">Select Graduate Level</option>
          <option value="Undergraduate">
            Undergraduate
          </option>
          <option value="Masters">
            Masters
          </option>
          <option value="PhD and Doctrate">
            PhD and Doctorate
          </option>
          <option value="other">
            Other
          </option>
        </select>
      </div>
      {formData.graduateLevel === "other" && (
        <div className="form-element">
          <input
          type="text"
          value={formData.otherGraduateLevel}
          onChange={handleChange}
          name="otherGraduateLevel"
          />
        </div>
      )}
      <div className="form-element">
        <label>Graduate Year:</label>
        <input 
        type="date"
        name="graduateYear" 
        value={formData.graduateYear} 
        onChange={handleChange}
        required
        />
      </div>
     </fieldset>
      <fieldset>
        <legend>Contact Info:</legend>
        <div className="form-element">
          <label>Phone: </label>
          <input 
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required/>
        </div>
        <div className="form-element">
          <label>Email:</label>
          <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
           />
        </div>
      </fieldset>
      <div className="form-element">
        <button type="submit">
          Submit Data
        </button>
      </div>
    </form>
  );
}
export default SignupForm;