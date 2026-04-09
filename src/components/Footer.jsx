import Styles from './Footer.module.css';

function Footer() {
  return(
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.column}>
        <h3>Papua New Guinea Wuhan Students Association</h3>
        <p>Empowering Students in Papua New Guinea to pursue the highest quality education</p>
      </div>
      <div className={Styles.column}>
        <h3>Quick Links</h3>
        <ul className={Styles.footerList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">News and Blogs</a></li>
        </ul>
      </div>
      <div className={Styles.column}>
        <h3>Contacts</h3>
        <ul className={Styles.footerList}>
          <li><a href="#">WhatsApp</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Email</a></li>
        </ul>
      </div>
      <div className={Styles.column}>
        <h3>Partnerships and Affiliation</h3>
        <ul className={Styles.footerList}>
          <li><a href="#">PNG Embassy China</a></li>
          <li><a href="#">PNG STEM Program</a></li>
        </ul>
      </div>
        </div>
        <div>
          <hr />
          <p className={Styles.footerBottom}>&copy; All Rights Reserved | PNGWSA .CN</p>
        </div>
    </footer>
  )
}

export default Footer;