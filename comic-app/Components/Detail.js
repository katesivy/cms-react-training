import Button from "./Button"
import styles from '../styles/Detail.module.css'

export default function Detail({comic, title, newDate}) {

    return (

        <div>
            <Button />
            <div className={styles.card}>
                <h3 className={styles.title}>{title[0]}</h3>
                <div className={styles.innerText}>
                    <p className={styles.heading}>Issue: 
                    <span className={styles.span}> {comic.issueNumber}</span></p>
                    <p className={styles.heading}>Published: </p>
                    <span className={styles.span}> {newDate}</span> 
                    <p className={styles.heading}>Creators: </p>
                    <span className={styles.span}> {comic.creators[0].name}</span>
                </div>
             </div>
        </div>
    )
}