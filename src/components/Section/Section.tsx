import styles from './Section.module.scss'

type SectionProps = {
    children?: React.ReactNode;
    title: string;
    id?: string;
}

export function Section({ children, title, id = 'default' }: SectionProps) {
    return (
        <section className={id} id={id}>
            <div className={`${styles["container"]} container--${id}`}>
                <div className={`${styles["section-title"]} ${styles["scroll-reveal"]} ${id}`}>
                    <h2 className={`${id}-title`}>{title}</h2>
                    <div className={styles["undeline"]}></div>
                </div>
                {children}
            </div>
        </section>
    )
}