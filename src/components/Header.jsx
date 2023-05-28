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
            src="/images/logoNew.png"
            alt="Logo"
            className={styles.logo}
            width={100}
            height={100}
            border-radius={20}
          />

          <h1 className={styles.logoText}>Meu Digital Agência</h1>
          <spa> A IMPORTÂNCIA DO SEU NEGÓCIO DIGITAL </spa>
          <img alt="" src={headerSectionDevices} />
        </div>
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
            <li className={styles.navbarItem}>
              <a href="#cta" className={styles.navbarLink}>
                <BsInstagram />
              </a>
              <a href="#cta" className={styles.navbarLink}>
                <BsWhatsapp />
              </a>
              <p style={{ color: "white" }}> 83 9 86377109 </p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
