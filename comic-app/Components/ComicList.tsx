import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Detail from "./Detail";
import styles from '../styles/ComicList.module.css';
import Comic from './Comic'
import Button from "./Button";
import { AppContext } from "../state/PageWrapper"  
import Favorites from "./Favorites";
import CharacterDropdown from "./CharacterDropdown";
import CreatorDropdown from "./CreatorDropdown";
import { isTemplateExpression } from "typescript";
import useFetch from "../hooks/useFetch";
import FilteredComics from "./FilteredComics";


export default function ComicList () {

    const { comics } = useFetch();
    const comicsList = [
        {
            "id": 100213,
            "title": "Hulk Vs. Thor: Banner Of War  (Trade Paperback)",
            "issueNumber": 0,
            "publishDate": "2022-10-19T00:00:00-0400",
            "characters": "Iron Man: 1009368",
            "creators": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/12712",
                    "name": "Storm: 1010979",
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
            "characters": "Storm: 1010979",
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
                    "name": "Cam Smith",
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
            "characters": "Storm: 1010979",
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
                    "name": "Dean White",
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

    const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useContext(AppContext);
    const [ creatorArray, setCreatorArray ] = useState<string[]>([])
    const [ characterArray, setCharacterArray ] = useState<string[]>([])
    const [ combinedArray, setCombinedArray ] = useState<string[]>([])
    const charName: string[] = characterFilter.length ? characterFilter.split(':') : [];

    console.log('creators', creatorFilter)
    console.log('characters', characterFilter)

    useEffect(() => {
        // console.log('comiclist character', characterFilter, 'comiclist creator', creatorFilter)
        filterCharacters(filteredCharacterList)
    }, [characterFilter])

    useEffect(() => {
        // console.log('comiclist character', characterFilter, 'comiclist creator', creatorFilter)
        filterCreator(filteredCreatorList);
    }, [creatorFilter])

    let filteredCharacterList = comics.map((comic) => 
        comic.characters.items.filter((item)=> item.name.includes(charName[0]))
            .map(() => (
                comic
            ))
    )
    // console.log('filtered character list', filteredCharacterList)

    let filteredCreatorList = comics.map((comic) => 
        comic.creators.items.filter((creator)=> creator.name.includes(creatorFilter))
            .map(() => (
              comic
            ))
    )

    let filteredCharacterArray: [] = [];
    const filterCharacters = (filteredCharacterList: string | any[]) => {
        for (let i = 0; i < filteredCharacterList.length; i++) {
                if (filteredCharacterList[i].length) {
                    // console.log('yes', filteredCharacterList[i][0])
                    filteredCharacterArray.push(filteredCharacterList[i][0])
                }
        }
        // console.log('filtered character array in function', filteredCharacterArray)
        setCharacterArray(filteredCharacterArray)
        setCombinedArray([...filteredCharacterArray, ...filteredCreatorArray])
    }
    // console.log('comicArray', comicArray)

    
    let filteredCreatorArray: [] = [];
    const filterCreator = (filteredCreatorList: string | any[]) => {
        if (filteredCreatorList.length) {
            for (let i = 0; i < filteredCreatorList.length; i++) {
                    if (filteredCreatorList[i].length) {
                        // console.log('yes', filteredCreatorList[i][0])
                        filteredCreatorArray.push(filteredCreatorList[i][0])
                    }
            }
            // console.log('filtered array in function', filteredCreatorArray)
            setCreatorArray(filteredCreatorArray)
            setCombinedArray([...filteredCharacterArray, ...filteredCreatorArray])
        }
    }
    // console.log('comicArray', comicArray)
   
    console.log('comics', comics)
    console.log('combined', combinedArray.length, combinedArray)
    
    let comicList = combinedArray.length ? combinedArray : comics;
  return (
        <div className={styles.comicsSection}>
             <div className={styles.filterBox}>
                <CharacterDropdown  />
                <CreatorDropdown  />
            </div>
            {}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 50%), 1fr))', background: '#F8F8F2' }} className={styles.grid}>
                {comicList && comicList.map((comic, index: number) => {
                    var month: string = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                    var d = new Date(comic.dates[0].date)
                    var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                    let splitTitle = comic.title.split('(')[0];
                    return (
                        <>
                        <Comic key={index} comic={comic} title={splitTitle} newDate={newDate} />
                        </>
                    )
                    }
                )}
            </div>
           
        </div>
    )
}