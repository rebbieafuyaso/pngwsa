import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Styles from './HomePage.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe, faUsers, faGraduationCap, faHeart, faCalendar, faArrowAltCircleRight} from '@fortawesome/fontawesome-free-solid';
import {motion} from 'motion/react';
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Highlights from "../components/Highlights";


const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function HomePage() {
  const API_URL = import.meta.env.VITE_STRAPI_URI;
  const IMG_URI = import.meta.env.VITE_STRAPI;
  const {data} = useFetch(`${API_URL}/blogs?populate=*`);

  return(
    <>
      <Header />
      <Hero />
      <div className={Styles.sectionContainer} id="#about">
        <div className={Styles.aboutUs}>
          <div
          className={Styles.container}>
            <div className={Styles.leftSection}>
              <motion.h6
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y:5}}
              viewport={{once: false}}
              transition={{duration: 0.5, ease: 'easeOut', delay: 0.5}}
              >Mission</motion.h6>  
              <motion.h2
              initial={{opacity: 0, y: -5}}
              whileInView={{opacity: 1, y: 0}}
              exit={{opacity: 0, y:5}}
              viewport={{once: false}}
              transition={{duration: 0.3, delay: 0.6}}
              >Empowering PNG Students in <span className={Styles.red}>Wuhan</span></motion.h2>
              <motion.p
              initial={{opacity: 0, y: -5}}
              whileInView={{opacity: 1, y:0}}
              exit={{opacity: 0, y:5}}
              viewport={{once: false}}
              transition={{duration: 0.3, delay: 0.65}}
              >The Papua New Guinea Wuhan Students Association (PNGWSA) is the official representative body for Papua New Guinean students studying in Wuhan, Hubei Province, China. The association is dedicated to fostering unity, academic excellence, cultural exchange, and mutual support among its members.
              <br /><br />
              Through academic, social, and cultural initiatives, PNGWSA provides a platform for students to connect, share experiences, and build meaningful relationships while pursuing their studies abroad. We are committed to creating a supportive community that empowers students to succeed both academically and personally.
              </motion.p>
              <div
              className={Styles.containerGrid}>
                <motion.div
                initial={{opacity: 0, y:5}}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay: 0.3}}
                variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faUsers} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Fostering brotherhood and sisterhood among PNG students in Wuhan.</p>
                  </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y:5}}
                whileInView={{opacity: 1, y:0}}
                exit={{opacity: 0, y:5}}
                viewport={{once: false}}
                transition={{duration: 0.5, delay: 0.3}}
                variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faGraduationCap} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Supporting each other to achieve the highest academic standards.</p>
                  </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y:5}}
                whileInView={{opacity: 1, y:0}}
                exit={{opacity: 0, y:5}}
                viewport={{once: false}}
                transition={{duration: 0.5, delay: 0.3}}
                variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faGlobe} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Building bridges between Papua New Guinea and China.</p>
                  </div>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y:5}}
                whileInView={{opacity: 1, y:0}}
                exit={{opacity: 0, y:5}}
                viewport={{once: false}}
                transition={{duration: 0.5, delay: 0.3}}
                variants={item} className={Styles.cards}>
                  <div className={Styles.left}>
                    <i><FontAwesomeIcon icon={faHeart} /></i>
                  </div>
                  <div className={Styles.right}>
                    <p>Preserving and sharing our rich Papua New Guinean heritage.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{opacity: 0, y: -5}}
              whileInView={{opacity: 1, y:0}}
              exit={{opacity: 0, y:5}}
              viewport={{once: false}}
              transition={{duration: 1}}
            className={Styles.rightSection}>
              <img className={Styles.newLogo} src="./papua-new-guinea-wuhan-students-association-new-logo.png" alt="pngwsa-logo" />
              <div className={Styles.container}>
                <Highlights />
              </div>
            </motion.div>
          </div>
        </div>
      </div>



      <div className={Styles.newsSection} >
        <h6 className={Styles.sectionHeader}>Stay Updated</h6>
        <h2>News &amp; Blogs</h2>
        <div className={Styles.blogContainer} >
        {data?.data?.map((blog) => {
          console.log("For Blog Pic", `${IMG_URI}${blog.blogPic.url}`);
          return (
          <div key={blog.documentId} className={Styles.blogCard} >
            <div className={Styles.riddon}></div>
            <h4>{blog.title}</h4>
            <img className={Styles.blogImg} src={`${IMG_URI}${blog.blogPic.url}`} alt={`${blog.slug}`}/>
            <p>{blog.excerpt}</p>
            <p className={Styles.date}>
              <i><FontAwesomeIcon icon={faCalendar} /></i>
              {new Date(blog.published).toLocaleDateString()}
            </p>
            <Link to={`/details/${blog.slug}`}>Read More</Link>
          </div>
          )
})}
      </div>
      <div className={Styles.moreBox}>
        <a href="#">View More <FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
      </div>
        </div>
      <Footer />
    </>
  )
}
export default HomePage;