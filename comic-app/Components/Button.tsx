import React, {useContext, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Button.module.css'
import { AppContext } from '../state/PageWrapper'


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
    const { favArray, setFavArray, toggleFavorite, isFavorite }  = useContext(AppContext);
    const ref = useRef();

    useEffect(() => {
        let storageArray = localStorage ? JSON.parse(localStorage.getItem('favorites')) : []
        let favs = storageArray ? storageArray : []
        // console.log('favs', favs)
        
            // console.log('comic', comic, 'ref', ref.current)
            // ref.current.style.backgroundColor='#C24868';
       
    }, [])

    const handleClick = () => {
            let existing = favArray.includes(comic)
            if (existing) {
                let newArray = favArray.filter(item => item !== comic)
                setFavArray(newArray)
                localStorage.setItem('favorites', JSON.stringify(newArray))
                ref.current.style.backgroundColor = '#222222';
                ref.current.style.border = 'solid #222222';
            } else if (favArray.length < 10) {
                favArray.push(comic)
                let newArray = favArray;
                setFavArray(newArray)
                localStorage.setItem('favorites', JSON.stringify(newArray))
                ref.current.style.backgroundColor = '#C24868';
                ref.current.style.border ='solid #C24868';
            }
            toggleFavorite()
    }
   
    return (
        <>
        <button className={styles.iconContainer} ref={ref}
            onClick={handleClick}
        >
            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
        </button>
       
     
        </>
    )
}