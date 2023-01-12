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


export default function ComicList () {
    const { comics, totalComics } = useFetchComics();
    const { creatorFilteredComics, totalCreators } = useFetchCreators();
    const { characterFilteredComics, totalChars } = useFetchCharacters();
    const { bothSelectedComics, bothTotal, bothStatus } = useFetchBoth();
    const { storageFavs, setTotal, isFavoritesOpen, setIsFavoritesOpen, showFavorites, setShowFavorites, showFilters, setShowFilters, isFiltersOpen, characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter }  = useContext(AppContext);
    const [comicList, setComicList] = useState<Root | undefined>()
    const [windowSize, setWindowSize] = useState<number>(0);

    let innerWidth: number;
    if (typeof window !== "undefined") {
        innerWidth = window.innerWidth;
    } else {
       innerWidth = 0;
    }

    useEffect(() => {
        console.log('1st: innerwidth', innerWidth, windowSize)
        if (innerWidth >= 640) {
            console.log('1st useeffect, setting to false')
            setShowFavorites(false)
            setShowFilters(false)
            setIsFavoritesOpen(false)
        } else {
            console.log('2nd use effect, setting to true')
            setShowFavorites(true)
            setShowFilters(true)
        }
    });

    useEffect(() => {
        console.log('handle windowsize', innerWidth)
        function handleWindowResize() {
            setWindowSize(innerWidth);
            console.log('2nd: innerwidth', innerWidth, windowSize)
            if (innerWidth >= 640) {
                console.log('bigger, setting to false')
                setShowFavorites(false)
                setShowFilters(false)
                setIsFavoritesOpen(false)
            } else {
                console.log('smaller, setting to true')
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
        // console.log('comiclist bothStatus in useEffect', bothStatus, 'filters:', creatorFilter, characterFilter)
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
        } 
        // else if ((bothStatus === false) && (characterFilter && creatorFilter)) {
        //     console.log('no comics')
        //     setComicList(undefined)
        //     setTotal(0)
        // } else if ((bothStatus === false) && ((characterFilter && characterFilter.id != '') || (creatorFilter && creatorFilter.id != ''))) {
        //     console.log('status false, comics only')
        //     setComicList(comics)
        //     setTotal(totalComics)
        // } 
        else {
            console.log('comics only')
            setComicList(comics)
            setTotal(totalComics)
        }

        // console.log('char bothStatus', bothStatus)
        // if ((bothStatus === false) && (characterFilter == undefined)) {
        //     setCharacterFilter({name: 'Character', id: ''})
        // }
        // if ((bothStatus === false) && (creatorFilter == undefined)) {
        //     setCreatorFilter({fullName: 'Creator', id: ''})
        // }
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
                {!showFilters && <CharacterDropdown  />} 
                {!showFilters && <CreatorDropdown  />}
            </div>

                {/* {isFavoritesOpen &&
                    <button className={styles.dropdownButtonHide} onClick={() => { setIsFavoritesOpen(prevState => !prevState)}}>
                        'Hide Favorites'
                        <FontAwesomeIcon className={styles.icon} icon={faBolt} />
                    </button>
                 } */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px), 4fr))', background: '#F8F8F2', gap: '10px' }} className={styles.grid}>
                {comicList && comicList.map((comic: Root, index: number) => {
                    var month: string = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                    var d = new Date(comic.dates[0].date)
                    var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
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
