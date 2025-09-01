import { Section } from "../Section/Section";
import styles from './Experience.module.scss'


export function Experience() {
    return (
        <Section title="Experiência" id="experience">
            <div className={styles["timeline-container"]}>
                <div className={styles["timeline-line"]}></div>
                <div className={`${styles["timeline-item"]} ${styles["scroll-reveal"]}`}>
                    <div className={styles["timeline-content-wrapper"]}>
                        <div className={styles["timeline-content"]}>
                            <p className={styles["date"]}>11/2024 - Até o momento</p>
                            <h3>Desenvolvedor Junior, DBC Company</h3>
                            <p className={styles["timeline-description"]}>
                                Alocado no cliente Usaflex, atuo como desenvolvedor front-end utilizando React com TypeScript, aplicando boas práticas de componentização e tipagem forte. Também utlizo CSS Modules, garantindo organização e escopo de estilos, além de trabalhar no ecossistema da VTEX IO, desenvolvendo e personalizando lojas virtuais, criando componentes reutilizáveis e ajustando funcionalidades para atender demandas de e-commerce.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles["timeline-item"]} ${styles["scroll-reveal"]}`}>
                    <div className={styles["timeline-content-wrapper"]}>
                        <div className={styles["timeline-content"]}>
                            <p className={styles["date"]}>05/2024 - 11/2024</p>
                            <h3>Estagiário FullStack, DBC Company</h3>
                            <p className={styles["timeline-description"]}>
                                Participei do time de Fullstack, onde desenvolvi as seguintes competências: Docker, Java com orientação à objetos, banco de dados oracle, spring Web, data e security, testes unitários, HTML/CSS, Javascript e Typescript, React, Context API e Redux, e Ttyled Components.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles["timeline-item"]} ${styles["scroll-reveal"]}`}>
                    <div className={styles["timeline-content-wrapper"]}>
                        <div className={styles["timeline-content"]}>
                            <p className={`${styles["date"]} ${styles["education"]}`}>
                                2022 - 2024
                            </p>
                            <h3>Tecnologo em Análise e Desenvolvimento de Sistemas</h3>
                            <p className={styles["timeline-description"]}>
                                Formado em Análise e Desenvolvimento de Sistemas, pela faculdade Anhanguera Educacional
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}