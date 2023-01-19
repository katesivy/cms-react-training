import React, { useContext, useEffect, useState } from "react";
import styles from '../styles/ComicList.module.css';
import Comic from './Comic'
import { AppContext } from "../state/PageWrapper"  
import CharacterDropdown from "./CharacterDropdown";
import CreatorDropdown from "./CreatorDropdown";
import useFetchComics from "../hooks/useFetchComics";
import useFetchCreators from "../hooks/useFetchCreators";
import useFetchCharacters from "../hooks/useFetchCharacters";
import Pagination from "./Pagination";
import useFetchBoth from "../hooks/useFetchBoth";
import { Root } from './Interfaces'
import Favorites from "./Favorites";
import ShowFavorites from "./ShowFavorites";
import ShowFilters from "./ShowFilters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function ComicList () {
    const { comics, totalComics } = useFetchComics();
    const { creatorFilteredComics, totalCreators } = useFetchCreators();
    const { characterFilteredComics, totalChars } = useFetchCharacters();
    const { bothSelectedComics, bothTotal } = useFetchBoth();
    const { storageFavs, setTotal, isFavoritesOpen, setIsFavoritesOpen, showFavorites, setShowFavorites, showFilters, setShowFilters, isFiltersOpen }  = useContext(AppContext);
    const [comicList, setComicList] = useState<Root | undefined>()
    const [windowSize, setWindowSize] = useState<number>(0);

    let innerWidth: number;
    if (typeof window !== "undefined") {
        innerWidth = window.innerWidth;
    } else {
       innerWidth = 0;
    }

    useEffect(() => {
        if (innerWidth >= 640) {
            setShowFavorites(false)
            setShowFilters(false)
            setIsFavoritesOpen(false)
        } else {
            setShowFavorites(true)
            setShowFilters(true)
        }
    });

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(innerWidth);
            if (innerWidth >= 640) {
                setShowFavorites(false)
                setShowFilters(false)
                setIsFavoritesOpen(false)
            } else {
                setShowFavorites(true)
                setShowFilters(true)
            }
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [innerWidth]);

    useEffect(() => {
        if (bothSelectedComics && bothSelectedComics.length) {
            console.log('both')
            setComicList(bothSelectedComics)
            setTotal(bothTotal)
        } else if (creatorFilteredComics && creatorFilteredComics.length && (characterFilteredComics == undefined)) {
            console.log('creator only')
            setComicList(creatorFilteredComics)
            setTotal(totalCreators)
        } else if (characterFilteredComics && characterFilteredComics.length && (creatorFilteredComics == undefined)) {
            console.log('char only')
            setComicList(characterFilteredComics)
            setTotal(totalChars)
        } else {
            console.log('comics only')
            setComicList(comics)
            setTotal(totalComics)
        }

    }, [comics, creatorFilteredComics, characterFilteredComics, bothSelectedComics])

    return (
        <>
        <div className={styles.comicsSection}>
            <div className={styles.filterBox}>
                <div className={styles.filterOptions}>
                    {showFilters && <ShowFilters />}
                    <div className={styles.dropdowns}>
                        {showFilters && isFiltersOpen && <CharacterDropdown  />}
                        {showFilters && isFiltersOpen && <CreatorDropdown  />}
                    </div>
                </div>
                <div className={styles.favOptions}>
                    {showFavorites && <ShowFavorites />}
                </div>
                {showFavorites && isFavoritesOpen && <Favorites />}
                    {showFavorites && isFavoritesOpen &&
                    <button className={styles.dropdownButtonHide} onClick={() => { setIsFavoritesOpen(prevState => !prevState)}}>
                        Hide Favorites
                        <FontAwesomeIcon className={styles.icon} icon={faBolt} />
                    </button>
                    }
                {!showFilters && <CharacterDropdown  />} 
                {!showFilters && <CreatorDropdown  />}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(175px), 1fr))', background: '#F8F8F2', gap: '20px' }} className={styles.grid}>
                {comicList && comicList.map((comic: Root, index: number) => {
                    let month: string = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                    let d = new Date(comic.dates[0].date)
                    let newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                    let splitTitle = comic.title.split('(')[0];
                    comic.favStatus = false;
                    const result = storageFavs && storageFavs.find(({ id }: any) => id === comic.id);
                    if (result) {
                        comic.favStatus = true;
                    }

                    return (
                        <>
                            <Comic key={index} comic={comic} title={splitTitle} newDate={newDate} index={0}  />
                        </>
                    )
                })}
            </div>
            <Pagination />
        </div>
        {!showFavorites && !isFavoritesOpen && <Favorites />} 
        </>
    )
}
