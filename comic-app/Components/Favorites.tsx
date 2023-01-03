import React, {useContext, useEffect, useState} from "react";
import styles from '../styles/Favorites.module.css';
import { AppContext } from "../state/PageWrapper";
import Image from "next/image";


export default function Favorites () {
    const { favArray, setFavArray, isFavorite, toggleFavorite, storageFavs, setStorageFavs }  = useContext(AppContext);
    const [list, setList] = useState([]);

    const myLoader = ({ src, width, quality }: LoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

    
    const removeFavorite = (storageArray) => {
   
        // let favs = storageFavs ? storageFavs : []
        // setFavArray(favs)
        // console.log('remove this', '-', comic.favStatus, '-', comic.title)
        console.log('storageFavs', storageFavs, 'favArray', favArray, 'storageArray', storageArray)
        // comic.favStatus = false;
        // let existingComic = storageFavs.includes(comic) 
        // console.log('existing', existingComic)

        // const result = storageFavs.find(({ id }) => id === comic.id);
        // console.log('result', result);

        // const index = storageFavs.findIndex(e => e.id === comic.id);
        //     if (index > -1) {
        //         console.log('index found', comic)
        //     } else {
        //         console.log('index not found')
        //     }
        // // console.log('index', index)
 
        // if ((result) ) {
        //     console.log('in existing storageFavs', comic)
        //     storageFavs.splice(index, 1)
        //     localStorage.setItem('favorites', JSON.stringify(storageFavs))
        // }
        toggleFavorite()
    }
    
    useEffect(() => {
        let storageArray = localStorage ? JSON.parse(localStorage.getItem('favorites')) : []
        setStorageFavs(storageArray)
        setFavArray(storageArray)
        // console.log('storageArray', storageArray , 'storage', storageFavs)
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
                <button onClick={()=> removeFavorite()}>X</button>
                <div key={index} className={styles.favDiv} >
                    {image}
                    <div className={styles.content}>
                        {splitTitle}<br />
                        Issue: {comic.issueNumber}
                    </div>
                </div>
                </>
            )
        }) : []
        setList(favs)
    }, [isFavorite])
    
    // console.log('storage', storageFavs)
   
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