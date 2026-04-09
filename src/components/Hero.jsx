import Styles from './Hero.module.css';
import {motion} from 'motion/react';

function Hero(){
  return(
    <>
      <div className={Styles.heroContainer}>
        <div className={Styles.heroOverlay}>
          <motion.h6
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: 'easeOut', delay: 0.3}}
          >Established in Wuhan, China</motion.h6>
          <motion.h1
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: 'easeOut', delay: 0.5}}
          >Papua New Guinea <br /> <span>Wuhan Students</span> <br /> Association</motion.h1>
          <motion.p
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: 'easeOut', delay: 0.5}}
          >Connecting, empowering, and supporting PNG students pursuing excellence in Wuhan's top universities.</motion.p>
          <div className={Styles.btnContainer}>
            <motion.button
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: 'easeOut', delay: 1}}
            className={Styles.primaryBtn}>Read More</motion.button>
            <motion.button
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: 'easeOut', delay: 1.2}}
            className={Styles.secondaryBtn}>Contact Us</motion.button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero;