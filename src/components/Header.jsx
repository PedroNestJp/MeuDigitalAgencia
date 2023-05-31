import React from "react";
import styles from "../styles/Header.module.css";
import headerSectionDevices from "../images/headerSecion-deviceHand.png";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src="./images/logoNew1.png"
            alt="Logo"
            className={styles.logo}
          />


        </div>
        <img
          className={styles.headerImg}
          alt=""
          src={headerSectionDevices} />
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <a href="#features" className={styles.navbarLink}>
                Início
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#features" className={styles.navbarLink}>
                Sobre
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#testimonials" className={styles.navbarLink}>
                Serviços
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#cta" className={styles.navbarLink}>
                Atendimento
              </a>
            </li>

            <li>
              <a style={{ margin: '0px 10px 0px 30px' }}
                href="#cta" className={styles.navbarLink}>
                <BsInstagram />
              </a>
              <a href="#cta" className={styles.navbarLink}>
                <BsWhatsapp />
              </a>
              <a href="#cta" className={styles.navbarLink}> 83 9 86377109 </a>
            </li>
          </ul>
          <div className={styles.textHeader} > 
            <span className={styles.spanTextHeader}> A </span> 
            <span> IMPORTÂNCIA </span> 
            <span className={styles.spanTextHeader} > DO  </span> <span > SEU  </span> 
            <span> NEGÓCIO DIGITAL </span>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;
