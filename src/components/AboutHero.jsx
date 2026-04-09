import Styles from './AboutHero.module.css';

function AboutHero() {
  return(
      <div className={Styles.aboutHero}>
        <div className={Styles.aboutOverlay}>
        <h6>About Us</h6>
        <h2>Meet Our Team, Know Our Values</h2>
        <p>Meet the dedicated leaders of PNGWSA, discover how and when it was founded, and know about our values.</p>
        <button className={''}>Read More</button>
      </div>
    </div>
  )
}
export default AboutHero;