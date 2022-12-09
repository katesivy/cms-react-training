import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt, faTachographDigital } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Button.module.css'
import { useToggleFavorites } from '../hooks/useToggleFavorites'
import { useCountFavs } from '../hooks/useCountFavs'
import { AppContext } from '../state/PageWrapper'


type Props = {
    comic: {
      isFavorite: boolean,
      id: number; 
      title: string | undefined;
      issueNumber: number; 
      creators: string[] | undefined; 
      thumbnail: Thumbnail; 
      characters: {};
      dates?: Dates | undefined;
      newDate: string;
    }
}

export default function Button ({comic}: Props) {
    const {isFavorite, setIsFavorite, toggleFavorite, comicStatus, favArray}  = useContext(AppContext);
  
    const handleClick = () => {
        setIsFavorite((comicStatus: any) => !comicStatus)
        comic.isFavorite = comicStatus
    }

    return (
<>
        <button className={styles.iconContainer}
            onClick={() => {toggleFavorite(), handleClick()}}
        >
            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
        </button>
       
     
        </>
    )
}