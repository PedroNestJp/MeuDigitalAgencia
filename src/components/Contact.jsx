import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Entre em Contato</h2>
        <p className={styles.sectionDescription}>
          Entre em contato conosco para obter mais informações ou solicitar um
          orçamento.
        </p>
        <form className={styles.contactForm}>
          <input
            type="text"
            placeholder="Seu nome"
            className={styles.inputField}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className={styles.inputField}
          />
          <textarea
            placeholder="Sua mensagem"
            className={styles.inputField}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
