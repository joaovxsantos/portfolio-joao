import styles from './Card.module.scss'
import type { cardType } from '../../types'

export function Card({ image, title, description }: cardType) {
    return (
        <div className={styles["card-container"]}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>View</button>
        </div>
    )
}