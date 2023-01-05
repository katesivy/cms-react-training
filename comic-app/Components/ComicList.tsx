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


export default function ComicList () {
    const { comics, totalComics } = useFetchComics();
    const { creatorFilteredComics, totalCreators } = useFetchCreators();
    const { characterFilteredComics, totalChars } = useFetchCharacters();
    const { bothSelectedComics, bothTotal } = useFetchBoth();
    const { storageFavs, setTotal }  = useContext(AppContext);
    const [comicList, setComicList] = useState<Root | undefined>()

    console.log('char filter', characterFilteredComics, totalChars)
    console.log('creator filter', creatorFilteredComics, totalCreators)
    console.log('bothfilter', bothSelectedComics, bothTotal)

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
        <div className={styles.comicsSection}>
            <div className={styles.filterBox}>
                <CharacterDropdown  />
                <CreatorDropdown  />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 50%), 1fr))', background: '#F8F8F2' }} className={styles.grid}>
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
    )
}