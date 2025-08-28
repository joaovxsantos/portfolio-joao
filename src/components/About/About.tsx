import { Section } from '../Section/Section'
import styles from './About.module.scss'

export function About() {
    return (
        <>
            <Section title='Sobre mim' id='about'>
                <div className={styles["about-grid"]}>
                    <div className={`${styles["about-image"]} `}>
                        <img src="https://placehold.co/400x400/1f2937/FFFFFF?text=Foto" alt="Minha Foto" />
                    </div>
                    <div className={`${styles["about-text"]} `}>
                        <p>Sou um profissional apaixonado por tecnologia e design, com vasta experiência na criação de soluções digitais inovadoras. Meu foco é combinar funcionalidade com estética para entregar produtos que não apenas funcionam bem, mas também encantam os usuários.</p>
                        <p>Fora do trabalho, gosto de explorar novas tecnologias, contribuir para projetos open-source e praticar fotografia.</p>
                        <h3>Minhas Habilidades</h3>
                        <div className={styles["skills-list"]}>
                            <span className={styles["skill-badge"]}>JavaScript</span>
                            <span className={styles["skill-badge"]}>React</span>
                            <span className={styles["skill-badge"]}>Node.js</span>
                            <span className={styles["skill-badge"]}>Tailwind CSS</span>
                            <span className={styles["skill-badge"]}>Figma</span>
                            <span className={styles["skill-badge"]}>SQL</span>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}