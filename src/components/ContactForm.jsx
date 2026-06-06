import Styles from './ContactForm.module.css'

function ContactForm() {
  return(
      <div className={Styles.overlay}>
        <div>
          <h6>Contact</h6>
          <h2>Contact Us</h2>
          <form className='form-signup'>
            <div  className='form-element'>
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div className='form-element'>
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className='form-element'>
              <label>Message:</label>
              <textarea>
              </textarea>
            </div>
            <div className='form-element'>
              <button className={Styles.contactBtn}>Send Message</button>
            </div>
          </form>
        </div>
        <div className={Styles.connectContainer}>
          <h3>Connect With Us:</h3>
          <div>
            <p>Become a part of our growing network of Papua New Guinean students studying across China. Connect with peers, mentors, and alumni who can support your academic journey.</p>
            <button className={Styles.contactBtn}>Join Us Now</button>
          </div>
        </div>
      </div>
  )
}
export default ContactForm;