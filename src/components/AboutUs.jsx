import React from "react"
import styles from "../styles/AboutUs.module.css"

const AboutUs = () => {
    return (
        <section >
            <div className={styles.main}      >
                <h2 className={styles.title}>
                    Sobre nós
                </h2>
                <h1 className={styles.subTitle}> Conheça o Meu Digital </h1>
                <p className={styles.text}>
                    Somos a solução para o seu
                    sucesso digital. No Meu Digital, somos apaixonados por ajudar microempreendedores
                    , pequenas empresas e empreendedores iniciantes a alcançarem o
                    sucesso online. <br></br> Combinamos design
                    de qualidade e estratégias personalizadas para fornecer soluções digitais eficazes e resultados excepcionais. Nossa abordagem é baseada em parceria e comprometimento com nossos clientes. Trabalhamos lado a lado com você para entender suas necessidades e objetivos,<br></br> criando estratégias personalizadas que impulsionam o crescimento do seu negócio e o destacam da concorrência. Não importa se você está apenas começando ou precisa expandir sua presença online, estamos aqui para ajudar a transformar suas ideias em realidade digital. <br></br> Deixe-nos ajudá-lo a construir uma marca forte, alcançar seu público-alvo e aumentar suas vendas online. Entre em contato conosco hoje mesmo para descobrir como podemos impulsionar o seu sucesso digital!

                </p>
                <h1 className={styles.cta}> Impulsione seu negócio digital </h1>
                <h2 className={styles.ctaTextSub}> Tenha uma presença online sólida e conquiste mais clientes </h2>
                <button className={styles.btnCta}> Entre em contato </button>
            </div>
        </section>
    )
}
export default AboutUs