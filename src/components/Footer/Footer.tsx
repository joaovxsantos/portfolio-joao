import styles from './Footer.module.scss'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles["footer-content"]}>
                    <div className={styles.copyright}>
                        &copy; 2024 Seu Nome. Todos os direitos reservados.
                    </div>
                    <div className={styles["social-icons"]}>
                        <a href="https://www.linkedin.com/in/joao-vx/" aria-label="LinkedIn" target='_blank'>
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/joaovxsantos" aria-label="GitHub" target='_blank'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}