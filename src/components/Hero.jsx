import Styles from './Hero.module.css';
import {motion} from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Hero(){
    const navigate = useNavigate();
  return(
    <>
      <div className={Styles.heroContainer}>
        <div className={Styles.heroOverlay}>
          <motion.h5
          initial={{opacity: 0, y: -15}}
          whileInView={{opacity: 1, y: 0}}
          exit={{opacity: 0, y:-15}}
          viewport={{once: false}}
          transition={{duration: 1, ease: 'easeOut', delay: 0.2}}
          >Established in Wuhan, China</motion.h5>
          <motion.h1
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: 'easeOut', delay: 0.3}}
          >Papua New Guinea <br /> <span>Wuhan Students</span> <br /> Association</motion.h1>
          <motion.p
          initial={{opacity: 0, y: -10}}
          whileInView={{opacity: 1, y: 0}}
          exit={{opacity: 0, y:-5}}
          viewport={{once: false}}
          transition={{duration: 0.5, ease: 'easeOut', delay: 0.35}}
          >Connecting, empowering, and supporting PNG students pursuing excellence in Wuhan's top universities.</motion.p>
          <div className={Styles.btnContainer}>
            <motion.a
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            exit={{opacity: 0, y:-5}}
            viewport={{once: false}}
            transition={{duration: 0.5, ease: 'easeOut', delay: 0.4}}
            className={Styles.primaryBtn}
            onClick={() => navigate("/about")}
            >Read More <FontAwesomeIcon icon={faArrowRight} /></motion.a>
            <motion.a
            onClick={()=> navigate("/contact")}
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y:-5}}
            viewport={{once: false}}
            transition={{duration: 0.5, ease: 'easeOut', delay: 0.45}}
            className={Styles.secondaryBtn}>Contact Us</motion.a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero;