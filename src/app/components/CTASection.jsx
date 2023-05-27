import React from "react";
import styles from "../styles/CTASection.module.css";

const CTASection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Impulsione o seu negócio digital
        </h2>
        <p className={styles.sectionSubtitle}>
          Tenha uma presença online poderosa e alcance mais clientes.
        </p>
        <a href="#" className={styles.ctaButton}>
          Entre em contato
        </a>
      </div>
    </section>
  );
};

export default CTASection;
