import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá eu sou o Pedro vinicius!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antonio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />


      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao
      </p>

      <p className={styles.paragrafo}>
        curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas
      </p>

      <p className={styles.paragrafo}>
        sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que
      </p>

      <p className={styles.paragrafo}>
        trabalharia com isso hoje.
      </p>

      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar
      </p>

      <p className={styles.paragrafo}>
        no PET (Programa de Educação Tutorial), um grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a
      </p>

      <p className={styles.paragrafo}>
        oportunidade de estudar desenvolvimento web para ser um dos mantenedores do site deles.
      </p>

    </PostModelo>
  )
}
