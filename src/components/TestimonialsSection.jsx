import React from "react";
import styles from "../styles/TestimonialsSection.module.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <section data-aos='fade-up' id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Depoimentos</h2>
        <div className={styles.testimonialsList}>
          {/* Testemunhos dos clientes */}
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>
              A Agência Digital fez um trabalho incrível para impulsionar a
              nossa presença online. Nossas vendas aumentaram significativamente
              desde então.
            </p>
            <p className={styles.testimonialAuthor}>
              - LuArtes
            </p>
          </div>
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>
              Estou muito satisfeito com os serviços da Agência Digital. Eles
              criaram um site incrível para o meu negócio e me ajudaram a
              alcançar mais clientes.
            </p>
            <p className={styles.testimonialAuthor}>
              - Pedro Nest, CEO Nest informática
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
