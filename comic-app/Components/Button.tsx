import React, {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt, faTachographDigital } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Button.module.css'
import { useToggleFavorites } from '../hooks/useToggleFavorites'
import { useCountFavs } from '../hooks/useCountFavs'
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
    const { favArray, isFavorite, setIsFavorite }  = useContext(AppContext);
    // const [isFavorite, setIsFavorite] = useState<boolean>(true);
    const handleClick = (isFavorite: boolean) => {
        setIsFavorite( (isFavorite: any) => !isFavorite)
        comic.isFavorite = isFavorite
        console.log('clicked title:', comic.title, comic.isFavorite)
       
    }

    useEffect(() => {
        if ((comic.isFavorite  == true) && (favArray.length <= 9)) {
          console.log('adding title', comic.title, comic.isFavorite)
          favArray.push(comic.title)
        }
        localStorage.setItem('favorites', JSON.stringify(favArray))
        // if (comic.isFavorite  !== true) {
        //     // console.log('removing title', comic.title)
        //     favArray.splice(comic.title)
        // }
        // console.log('favArray', favArray)
        // localStorage.setItem('favorites', JSON.stringify(favArray))
      }, [isFavorite])
   
    console.log('array', favArray)
    return (
<>
        <button className={styles.iconContainer}
            onClick={() => {handleClick(isFavorite)}}
        >
            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
        </button>
       
     
        </>
    )
}