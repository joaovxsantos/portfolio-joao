import styles from './Header.module.scss'

export function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-content"]}>
                <a href="#hero" className={styles["logo"]}>João Vitor</a>
                <nav className={styles["nav-desktop"]}>
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#experience">Experiência</a></li>
                        <li><a href="#contact" className={styles["contact-btn"]}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}