import { Link } from 'react-router-dom';
import Styles from './Footer.module.css';

function Footer() {
  return(
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.column}>
        <h4>Papua New Guinea Wuhan Students Association</h4>
        <p>Empowering Students in Papua New Guinea to pursue the highest quality education</p>
        <Link to={'/account'}>Members Login</Link>
      </div>
      <div className={Styles.column}>
        <h4>Quick Links</h4>
        <ul className={Styles.footerList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Members</a></li>
          <li><a href="#">News and Blogs</a></li>
        </ul>
      </div>
      <div className={Styles.column}>
        <h4>Contacts</h4>
        <ul className={Styles.footerList}>
          <li><a href="#">WhatsApp</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Email</a></li>
        </ul>
      </div>
      <div className={Styles.column}>
        <h4>Partnerships and Affiliation</h4>
        <ul className={Styles.footerList}>
          <li><a href="#">PNG Embassy China</a></li>
          <li><a href="#">PNG STEM Program</a></li>
          <li><a href="#">University Application</a></li>
          <li><a href="#">Other Partnerships</a></li>

        </ul>
      </div>
        </div>
        <div>
          <hr />
          <p className={Styles.footerBottom}>&copy; All Rights Reserved | PNGWSA .CN </p>
        </div>
    </footer>
  )
}

export default Footer;