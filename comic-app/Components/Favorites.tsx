import React, {useContext, useEffect, useState} from "react";
import styles from '../styles/Favorites.module.css';
import { AppContext } from "../state/PageWrapper";
import Image from "next/image";


export default function Favorites () {
    const { isFavorite, toggleFavorite, storageFavs, setStorageFavs }  = useContext(AppContext);
    const [list, setList] = useState([]);
    // const [storageFavs, setStorageFavs] = useState();

    const myLoader = ({ src, width, quality }: LoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

    
    const removeFavorite = (comic) => {
        console.log('remove this', '-', comic.favStatus, '-', comic.title)
        console.log('storageFavs', storageFavs)
        comic.favStatus = false;
        let existingComic = storageFavs.includes(comic) 
        console.log('existing', existingComic)
        // let ids = storageFavs.map(item => {
        //     return item.id
        // })
        // let existingId = ids.includes(comic.id)
        // console.log('existing', existingId)
        // let newArray = ids.filter(item => item.id != comic.id)
        // console.log('new array', newArray)
        // setStorageFavs(newArray)
        // localStorage.setItem('favorites', JSON.stringify(newArray))

        // let favs = newArray ? newArray.map((comic, index) => {
        //     console.log('newArray comic', comic)
        //     const path: string = comic.thumbnail.path + '.'
        //     const extenstion: string = comic.thumbnail.extension 
        //     const imgSrc: string = path + extenstion
        //     const image: any =
        //         <Image className={styles.image}
        //             loader={myLoader}
        //             src={imgSrc}
        //             alt={comic.id}
        //             width={70}
        //             height={90}
        //         />
            
        //     const splitTitle = comic.title.split('(')[0];
            
        //     return (
        //         <>
        //         <button onClick={()=> removeFavorite(comic)}>X</button>
        //         <div key={index} className={styles.favDiv} >
        //             {image}
        //             <div className={styles.content}>
        //                 {splitTitle}<br />
        //                 Issue: {comic.issueNumber}
        //             </div>
        //         </div>
        //         </>
        //     )
        // }) : []
        // setList(favs)
        // toggleFavorite()
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
                <button onClick={()=> removeFavorite(comic)}>X</button>
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
    
    console.log('storage', storageFavs)
   
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