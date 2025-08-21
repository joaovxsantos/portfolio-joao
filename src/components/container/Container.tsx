import styles from './Container.module.scss';
import { Header } from '../header/Header';
import { Main } from '../main/Main';

export function Container() {
    return (
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                <Header />
                <Main />
            </div>
        </div>
    )
}