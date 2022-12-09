import React, {useContext, useState} from "react";
import useFetch from '../hooks/useFetch';
import Button from "./Button";
import styles from '../styles/Favorites.module.css';
import { useToggleFavorites } from "../hooks/useToggleFavorites";
import { AppContext } from "../state/PageWrapper";

// type Props = {
//     filter: String;
//     setFilter(text:string): String | void;
// }


export default function Favorites () {
    const { comics } = useFetch();
    const {isFavorite, setIsFavorite, toggleFavorite, comicStatus, favArray}  = useContext(AppContext);
    console.log('favArray', favArray)

    return (
        <div className={styles.favBox}>
            <h2 className={styles.title}>Favorites</h2>
            <div className={styles.list}>
              <ul>
              {favArray}
                </ul>
            </div>
        </div>
    )
}