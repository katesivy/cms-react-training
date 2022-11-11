import Button from "./Button.tsx"
import styles from '../styles/Detail.module.css'

export default function Detail({comic, title, newDate}) {

    const creators = comic.creators.available > 0 ? comic.creators.items.map((item)=>{
        return (
            item.name
        )
    }) : ['none']

    let singleCreator = [];
    let multipleCreators = [];
    let lastCreator = [];

    for (let i = 0; i < creators.length; i++) {
        const lastI = creators.length - 1

        if (creators[i] === creators[lastI]) {
            lastCreator.push(creators[i])
        } else if (creators.length === 1) {
                singleCreator.push(creators[i])
        } else if ((creators.length > 1) ) {
            multipleCreators.push(creators[i] + ', ')
        } 
    }
    let formattedCreators = [...singleCreator, ...multipleCreators, ...lastCreator]

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