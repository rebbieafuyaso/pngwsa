import { useState } from "react";
import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={Styles.header}>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={Styles.logoSection}
      >
        <img className={Styles.logoImg} src="/pngwsa.png" />
        <p>
          <strong className={Styles.logo}>PNGWSA</strong>
        </p>
      </motion.div>

      {/* NAV */}
      <nav className={Styles.navbar}>
        <ul
          className={`${Styles.navList} ${
            isOpen ? Styles.active : ""
          }`}
        >
          {["/", "/about", "/news", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "News and Blogs", "Contact"];

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
                <Link to={path}>{labels[i]}</Link>
              </motion.li>
            );
          })}
        </ul>

        {/* HAMBURGER */}
        <div
          className={`${Styles.hamburger} ${
            isOpen ? Styles.open : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;