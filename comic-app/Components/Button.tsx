import React, {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt, faTachographDigital } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Button.module.css'
import { useToggleFavorites } from '../hooks/useToggleFavorites'
import { useCountFavs } from '../hooks/useCountFavs'
import { AppContext } from '../state/PageWrapper'
import FilteredComics from './FilteredComics'
import useFetch from '../hooks/useFetch'

type Thumbnail = {
    path: string,
    extension: string,
    id? : number
}

type Props = {
    comic: {
      isFavorite: boolean,
      id: string; 
      title: string;
      issueNumber: number; 
      creators: string[] | undefined; 
      thumbnail: Thumbnail; 
      characters: {};
      dates?: string | undefined;
    }
}

export default function Button ({comic}: Props) {
    const { favArray, setFavArray, toggleFavorite }  = useContext(AppContext);

    const handleClick = () => {
        if (favArray.length < 10) {
            let existing = favArray.includes(comic.id)
            if (existing) {
                let newArray = favArray.filter(item => item !== comic.id)
                setFavArray(newArray)
                localStorage.setItem('favorites', JSON.stringify(newArray))
            } else {
                favArray.push(comic.id)
                let newArray = favArray;
                setFavArray(newArray)
                localStorage.setItem('favorites', JSON.stringify(newArray))
            }
            toggleFavorite()
        }
    }
   
    return (
        <>
        <button className={styles.iconContainer}
            onClick={handleClick}
        >
            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
        </button>
       
     
        </>
    )
}