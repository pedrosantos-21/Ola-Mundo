import React from 'react'
import styles from "./PostModelo.module.css"

export default function Postmodelo({ fotoCapa, titulo, children }) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            >   {/* Dentro da tag style vai ter um objeto*/} 
            </div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>

        </article>
    )
}
