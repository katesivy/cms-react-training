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


export default function ComicList () {

    const { comics } = useFetchComics();
    const { creatorFilteredComics } = useFetchCreators();
    const { characterFilteredComics } = useFetchCharacters();
    console.log('fetched Creators', creatorFilteredComics)
    console.log('fetched Characters', characterFilteredComics)
    let combinedArray = [...creatorFilteredComics, ...characterFilteredComics]
    // console.log('combined', combinedArray)

    // let testArray = [
    //     {id: 1, name: 'kate'}, 
    //    { id: 1, name: 'rob'}, 
    //    { id: 2, name: 'michael'}, 
    //    { id: 3, name: 'william'}, 
    //     {id: 4, name: 'eli'}, 
    //    { id: 2, name: 'tbd'},
    // ]
      
    let ids = combinedArray.map((comic => {
        return comic.id
    }))
    let unique = [...new Set(ids)];
      
    // console.log('unique', unique);

    let comicArray = [];
    combinedArray.map((comic => {
        for (let i=0; i< unique.length; i++) {
            if (comic.id === unique[i]) {
                comicArray.push(comic)
            }
        }
    }))
    // console.log('comicArray', comicArray)

   
    let comicList = creatorFilteredComics.length | characterFilteredComics.length ? comicArray : comics;

    return (
        <div className={styles.comicsSection}>
             <div className={styles.filterBox}>
                <CharacterDropdown  />
                <CreatorDropdown  />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 50%), 1fr))', background: '#F8F8F2' }} className={styles.grid}>
                {comicList && comicList.map((comic, index: number) => {
                    var month: string = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                    var d = new Date(comic.dates[0].date)
                    var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                    let splitTitle = comic.title.split('(')[0];
                    return (
                        <>
                        <Comic key={comic.id} comic={comic} title={splitTitle} newDate={newDate}  />
                        </>
                    )
                    }
                )}
            </div>
            <Pagination />
           
        </div>
    )
}