import styles from './Main.module.scss'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Card } from '../card/Card';


export function Main() {
    return (
        <main className={styles["main-container"]}>
            <div className={styles["main-content"]}>
                <div className={styles["main-apresentation"]}>
                    <h1 className={styles["principal-title"]}>João Vitor Xavier</h1>
                    <label className={styles["label-title"]} style={{ color: '#9ca3af' }}>Full-Stack Developer</label>
                    <p>I build web applications using modern JavaScript Frameworks.</p>
                    <button>View my projects</button>
                </div>
                <div className={styles["main-about-me"]} id="about">
                    <h2>About me</h2>
                    <p>I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focuses on ReactJS.</p>
                </div>
                <div className={styles["main-projects"]} id="projects">
                    <h2>Projects</h2>
                    <div className={styles["projects-content"]}>
                        <Card title='Project One' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' image='src' />
                        <Card title='Project One' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' image='src' />
                        <Card title='Project One' description='lorem ipsum dolor sit amet, consectetur adipiscing elit.' image='src' />
                    </div>
                </div>
                <div className={styles["main-contact"]} id="contact">
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <MdEmail className={styles["contact-icon"]} />
                            <a target='_blank' className={styles["email"]}>joaovitor55670@gmail.com</a>
                        </li>
                        <li>
                            <FaGithub className={styles["contact-icon"]} />
                            <a target='_blank' href="https://github.com/joaovxsantos">github.com/joaovxsantos</a>
                        </li>
                        <li>
                            <FaLinkedinIn className={styles["contact-icon"]} />
                            <a target='_blank' href="https://www.linkedin.com/in/joao-vx/">linkedin.com/in/joao-vx</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}