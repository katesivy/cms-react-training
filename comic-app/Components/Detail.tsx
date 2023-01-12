import React from "react"
import styles from '../styles/Detail.module.css'
import { Root } from "./Interfaces"
import { Karla } from '@next/font/google'

type Props = {
    comic: Root,
    title: string,
    newDate: string,
}

const karla = Karla({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function Detail({comic, title, newDate}: Props) {
    const creators: (string)[] = comic.creators.available > 0 ? comic.creators.items.map((item: { name: any })=>{
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
        <div >
            <div className={styles.card}>
                <h3 className={styles.title}>{title}</h3>
               <div className={karla.className}> <div className={styles.innerText} >
                    <p className={styles.heading}>Issue: 
                    <span className={styles.span}> {comic.issueNumber}</span></p>
                    <p className={styles.heading}>Published: </p>
                    <span className={styles.span}> {newDate}</span> 
                    <p className={styles.heading}>Creators: </p>
                    <span className={styles.span}> {formattedCreators}</span>
                </div>
                </div>
             </div>
        </div>
    )
}