import React from "react";
import styles from "../styles/FaqSection.module.css";

const FaqSection = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>

        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.question}>Como faço para começar?</h3>
            <p className={styles.answer}>
              Para começar, basta entrar em contato conosco através do
              formulário de contato ou telefone. Nossa equipe entrará em contato
              com você para discutir suas necessidades e ajudá-lo a dar os
              primeiros passos.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>
              Quais são os métodos de pagamento aceitos?
            </h3>
            <p className={styles.answer}>
              Aceitamos pagamentos através de transferência bancária, cartões de
              crédito e PayPal. Você poderá escolher a opção de pagamento que
              for mais conveniente para você.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3 className={styles.question}>
              Quanto tempo leva para criar um site?
            </h3>
            <p className={styles.answer}>
              O tempo necessário para criar um site varia dependendo da
              complexidade do projeto. Em média, podemos concluir um site em
              cerca de 1 a 6 semanas, mas isso pode ser ajustado de acordo com
              as suas necessidades específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
