import styles from './Section.module.scss'
import { useScrollReveal } from '../../hooks/useScrollReveal'


type SectionProps = {
    children?: React.ReactNode;
    title: string;
    id?: string;
}

export function Section({ children, title, id = 'default' }: SectionProps) {
    const elementRef = useScrollReveal()

    return (
        <section className='scroll-reveal' id={id} ref={elementRef}>
            <div className={`${styles["container"]} container--${id}`} >
                <div className={`${styles["section-title"]} ${styles["scroll-reveal"]} ${id}`}>
                    <h2 className={`${id}-title`}>{title}</h2>
                    <div className={styles["undeline"]}></div>
                </div>
                {children}
            </div>
        </section>
    )
}