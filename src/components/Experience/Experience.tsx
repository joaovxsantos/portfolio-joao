import { Section } from "../Section/Section";
import styles from './Experience.module.scss'


export function Experience() {
    return (
        <Section title="Experiência">
            <div className={styles["timeline-container"]}>
                <div className={styles["timeline-line"]}></div>
                <div className={`${styles["timeline-item"]} ${styles["scroll-reveal"]}`}>
                    <div className={styles["timeline-dot"]}>1</div>
                    <div className={styles["timeline-content-wrapper"]}>
                        <div className={styles["timeline-content"]}>
                            <p className={styles["date"]}>2020 - Presente</p>
                            <h3>Desenvolvedor Sênior, Empresa X</h3>
                            <p>
                                Liderei o desenvolvimento de múltiplos projetos, otimizando a
                                performance e a experiência do usuário.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles["timeline-item"]} ${styles["scroll-reveal"]}`}>
                    <div className={styles["timeline-dot"]}>2</div>
                    <div className={styles["timeline-content-wrapper"]}>
                        <div className={styles["timeline-content"]}>
                            <p className={styles["date"]}>2018 - 2020</p>
                            <h3>Desenvolvedor Pleno, Empresa Y</h3>
                            <p>
                                Participei ativamente no ciclo de vida completo de desenvolvimento de
                                software, desde o conceito até a implantação.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles["timeline-item"]} ${styles["scroll-reveal"]}`}>
                    <div className={`${styles["timeline-dot"]} ${styles["education"]}`}>3</div>
                    <div className={styles["timeline-content-wrapper"]}>
                        <div className={styles["timeline-content"]}>
                            <p className={`${styles["date"]} ${styles["education"]}`}>
                                2014 - 2018
                            </p>
                            <h3>Bacharelado em Ciência da Computação</h3>
                            <p>
                                Universidade Z. Foco em desenvolvimento de software e inteligência
                                artificial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}