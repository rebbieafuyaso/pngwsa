import { useState } from 'react';
import './form.css';
import FormHeader from '../components/FormHeader';

function ForgetPassword() {
      const [formData, setFormData] = useState({
        email: "",
        code: ""
      });

      const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
          ...prev,
          [name]:value,
        }));
      };
      const handleSubmit = (e) => {
        e.prevenDefault();
        console.log(formData);
      };


  return(
    <>
      <FormHeader />
      <div className='form-header'>
        <img src='/pngwsa.png' alt='papua new guinea wuhan students logo' className='form-logo'/>
        <h2>Reset Password</h2>
      </div>
      <form className='form-signup'>
        <div className="form-element">
          <label>Email:</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className="form-element">
          <label>Verfication Code:</label>
          <fieldset className="verification-container">
            <input type="number" name="number" id="number" size="6" required className="verification-input"/>
            <input type="submit"
            value={'Get Code'}
            className="verification-send-btn"/>
          </fieldset>
        </div>
        <div className="form-element">
          <button>Reset Password</button>
        </div>
      </form>
    </>
  )
}
export default ForgetPassword;