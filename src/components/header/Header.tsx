import styles from './Header.module.scss'

export function Header() {
    return (
        <header className={styles["header-container"]}>
            <ul className={styles["header-links"]}>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </header>
    )
}