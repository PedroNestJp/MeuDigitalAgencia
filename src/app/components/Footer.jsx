import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Meu Digital Agência. Todos os direitos
          reservados.
        </p>
        <ul className={styles.footerLinks}>
          <li className={styles.footerLink}>
            <a href="#">Política de Privacidade</a>
          </li>
          <li className={styles.footerLink}>
            <a href="#">Termos de Uso</a>
          </li>
          <li className={styles.footerLink}>
            <a href="#">Mapa do Site</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
