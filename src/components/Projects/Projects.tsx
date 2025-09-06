import { Section } from '../Section/Section'
import styles from './Projects.module.scss'
import { data } from '../../data'

export function Projects() {
    return (

        <Section title='Meus Projetos' id='projects'>
            <div className={styles["projects-grid"]}>
                {
                    data.projects.map(({ title, description, technologies, link }) => {
                        return <>
                            <div className={`${styles["project-card"]} ${styles["scroll-reveal"]}`}>

                                <div className={styles["project-card-content"]}>
                                    <h3>{title}</h3>
                                    <p>
                                        {description}
                                    </p>
                                    <div className={styles["project-tags"]}>
                                        {
                                            technologies.map(tech => <span style={{ color: data.colors[tech as keyof typeof data.colors], backgroundColor: data.bg[tech as keyof typeof data.bg] }}>{tech}</span>)
                                        }
                                    </div>
                                    <a href={link} className={styles["project-link"]} target='_blank'>
                                        Ver Projeto →
                                    </a>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </Section>
    )

}