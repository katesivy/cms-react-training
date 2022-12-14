import React, {useContext, useEffect, useState} from "react";
import styles from '../styles/Favorites.module.css';
import { AppContext } from "../state/PageWrapper";
import Image from "next/image";


export default function Favorites () {
    const { isFavorite }  = useContext(AppContext);
    const [list, setList] = useState([]);

    const myLoader = ({ src, width, quality }: LoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
    
      
      
      useEffect(() => {
        let storageArray = localStorage ? JSON.parse(localStorage.getItem('favorites')) : []
        let favs = storageArray ? storageArray.map((comic, index) => {
            const path: string = comic.thumbnail.path + '.'
            const extenstion: string = comic.thumbnail.extension 
            const imgSrc: string = path + extenstion
            const image: any =
                <Image className={styles.image}
                loader={myLoader}
                src={imgSrc}
                alt={comic.id}
                width={200}
                height={300}
                />
            return (
                <li key={index}>
                    {comic.title}<br />
                    Issue: {comic.issueNumber}
                </li>
            )
        }) : []
        setList(favs)
    }, [isFavorite])
    
   
    return (
        <div className={styles.favBox}>
            <h2 className={styles.title}>Favorites</h2>
            <div className={styles.list}>
                <ul>
                {list}
                </ul>
            </div>
        </div>
    )
}