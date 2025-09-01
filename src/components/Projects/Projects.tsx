import { Section } from '../Section/Section'
import styles from './Projects.module.scss'
import { data } from '../../data'

export function Projects() {
    return (

        <Section title='Meus Projetos' id='projects'>
            <div className={styles["projects-grid"]}>
                {
                    data.projects.map(({ title, description, image, technologies, link }) => {
                        return <>
                            <div className={`${styles["project-card"]} ${styles["scroll-reveal"]}`}>
                                <img
                                    src={image}
                                    alt="Projeto 1"
                                />
                                <div className={styles["project-card-content"]}>
                                    <h3>{title}</h3>
                                    <p>
                                        {description}
                                    </p>
                                    <div className={styles["project-tags"]}>
                                        {
                                            technologies.map(tech => <span>{tech}</span>)
                                        }
                                    </div>
                                    <a href={link} className={styles["project-link"]}>
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