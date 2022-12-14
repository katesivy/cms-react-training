import React, {useContext, useEffect, useState} from "react";
import styles from '../styles/Favorites.module.css';
import { AppContext } from "../state/PageWrapper";
import useFetch from "../hooks/useFetch";
import { setDefaultResultOrder } from "dns";


export default function Favorites () {
    const { isFavorite }  = useContext(AppContext);
    const [list, setList] = useState([]);

    useEffect(() => {
        let storageArray = localStorage ? JSON.parse(localStorage.getItem('favorites')) : []
        let favs = storageArray ? storageArray.map((comic, index) => {
            return (
                <li key={index}>{comic}</li>
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