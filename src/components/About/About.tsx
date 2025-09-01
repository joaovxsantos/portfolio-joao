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
                        <p>Sou desenvolvedor <strong>front-end</strong> com experiência em desenvolvimento web, especialmente com <strong>React</strong> e <strong>TypeScript.</strong> Ao longo da minha trajetória, venho aprimorando habilidades técnicas em tecnologias como <strong>SCSS, Java, Node e Git</strong>, sempre com foco em escrever código limpo e manter boas práticas de versionamento.
                        </p>
                        <h3>Minhas Habilidades</h3>
                        <div className={styles["skills-list"]}>
                            <span className={styles["skill-badge"]}>React</span>
                            <span className={styles["skill-badge"]}>TypeScript</span>
                            <span className={styles["skill-badge"]}>Tailwind CSS</span>
                            <span className={styles["skill-badge"]}>CSS Modules</span>
                            <span className={styles["skill-badge"]}>Node.js</span>
                            <span className={styles["skill-badge"]}>VTEX</span>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}