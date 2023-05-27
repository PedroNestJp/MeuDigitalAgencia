import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            className={styles.logo}
            width={100}
            height={100}
            border-radius={20}
          />
          <h1 className={styles.logoText}>Meu Digital Agência</h1>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <a href="#features" className={styles.navbarLink}>
                Recursos
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#testimonials" className={styles.navbarLink}>
                Depoimentos
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#cta" className={styles.navbarLink}>
                Entre em contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
