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
                        <p>Texto carreira</p>
                        <p>Oq faço por fora</p>
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