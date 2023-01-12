import React, {useContext} from "react";
import styles from '../styles/ShowFavorites.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";

export default function ShowFavorites () {
    const { isFavoritesOpen, setIsFavoritesOpen } = useContext(AppContext);
  
    return (
      <div className={styles.showFavDiv} >
            <button className={styles.dropdownButton} onClick={() => { setIsFavoritesOpen(prevState => !prevState)}}>
                {!isFavoritesOpen ? 'Show Favorites' : 'Hide Favorites'}
                <FontAwesomeIcon className={styles.icon} icon={faBolt} />
            </button>
      </div>
    );
}