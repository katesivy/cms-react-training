import React, {useContext, useEffect, useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Button.module.css'
import { AppContext } from '../state/PageWrapper'
import Comic from './Comic'


type Thumbnail = {
    path: string,
    extension: string,
    id? : number
}

type Props = {
    comic: {
      favStatus: boolean
      isFavorite: boolean,
      id: string; 
      title: string;
      issueNumber: number; 
      creators: string[] | undefined; 
      thumbnail: Thumbnail; 
      characters: {};
      dates?: string | undefined;
    }
    comicClass: string
}

export default function Button ({comic }: Props) {
    const { favArray, setFavArray, toggleFavorite, isFavorite,  storageFavs, setStorageFavs }  = useContext(AppContext);
    const buttonRef = useRef();

  
    useEffect(() => {
        let storageArray = localStorage ? JSON.parse(localStorage.getItem('favorites')) : []
        let favs = storageArray ? storageArray : []
        setFavArray(favs)
    }, [])


    const FavButtons = () => {
            return (
                <div>
                { 
                    comic.favStatus == true ?
                       (
                            <button className={styles.iconContainer} ref={buttonRef}
                            style={{ backgroundColor : '#C24868', border : '#C24868' }}
                            onClick={handleClick}
                            >
                            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
                        </button>
                        )
                     : 
                       (
                            <button className={styles.iconContainer} ref={buttonRef}
                            style={{ backgroundColor : '#222222', border : '#222222'  }}
                            onClick={handleClick}
                            >
                            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
                        </button>
                        )
                    
                }
                </div>
        )
    }

  

    const handleClick = () => {
        const result = storageFavs.find(({ id }) => id === comic.id);
        const index = storageFavs.findIndex(e => e.id === comic.id);
 
        if ((result) ) {
            comic.favStatus = false;
            console.log('ref', buttonRef.current)
            favArray.splice(index, 1)
            localStorage.setItem('favorites', JSON.stringify(favArray))
        } else if (favArray.length < 10) {
            comic.favStatus = true;
            console.log('ref', buttonRef.current)
            favArray.push(comic)
            let newArray = favArray;
            setFavArray(newArray)
            localStorage.setItem('favorites', JSON.stringify(newArray))
        }
        toggleFavorite()
    }
   
    return (
        <>
            <FavButtons /> 
        </>
    )
}