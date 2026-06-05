import { useState } from "react";
import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import Styles from './ContactPage.module.css';
import './form.css';

function ContactPage() {

  const[formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }));
  } 

  return(
    <>
      <Header />
      <HeroComponent
      subtitle={'Contact Us'}
      title={'Have any questions?'}
      text={'Contact us now an get your questions answered, no more curiosity. Just one click away.'} />
      <div className={Styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formHeader}>
            <img src="/pngwsa.png" alt="papua new guinea wuhan students association logo" className={Styles.formLogo}/>
            <h2>Contact Us Now</h2>
          </div>
          <div className={Styles.formElement}>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter Fullname:" />
          </div>
          <div className={Styles.formElement}>
            <label>Email:</label>
            <input type="email" name="email" placeholder="joeblow@example.com" />
          </div>
          <div className={Styles.formElement}>
            <label>Message:</label>
            <textarea rows="7" placeholder="Enter message">
            </textarea>
          </div>
          <div className={Styles.formElement}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default ContactPage;