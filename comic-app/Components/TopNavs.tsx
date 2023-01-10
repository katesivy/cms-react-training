import React, { useContext } from 'react';
import styles from '../styles/TopNavs.module.css';
import Image from 'next/image';
import { AppContext } from '../state/PageWrapper';
import logo2 from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBars } from '@fortawesome/free-solid-svg-icons';

type LoaderProps = {
    src: string,
    width: number | string,
    quality?: number | string | undefined, 
}

export default function TopNavs () {
    const { storageFavs, showFavorites }  = useContext(AppContext);
    const myLoader = ({ src, width, quality }: LoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    const logoImage: any =
        <Image className={styles.logo2}
            loader={myLoader}
            src={logo2}
            alt='logo'
        />

    return (
        <>
        {!showFavorites && 
        <div className={styles.navDiv}>
            {logoImage}
            <div className={styles.navItems}>
                <h5 className={styles.homeNav}>Home</h5>
                <h5 className={styles.shopNav}>Shop</h5>
                <div className={styles.boltNav}>
                    <FontAwesomeIcon className={styles.icon} icon={faBolt} />
                </div>
                <h5 className={styles.favNav}>My Favorites: ({storageFavs ? storageFavs.length : 0})</h5>
            </div>
        </div>
        }
        {showFavorites && 
        <div className={styles.mobileNavDiv}>
            {logoImage}
            <div className={styles.navItems}>
                <div className={styles.barsDiv}>
                    <FontAwesomeIcon className={styles.boltIcon} icon={faBolt} />
                    ({storageFavs ? storageFavs.length : 0})
                    <FontAwesomeIcon className={styles.barsIcon} icon={faBars} />
                </div>
            </div>
        </div>}
        </>
    )
}