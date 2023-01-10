import React, {useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Button.module.css'
import { AppContext } from '../state/PageWrapper'
import { Root, Favs } from './Interfaces'


type Props = {
    comic: Root
}

export default function Button ({comic }: Props) {
    const { toggleFavorite, storageFavs, setStorageFavs }  = useContext(AppContext);
 
    useEffect(() => {
        let local: string | null = window.localStorage ? window.localStorage.getItem('favorites') : '';
        let storageArray: Favs[] = local ? JSON.parse(local) : [];
        let favs: Favs[] = storageArray.length ? storageArray : [];
        setStorageFavs(favs);
    }, [])

     const handleClick = () => {
        const result: {} | undefined = storageFavs.find(({ id }: any) => id === comic.id);
        const index: number = storageFavs.findIndex(e => e.id === comic.id);

        if ((result) ) {
            comic.favStatus = false;
            storageFavs.splice(index, 1)
            localStorage.setItem('favorites', JSON.stringify(storageFavs))
        } else if (storageFavs.length < 10) {
            comic.favStatus = true;
            storageFavs.push(comic)
            let newArray: Favs[] = storageFavs;
            setStorageFavs(newArray)
            localStorage.setItem('favorites', JSON.stringify(newArray))
        } else if (storageFavs.length === 10) {
            alert('Exceeded maximum number of favorites')
        }
        toggleFavorite()
    }

    const FavButtons = () => {
            return (
                <>
                { 
                    comic.favStatus == true ?
                       (
                        <button className={styles.iconContainer}
                            style={{ backgroundColor : '#C24868', border : '#C24868' }}
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
                        </button>
                        )
                     : 
                       (
                        <button className={styles.iconContainer}
                            style={{ backgroundColor : '#222222', border : '#222222', cursor: storageFavs.length >= 10 ? 'not-allowed' : 'pointer'  }}
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
                        </button>
                        )
                }
                </>
        )
    }
   
    return (
        <>
            <FavButtons /> 
        </>
    )
}