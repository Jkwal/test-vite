import {FC} from "react";
import styles from './Card.module.scss';

interface CardProps {
    number: number;
}

const Card: FC<CardProps> = ({number}) => {
    return (
        <div className={styles.card}>
            <h4>Карточка {number}</h4>
            <button className={styles.button}>Кнопка</button>
        </div>
    )
}

export default Card;