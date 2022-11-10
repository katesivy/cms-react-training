import Button from "./Button"
import styles from '../styles/Detail.module.css'

export default function Detail({comic, title, newDate}) {

    const creators = comic.creators.available > 0 ? comic.creators.items.map((item)=>{
        return (
            item.name
        )
    }) : []
// console.log(comic)
    // console.log(creators)
    const formattedCreators = creators.length > 1 ? creators.map((item) =>{
        return (
            item + ', '
        )
    }) : creators

    const reversedCreators = typeof(formattedCreators)
    // console.log(reversedCreators)
    return (

        <div>
            <Button />
            <div className={styles.card}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.innerText}>
                    <p className={styles.heading}>Issue: 
                    <span className={styles.span}> {comic.issueNumber}</span></p>
                    <p className={styles.heading}>Published: </p>
                    <span className={styles.span}> {newDate}</span> 
                    <p className={styles.heading}>Creators: </p>
                    <span className={styles.span}> {formattedCreators}</span>
                </div>
             </div>
        </div>
    )
}