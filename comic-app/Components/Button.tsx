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

export default function Button ({comic, }: Props) {
    const { favArray, setFavArray, toggleFavorite, isFavorite, favStatus, setFavStatus, storageFavs, setStorageFavs }  = useContext(AppContext);
    // const [storageFavs, setStorageFavs] = useState();
    const buttonRef = useRef();

    useEffect(() => {
        let storageArray = localStorage ? JSON.parse(localStorage.getItem('favorites')) : []
        let favs = storageArray ? storageArray : []
        console.log('favs in useEffect', favs)
        setFavArray(favs)
        console.log('storageArray in useEffect', storageArray, 'favArray in useEffect', favArray)
    }, [])

    const FavButtons = () => {
        return (
            <button className={styles.iconContainer} ref={buttonRef}
                style={{ color: favStatus == true ? 'green' : 'red' }}
                onClick={()=>{handleClick()}}
            >
            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
            </button>
        )
    }

    const handleClick = () => {
        console.log('comic:', comic)
        console.log('favArray in click', favArray)
        console.log('storageFavs in click', storageFavs)

        const result = storageFavs.find(({ id }) => id === comic.id);
        console.log('result', result);

        const index = storageFavs.findIndex(e => e.id === comic.id);
            if (index > -1) {
                console.log('index found', comic)
            } else {
                console.log('index not found')
            }
        console.log('index', index)
 
        if ((result) ) {
            comic.favStatus = false;
            console.log('in existing', comic)
            favArray.splice(index, 1)
            localStorage.setItem('favorites', JSON.stringify(favArray))
            // buttonRef.current.className = 'unfavoriteButton'
            buttonRef.current.style.backgroundColor = '#222222';
            buttonRef.current.style.border = 'solid #222222';
        } else if (favArray.length < 10) {
            comic.favStatus = true;
            console.log('does not exist')
            favArray.push(comic)
            let newArray = favArray;
            setFavArray(newArray)
            localStorage.setItem('favorites', JSON.stringify(newArray))
            // buttonRef.current.className = 'iconContainer favoriteButton'
            buttonRef.current.style.backgroundColor = '#C24868';
            buttonRef.current.style.border ='solid #C24868';
        }
        toggleFavorite()
    }
   
    return (
        <>
        <FavButtons />
       
     
        </>
    )
}