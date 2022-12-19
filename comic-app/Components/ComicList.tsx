import React, { useContext, useEffect, useState } from "react";
import styles from '../styles/ComicList.module.css';
import Comic from './Comic'
import { AppContext } from "../state/PageWrapper"  
import CharacterDropdown from "./CharacterDropdown";
import CreatorDropdown from "./CreatorDropdown";
import useFetch from "../hooks/useFetch";
import useFetchCreators from "../hooks/useFetchCreators";
import useFetchCharacters from "../hooks/useFetchCharacters";


export default function ComicList () {

    const { comics } = useFetch();
    const comicsJSON = [
        {
            "id": 100213,
            "title": "Hulk Vs. Thor: Banner Of War  (Trade Paperback)",
            "issueNumber": 0,
            "publishDate": "2022-10-19T00:00:00-0400",
            "characters": ["Iron Man: 1009368"],
            "creators": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12712",
                    "name": "Steve Ditko: 32",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/14143",
                    "name": "Nadia Shammas",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/14285",
                    "name": "Martin Coccolo",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
                    "name": "Nic Klein",
                    "role": "penciller"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/308",
                    "name": "Gary Frank",
                    "role": "penciller (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                    "name": "Jeff Youngquist",
                    "role": "editor"
                }
            ],
            "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/634d57a98bda4.jpg"
        },
        {
            "id": 95773,
            "title": "Avengers Forever (2021) #8",
            "issueNumber": 8,
            "publishDate": "2022-08-24T00:00:00-0400",
            "characters": ["Storm: 1010979"],
            "creators": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Kate Leth: 12787",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Stan Lee: 30",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                    "name": "Guru Efx",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/426",
                    "name": "Jason Keith",
                    "role": "colorist (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12979",
                    "name": "Aaron Kuder",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/480",
                    "name": "Daniel Way",
                    "role": "inker"
                }
            ],
            "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/630507910522f.jpg"
        },
        {
            "id": 99641,
            "title": "Avengers 1,000,000 BC (2022) #1",
            "issueNumber": 1,
            "publishDate": "2022-08-17T00:00:00-0400",
            "characters": ["Storm: 1010979"],
            "creators": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                    "name": "Stan Lee: 30",
                    "role": "writer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                    "name": "Tom Brevoort",
                    "role": "editor"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/649",
                    "name": "Ed Mcguinness",
                    "role": "penciler (cover)"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                    "name": "Vc Cory Petit",
                    "role": "letterer"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
                    "name": "Kev Walker",
                    "role": "inker"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/442",
                    "name": "Jim Nausedas",
                    "role": "colorist"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/10279",
                    "name": "Matthew Wilson",
                    "role": "colorist (cover)"
                }
            ],
            "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/62f3c6a4b53d9.jpg"
        },
    ]
    const { creatorArray, setCreatorArray, characterArray, setCharacterArray, combinedArray, setCombinedArray } = useContext(AppContext);
    const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useContext(AppContext); 
    // const charName: string[] = characterFilter.length ? characterFilter.split(':') : [];
    const { creatorFilteredComics } = useFetchCreators();
    const { creatorFilteredCharacters } = useFetchCharacters();
    console.log('fetched Creators', creatorFilteredComics)
    console.log('fetched Characters', creatorFilteredCharacters)
   
    let comicList = creatorFilteredComics.length ? creatorFilteredComics : comics;

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
           
        </div>
    )
}