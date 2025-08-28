import { Section } from "../Section/Section";
import styles from './Contact.module.scss'

export function Contact() {
    return (
        <Section title="Entre em contato comigo">
            <form
                action="#"
                method="POST"
                className={`${styles["contact-form"]} ${styles["scroll-reveal"]}`}
            >
                <div className={styles["form-group"]}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu Nome"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu E-mail"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Sua Mensagem"
                    rows={4}
                    required
                ></textarea>

                <button type="submit" className={styles["submit-btn"]}>
                    Enviar Mensagem
                </button>
            </form>

        </Section>
    )
}