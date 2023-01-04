import React, {useContext, useEffect, useState} from "react";
import styles from '../styles/Favorites.module.css';
import { AppContext } from "../state/PageWrapper";
import Image from "next/image";


export default function Favorites () {
    const { isFavorite, toggleFavorite, storageFavs, setStorageFavs }  = useContext(AppContext);
    const [list, setList] = useState([]);

    const myLoader = ({ src, width, quality }: LoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

    const removeFavorite = (comic, storageArray) => {
        const result = storageFavs ? storageFavs.find(({ id }) => id === comic.id) : storageArray.find(({ id }) => id === comic.id);
        const index = storageFavs ?  storageFavs.findIndex(e => e.id === comic.id) : storageArray.findIndex(e => e.id === comic.id);
        if ((result) ) {
            if (storageFavs) {
                storageFavs.splice(index, 1) 
                setStorageFavs(storageFavs)
                localStorage.setItem('favorites', JSON.stringify(storageFavs))
             } else {
                storageArray.splice(index, 1)
                setStorageFavs(storageArray)
                localStorage.setItem('favorites', JSON.stringify(storageArray))
             }
        }
        toggleFavorite()
    }
    
    useEffect(() => {
        let storageArray = localStorage ? JSON.parse(localStorage.getItem('favorites')) : []
        setStorageFavs(storageArray)
        let favs = storageArray ? storageArray.map((comic, index) => {
            const path: string = comic.thumbnail.path + '.'
            const extenstion: string = comic.thumbnail.extension 
            const imgSrc: string = path + extenstion
            const image: any =
                <Image className={styles.image}
                    loader={myLoader}
                    src={imgSrc}
                    alt={comic.id}
                    width={70}
                    height={90}
                />
            const splitTitle = comic.title.split('(')[0];
            
            return (
                <>
                <div className={styles.xBtnContainer}>
                    <button className={styles.xBtn} onClick={()=> removeFavorite(comic, storageArray)}>X</button>
                    <div key={index} className={styles.favDiv} >
                        {image}
                        <div className={styles.content}>
                            {splitTitle}<br />
                            Issue: {comic.issueNumber}
                        </div>
                    </div>
                </div>
                </>
            )
        }) : []
        setList(favs)
    }, [isFavorite])

    return (
        <div className={styles.favBox}>
            <h2 className={styles.title}>Favorites</h2>
            <div className={styles.list}>
                <ul className={styles.ul}>
                    {list}
                </ul>
            </div>
        </div>
    )
}