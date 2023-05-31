import React from "react";
import styles from "../styles/FeaturesSection.module.css";
import headerSectionaIdea from "../images/feaureSecion-idea.png";
import headerSectionSeo from "../images/feaureSecion-seo.png";
import headerSectionMail from "../images/feaureSecion-mail.png";
import headerSectionDevices from "../images/feaureSecion-devices (1).png";
import { } from 'react-icons/bs'
import { HiOutlineArrowLongRight } from "react-icons/hi2"

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.sectionTitle}>Serviços oferecidos </h2>
      <div className={styles.container}>

        <div className={styles.feature}>
          <img
            src={headerSectionaIdea}
            alt="Recursos"
            className={styles.featureImage}
          />

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
            <span className={styles.line}>
            </span>
            <p className={styles.contactUsUp}>
              <a className={styles.contactUs}>
                Fale conosco
              </a>
              <a style={{
                width: '46px',
                color: '#A39C9C'
              }}>
                <HiOutlineArrowLongRight />
              </a>
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <img
            src={headerSectionDevices}
            alt=""
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
            <span className={styles.line}>
            </span>
            <p className={styles.contactUsUp}>
              <a className={styles.contactUs}>
                Fale conosco
              </a>
              <a style={{
                width: '46px',
                color: '#A39C9C'
              }}>
                <HiOutlineArrowLongRight />
              </a>
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <img
            src={headerSectionSeo}
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
            <span className={styles.line}>
            </span>
            <p className={styles.contactUsUp}>
              <a className={styles.contactUs}>
                Fale conosco
              </a>
              <a style={{
                width: '46px',
                color: '#A39C9C'
              }}>
                <HiOutlineArrowLongRight />
              </a>
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <img
            src={headerSectionMail}
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
            <span className={styles.line}>
            </span>
            <p className={styles.contactUsUp}>
              <a className={styles.contactUs}>
                Fale conosco
              </a>
              <a style={{
                width: '46px',
                color: '#A39C9C'
              }}>
                <HiOutlineArrowLongRight />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
