import Styles from './ContactForm.module.css'

function ContactForm() {
  return(
      <div className={Styles.overlay}>
        <h2>Join Our Community</h2>
        <p>Whether you're a new or returning student, PNGWSA is your home away from home in Wuhan.</p>
        <button>Get in Touch</button>
      </div>
  )
}
export default ContactForm;