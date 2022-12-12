import React, {useContext, useEffect} from "react";
import styles from '../styles/Favorites.module.css';
import { AppContext } from "../state/PageWrapper";
import useFetch from "../hooks/useFetch";


export default function Favorites () {
    const { favArray, setFavArray, comicStatus }  = useContext(AppContext);
    // const favorites = localStorage.getItem('favorites')
    // console.log(favorites)
    // console.log('array', favArray)
    // const list = favorites.map((item: string[], index: any) => { 
    //     return (
    //         <li key={index}>{item}</li>
    //     )
    // })
    
    useEffect(() => {
        console.log('favs', favArray)
        let storedArray: string | never[] | null  = favArray.length ? localStorage.getItem('favorites') : [];
        console.log('storedArray', storedArray)
        setFavArray(storedArray)
       
        console.log('storedArray', favArray)
    }, [comicStatus])
    
    const list = favArray.map(comic => {
        return (
            <li>{comic}</li>
        )
    })
   

    return (
        <div className={styles.favBox}>
            <h2 className={styles.title}>Favorites</h2>
            <div className={styles.list}>
                <ul>
                <li >{list}</li>
                </ul>
            </div>
        </div>
    )
}