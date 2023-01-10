import React, { useContext, useEffect, useState } from "react";
import styles from '../styles/Favorites.module.css';
import { AppContext } from "../state/PageWrapper";
import Image from "next/image";
import { Root } from "./Interfaces";

type LoaderProps = {
    src: string,
    width: number | string,
    quality?: number | string | undefined, 
    alt?: number,
}

export default function Favorites () {
    const { isFavorite, toggleFavorite, storageFavs, setStorageFavs, windowSize, setWindowSize }  = useContext(AppContext);
    const [list, setList] = useState<JSX.Element[] | undefined>([]);

    const myLoader = ({ src, width, quality }: LoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    const removeFavorite = (comic: Root, storageArray: any[]) => {
        const result = storageFavs ? storageFavs.find(({ id }: any) => id === comic.id) : storageArray.find(({ id }) => id === comic.id);
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
        let local: string | null = window.localStorage ? window.localStorage.getItem('favorites') : '';
        let storageArray: Root[] = local ? JSON.parse(local) : [];
        // let favs: Favs[] = storageArray.length ? storageArray : [];
        // let storageArray: Root[] = localStorage ? JSON.parse(localStorage.getItem('favorites') || "") : []
        setStorageFavs(storageArray)
        let favs: JSX.Element[] = storageArray.length ? storageArray.map((comic, index: number) => {
            const path: {} = comic.thumbnail.path + '.'
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