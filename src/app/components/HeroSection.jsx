import React from "react";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Impulsione o seu negócio digital</h1>
        <p className={styles.subtitle}>
          Tenha uma presença online sólida e conquiste mais clientes
        </p>
        <div className={styles.cta}>
          <button className={styles.ctaButton}>Saiba mais</button>
          <button className={styles.ctaButton}>Entre em contato</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
