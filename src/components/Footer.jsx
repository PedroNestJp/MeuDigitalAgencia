import React from "react";
import styles from "../styles/Footer.module.css";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <p className={styles.contatcText}> Contato </p>
          <a href="https://mail.google.com/mail/u/0/#inbox"> <p className={styles.email}> meudigitalagencia@gmail.com </p> </a>
          <p className={styles.phone}> 83 9 86377109 </p>
        </div>
        <div className={styles.newslatter}>
          <p className={styles.signUpNewsLatter}> Inscreva-se na nossa Newslatter </p>
          <input type='submit' className={styles.submitEmail} 
          placeholder="Coloque seu e-mail aqui" /> <IoPaperPlaneOutline/>
        </div>
        <div>
        <img
            src="./images/logoNew1.png"
            alt="Logo"
            className={styles.logo}
          />
          <p className={styles.textBtnLogo}> Vamos evoluir juntos? </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
