import Button from "./Button"
import styles from '../styles/Detail.module.css'
import React from "react"

type Thumbnail = {
    path: string,
    extension: string,
    id? : number
}

type Items = {
    resourceURI?: string;
    name?: string
}[]

type CreatorsObj = {
    available: number;
    collectionURI: string;
    returned: number;
    items: Items;
}

type Props = {
    comic: {
      issueNumber: number;
      creators: CreatorsObj;
      id: number;
      thumbnail: Thumbnail;
    }
    title: string,
    newDate: string,
}

export default function Detail({comic, title, newDate}: Props) {

    const creators: (string | undefined)[] = comic.creators.available > 0 ? comic.creators.items.map((item)=>{
        return (
            item.name
        )
    }) : ['none listed']

    let singleCreator: string[] = [];
    let multipleCreators: string[] = [];
    let lastCreator: string[] = [];

    for (let i = 0; i < creators.length; i++) {
        const last = creators.length - 1

        if (creators[i] === creators[last]) {
            lastCreator.push(creators[i])
        } else if (creators.length === 1) {
                singleCreator.push(creators[i])
        } else if ((creators.length > 1) ) {
            multipleCreators.push(creators[i] + ', ')
        } 
    }
    let formattedCreators: string[] = [...singleCreator, ...multipleCreators, ...lastCreator]

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