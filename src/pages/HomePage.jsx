import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Styles from './HomePage.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe, faUsers, faGraduationCap, faHeart, faPlus, faBuilding, faCalendar, faArrowAltCircleRight} from '@fortawesome/fontawesome-free-solid';
import ContactForm from "../components/ContactForm";
import {easeIn, motion} from 'motion/react'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function HomePage() {
  return(
    <>
      <Header></Header>
      <Hero />
      <div className={Styles.aboutSections}>
        <div className={Styles.aboutUs}>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeIn' }}
          viewport={{ once: false }}
          className={Styles.container}>
            <div className={Styles.leftSection}>
              <motion.h6
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, ease: 'easeOut', delay: 0.7}}
              >Mission</motion.h6>
              <h2>Empowering PNG Students in <span className={Styles.red}>Wuhan</span></h2>
              <p>The Papua New Guinea Wuhan Students Association (PNGWSA) is the official student body representing Papua New Guinean students studying across universities in Wuhan, Hubei Province, China. We provide support, advocacy, and community for our members.</p>
              <div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className={Styles.containerGrid}>
                <div variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faUsers} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Fostering brotherhood and sisterhood among PNG students in Wuhan.</p>
                  </div>
                </div>
                <div variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faGraduationCap} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Supporting each other to achieve the highest academic standards.</p>
                  </div>
                </div>
                <div variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faGlobe} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Building bridges between Papua New Guinea and China.</p>
                  </div>
                </div>
                <div variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faHeart} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Preserving and sharing our rich Papua New Guinean heritage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.rightSection}>
              <img src="./pngwsa.png" alt="" />
              <div className={Styles.container}>
                <div className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faPlus} /></i>
                  </div>
                  <div className={Styles.right}>
                    <h4>60+ Active Students</h4>
                  </div>
                </div>
                <div className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faBuilding} /></i>
                  </div>
                  <div className={Styles.right}>
                    <h4>7+ Universities across Wuhan</h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={Styles.newsSection} >
        <h6>Stay Updated</h6>
        <h2>News &amp; Blogs</h2>
        <div className={Styles.container} >
          <div className={Styles.card} >
            <h5>Announcement</h5>
            <h4>PNGWSA Welcome STEM Students for 2026 Academic Year</h4>
            <p>PNGWSA welcome new STEM students from Papua New Guinea to Wuhan University to pursue engineering courses marking...</p>
            <p className={Styles.date}>
              <i><FontAwesomeIcon icon={faCalendar} /></i>
              September 01, 2025
            </p>
          </div>
          <div className={Styles.card} >
            <h5>Events</h5>
            <h4>PNGWSA Celebrates September 16 in Hubei</h4>
            <p>PNGWSA celebrated the PNG independence in Hubei and went to an all-you-can-eat buffet...</p>
            <p className={Styles.date}>
              <i><FontAwesomeIcon icon={faCalendar} /></i>
              September 16, 2025
            </p>
          </div>
          <div className={Styles.card} >
            <div className={Styles.riddon}></div>
            <h5>News</h5>
            <h4>PNGWSA Recognised by the Wuhan Govenment for its Work</h4>
            <p>PNGWSA has been recognized by the Wuhan Government recognizing the hard work it does in secret...</p>
            <p className={Styles.date}>
              <i><FontAwesomeIcon icon={faCalendar} /></i>
              February 01, 2026
            </p>
          </div>
      </div>
      <div className={Styles.moreBox}>
        <a href="#">View More <FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
      </div>
        </div>
        <ContactForm />
      <Footer></Footer>
    </>
  )
}
export default HomePage;