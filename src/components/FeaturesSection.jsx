import React from "react";
import styles from "../styles/FeaturesSection.module.css";
import { BsBrowserChrome, BsInstagram, BsMailbox } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import {  } from "react-icons/ai";

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Serviços oferecidos </h2>

        <div className={styles.feature}>

            < BsInstagram  alt="Recursos"
            className={styles.featureImage}
            width={200}
            height={200}/>
          

          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>
              Criação, Integração e Gestão de Redes Sociais
            </h3>
            <p className={styles.featureDescription}>
              Aproveite o poder das redes sociais para impulsionar o seu
              negócio. Nossos especialistas em marketing digital irão criar
              estratégias eficazes para a sua presença nas redes sociais,
              envolvendo seu público-alvo, aumentando o reconhecimento da marca
              e impulsionando as vendas.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <FaNetworkWired
            className={styles.featureImage}
            width={200}
            height={200}
          />
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>
              Criação de Sites Personalizados
            </h3>
            <p className={styles.featureDescription}>
              Desenvolvemos sites modernos, responsivos e personalizados para
              atender às necessidades do seu negócio. Atraia e envolva seu
              público-alvo por meio de conteúdo relevante e valioso. Nossa
              equipe de redatores especializados criará conteúdo persuasivo que
              fortalecerá sua marca, estabelecerá sua autoridade no setor e
              aumentará sua base de clientes.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <BsBrowserChrome
            alt="Recursos"
            className={styles.featureImage}
            width={200}
            height={200}
          />
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>
              Otimização para Mecanismos de Busca
            </h3>
            <p className={styles.featureDescription}>
              Aumente a visibilidade do seu site nos motores de busca.
              Utilizamos técnicas avançadas de SEO para melhorar o seu ranking
              nos resultados de pesquisa e direcionar mais tráfego qualificado
              para o seu negócio.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <BsMailbox
            alt="Recursos"
            className={styles.featureImage}
            width={200}
            height={200}
          />
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>
              Campanhas de Email Marketing
            </h3>
            <p className={styles.featureDescription}>
              Aproveite o poder do email marketing para se conectar com seus
              clientes e impulsionar suas vendas. Desenvolvemos campanhas
              personalizadas, segmentadas e impactantes que envolvem seus
              clientes, promovem suas ofertas e aumentam a fidelidade à marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
