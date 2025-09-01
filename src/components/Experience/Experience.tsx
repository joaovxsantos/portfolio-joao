import { Section } from "../Section/Section";
import styles from './Experience.module.scss'
import { data } from "../../data";


export function Experience() {
    return (
        <Section title="Experiência" id="experience">
            <div className={styles["timeline-container"]}>
                <div className={styles["timeline-line"]}></div>
                {
                    data.experience.map(({ title, data, description }) => {
                        return <>
                            <div className={`${styles["timeline-item"]} ${styles["scroll-reveal"]}`}>
                                <div className={styles["timeline-content-wrapper"]}>
                                    <div className={styles["timeline-content"]}>
                                        <p className={styles["date"]}>{data}</p>
                                        <h3>{title}</h3>
                                        <p className={styles["timeline-description"]}>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </Section>
    )
}