import { useState } from "react";
import { Section } from "../Section/Section";
import styles from './Contact.module.scss'


export function Contact() {

    const [isCopy, setIsCopy] = useState<boolean>(false)

    const copyText = () => {
        navigator.clipboard.writeText("joaovitor55670@gmail.com")
        setIsCopy(true)

        setTimeout(() => {
            setIsCopy(false)
        }, 2500)
    }

    return (
        <Section id="contact" title="Entre em Contato">
            <p className={styles["paragraph-text-contact"]}>Estou sempre aberto a novas oportunidades e colaborações. A melhor forma de falar comigo é por e-mail.</p>
            <div className={`${styles["contact-cta"]} ${styles["scroll-reveal"]}`}>
                <div className={styles["contact-email"]} onClick={copyText}>joaovitor55670@gmail.com</div>
                <p className={styles["cta-subtitle"]}>Ou me encontre nestas plataformas:</p>
                <div className={styles["social-icons"]}>
                    <a href="https://www.linkedin.com/in/joao-vx/" aria-label="LinkedIn" target="_blank">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.8,0H2.2C1,0,0,1,0,2.2v19.6C0,23,1,24,2.2,24h19.6c1.2,0,2.2-1,2.2-2.2V2.2C24,1,23,0,21.8,0z M7.4,20.7H3.9V9.4h3.5V20.7z M5.6,7.9c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S6.9,7.9,5.6,7.9z M20.7,20.7h-3.5v-5.6c0-1.3-0-3-1.8-3s-2.1,1.4-2.1,2.9v5.7H9.8V9.4h3.4v1.5h0.1c0.5-0.9,1.6-1.8,3.3-1.8c3.5,0,4.2,2.3,4.2,5.3V20.7z" /></svg>
                    </a>
                    <a href="https://github.com/joaovxsantos" aria-label="GitHub" target="_blank">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12,0C5.4,0,0,5.4,0,12c0,5.3,3.4,9.8,8.2,11.4c0.6,0.1,0.8-0.3,0.8-0.6v-2.2c-3.3,0.7-4-1.6-4-1.6c-0.5-1.4-1.3-1.8-1.3-1.8c-1.1-0.7,0.1-0.7,0.1-0.7c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.8,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.5-1.3-5.5-5.9c0-1.3,0.5-2.4,1.2-3.2C5.5,8.1,4.9,6.5,5.7,4.7c0,0,1-0.3,3.3,1.2c1-0.3,2-0.4,3-0.4s2,0.1,3,0.4c2.3-1.5,3.3-1.2,3.3-1.2c0.8,1.8,0.2,3.4,0.1,3.7c0.8,0.8,1.2,1.9,1.2,3.2c0,4.6-2.8,5.6-5.5,5.9c0.4,0.4,0.8,1.1,0.8,2.2v3.3c0,0.3,0.2,0.7,0.8,0.6C20.6,21.8,24,17.3,24,12C24,5.4,18.6,0,12,0z" /></svg>
                    </a>
                </div>
            </div>
            <div className={`${styles["copy-div"]} ${isCopy ? styles["copy"] : styles["hidden"]}`}>Email copiado com sucesso!</div>
        </Section >
    );
}