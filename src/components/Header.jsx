import { useState } from "react";
import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';
import { BookAIcon, Home, NewspaperIcon, Phone, UsersIcon,  } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className={Styles.header}>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{opacity: 0, y:-5}}
        viewport={{once: false}}
        transition={{ duration: 1 }}
        className={Styles.logoSection}
      >
        <img className={Styles.logoImg} src="/pngwsa.png" />
        <p><strong className={Styles.logo}>
          <span>
            Papua New Guinea
          </span>
          <span>
            Wuhan Students Association
          </span>
          </strong></p>
      </motion.div>
      {/* NAV */}
      <div className={`${Styles.navCanvas} ${isOpen ? Styles.active : ""}`}>
        <nav className={Styles.navbar}>
        <ul
          className={`${Styles.navList} ${isOpen ? Styles.active : "" }`}>
          {["/", "/about", "/members", "/news", "/contact", "/create-account"].map((path, i) => {
            const labels = ["Home", "About", "Members", "News and Blogs", "Contact", "Sign Up"];
            const navIcons = [<Home />, <BookAIcon />, <UsersIcon />, <NewspaperIcon />, <Phone />];
            return (
              <motion.li
                key={path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                onClick={() => setIsOpen(false)}
              >
                <Link className={Styles.links} to={path}>
                <span className={Styles.linkContainer} >
                  {navIcons[i]} {labels[i]}
                </span></Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
      </div>
                  
        {/* HAMBURGER */}
        <div
          className={`${Styles.hamburger} ${
            isOpen ? Styles.active : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faX}/>}
        </div>
    </header>
  );
}

export default Header;