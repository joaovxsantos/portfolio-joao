import { Section } from '../Section/Section'
import styles from './Projects.module.scss'

export function Projects() {
    return (

        <Section title='Meus Projetos'>
            <div className={styles["projects-grid"]}>
                <div className={`${styles["project-card"]} ${styles["scroll-reveal"]}`}>
                    <img
                        src="https://placehold.co/600x400/1f2937/FFFFFF?text=Projeto+1"
                        alt="Projeto 1"
                    />
                    <div className={styles["project-card-content"]}>
                        <h3>Nome do Projeto 1</h3>
                        <p>
                            Uma breve descrição do projeto, destacando o problema que ele resolve e
                            as tecnologias utilizadas.
                        </p>
                        <div className={styles["project-tags"]}>
                            <span>React</span>
                            <span style={{ backgroundColor: "rgba(139, 92, 246, 0.2)", color: "#c4b5fd" }}>
                                API REST
                            </span>
                        </div>
                        <a href="#" className={styles["project-link"]}>
                            Ver Projeto →
                        </a>
                    </div>
                </div>

                <div className={`${styles["project-card"]} ${styles["scroll-reveal"]}`}>
                    <img
                        src="https://placehold.co/600x400/1f2937/FFFFFF?text=Projeto+2"
                        alt="Projeto 2"
                    />
                    <div className={styles["project-card-content"]}>
                        <h3>Nome do Projeto 2</h3>
                        <p>
                            Uma breve descrição do projeto, destacando o problema que ele resolve e
                            as tecnologias utilizadas.
                        </p>
                        <div className={styles["project-tags"]}>
                            <span style={{ backgroundColor: "rgba(34, 197, 94, 0.2)", color: "#86efac" }}>
                                Vue.js
                            </span>
                            <span style={{ backgroundColor: "rgba(234, 179, 8, 0.2)", color: "#fde047" }}>
                                Firebase
                            </span>
                        </div>
                        <a href="#" className={styles["project-link"]}>
                            Ver Projeto →
                        </a>
                    </div>
                </div>

                <div className={`${styles["project-card"]} ${styles["scroll-reveal"]}`}>
                    <img
                        src="https://placehold.co/600x400/1f2937/FFFFFF?text=Projeto+3"
                        alt="Projeto 3"
                    />
                    <div className={styles["project-card-content"]}>
                        <h3>Nome do Projeto 3</h3>
                        <p>
                            Uma breve descrição do projeto, destacando o problema que ele resolve e
                            as tecnologias utilizadas.
                        </p>
                        <div className={styles["project-tags"]}>
                            <span style={{ backgroundColor: "rgba(236, 72, 153, 0.2)", color: "#f9a8d4" }}>
                                UI/UX
                            </span>
                            <span style={{ backgroundColor: "rgba(99, 102, 241, 0.2)", color: "#a5b4fc" }}>
                                Figma
                            </span>
                        </div>
                        <a href="#" className={styles["project-link"]}>
                            Ver Projeto →
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )

}