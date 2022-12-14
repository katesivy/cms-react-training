import React, {useContext, useRef} from 'react'
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
    const { favArray, setFavArray, toggleFavorite }  = useContext(AppContext);
    const ref = useRef();
    
    const handleClick = () => {
        if (favArray.length < 10) {
            let existing = favArray.includes(comic)
            if (existing) {
                let newArray = favArray.filter(item => item !== comic)
                setFavArray(newArray)
                localStorage.setItem('favorites', JSON.stringify(newArray))
            } else {
                favArray.push(comic)
                let newArray = favArray;
                setFavArray(newArray)
                localStorage.setItem('favorites', JSON.stringify(newArray))
                ref.current.classList.add('favorite')
                console.log('class', ref.current.className)
            }
            toggleFavorite()
        }
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