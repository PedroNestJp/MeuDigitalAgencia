import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { collection, addDoc } from "firebase/firestore";
import {  getToken } from "firebase/messaging";
import { db, messaging } from "../lib/firebase";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Salvar os dados no Firestore
      await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });

      // Obter o token de envio de mensagens push
      const token = await getToken(messaging);

      // Enviar mensagem push usando o serviço de mensagens push
      await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            notification: {
              title: "Nova mensagem recebida",
              body: `Você recebeu uma nova mensagem de ${name}`,
            },
            token: token,
          },
        }),
      });

      alert('recebemos seu email, entraremos em contato para passar mais informações em breve')
      console.log("Mensagem push enviada com sucesso");
    } catch (error) {
      // Erro ao enviar mensagem push
      console.error("Erro ao enviar mensagem push:", error);
    }

    // Limpar os campos após o envio
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Entre em Contato</h2>
        <p className={styles.sectionDescription}>
          Entre em contato conosco para obter mais informações ou solicitar um
          orçamento.
        </p>
        <form className={styles.contactForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            className={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Sua mensagem"
            className={styles.inputField}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.submitButton} >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
