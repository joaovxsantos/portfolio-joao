import { Section } from '../Section/Section'
import styles from './About.module.scss'
import { data } from '../../data'
import joaoimg from '../../assets/foto.jpg'

export function About() {

    return (
        <>
            <Section title='Sobre mim' id='about'>
                <div className={styles["about-grid"]}>
                    <div className={`${styles["about-image"]} `}>
                        <img src={joaoimg} alt="Minha Foto" />
                    </div>
                    <div className={`${styles["about-text"]} `}>
                        <p>Sou desenvolvedor <strong>front-end</strong> com experiência em desenvolvimento web, especialmente com <strong>React</strong> e <strong>TypeScript.</strong> Ao longo da minha trajetória, venho aprimorando habilidades técnicas em tecnologias como <strong>SCSS, Java, Node e Git</strong>, sempre com foco em escrever código limpo e manter boas práticas de versionamento.
                        </p>
                        <h3>Minhas Habilidades</h3>
                        <div className={styles["skills-list"]}>
                            {
                                data.technologies.map((tech) => {
                                    return <>
                                        <span className={styles["skill-badge"]} style={{ color: data.colors[tech as keyof typeof data.colors], backgroundColor: data.bg[tech as keyof typeof data.bg] }}>{tech}</span>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}