// import React, {useContext, useState} from "react";
// import Comic from "./Comic";
// import styles from '../styles/FilteredComics.module.css';
// import useFetch from '../hooks/useFetch';
// import CharacterDropdown from "./CharacterDropdown";
// import CreatorDropdown from "./CreatorDropdown";
// import { AppContext } from '../state/PageWrapper'

// const comics = [
//     {
//         "id": 100213,
//         "title": "Hulk Vs. Thor: Banner Of War  (Trade Paperback)",
//         "issueNumber": 0,
//         "publishDate": "2022-10-19T00:00:00-0400",
//         "characters": ["Iron Man: 1009368"],
//         "creators": [
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/12712",
//                 "name": "Storm: 1010979",
//                 "role": "writer"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/14143",
//                 "name": "Kate Leth: 12787",
//                 "role": "writer"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/14285",
//                 "name": "Martin Coccolo",
//                 "role": "penciller"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
//                 "name": "Nic Klein",
//                 "role": "penciller"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/308",
//                 "name": "Gary Frank",
//                 "role": "penciller (cover)"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
//                 "name": "Jeff Youngquist",
//                 "role": "editor"
//             }
//         ],
//         "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/634d57a98bda4.jpg"
//     },
//     {
//         "id": 95773,
//         "title": "Avengers Forever (2021) #8",
//         "issueNumber": 8,
//         "publishDate": "2022-08-24T00:00:00-0400",
//         "characters": ["Storm: 1010979"],
//         "creators": [
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
//                 "name": "Storm: 1010979",
//                 "role": "writer"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
//                 "name": "Tom Brevoort",
//                 "role": "editor"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
//                 "name": "Guru Efx",
//                 "role": "colorist"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/426",
//                 "name": "Jason Keith",
//                 "role": "colorist (cover)"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/12979",
//                 "name": "Aaron Kuder",
//                 "role": "penciler (cover)"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
//                 "name": "Vc Cory Petit",
//                 "role": "letterer"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/480",
//                 "name": "Cam Smith",
//                 "role": "inker"
//             }
//         ],
//         "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/630507910522f.jpg"
//     },
//     {
//         "id": 99641,
//         "title": "Avengers 1,000,000 BC (2022) #1",
//         "issueNumber": 1,
//         "publishDate": "2022-08-17T00:00:00-0400",
//         "characters": ["Storm: 1010979"],
//         "creators": [
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
//                 "name": "Jack Kirby: 196",
//                 "role": "writer"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
//                 "name": "Tom Brevoort",
//                 "role": "editor"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/649",
//                 "name": "Ed Mcguinness",
//                 "role": "penciler (cover)"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
//                 "name": "Vc Cory Petit",
//                 "role": "letterer"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
//                 "name": "Kev Walker",
//                 "role": "inker"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/442",
//                 "name": "Dean White",
//                 "role": "colorist"
//             },
//             {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/creators/10279",
//                 "name": "Matthew Wilson",
//                 "role": "colorist (cover)"
//             }
//         ],
//         "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/62f3c6a4b53d9.jpg"
//     },
//   ]

// type Items = {
//     resourceURI?: string;
//     name?: string
// }[]

// // type Characters = {
// //     length: number;
// //     name: string;
// //     available?: number;
// //     collectionURI?: string;
// //     returned?: number;
// //     items?: Items;
// // }[]

// // type Names = {
// //     resourceURI?: string;
// //     name?: string | undefined
// // }[]

// export default function FilteredComics() {
//     // const { comics } = useFetch();
//     // const [filter, setFilter] = useState<string>('Character')
//     const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useContext(AppContext)
//     const charName: string[] = characterFilter.split(':')
//     console.log('charName', charName)
//     console.log('filter', characterFilter, creatorFilter)

//     return (
//         <>
//         <div className={styles.comicDiv}>
//             <div className={styles.filterBox}>                    
//                 <CharacterDropdown  />
//                 <CreatorDropdown  />
//             </div>
//             <ul className={styles.ul}>
//                 {comics.map((comic) => 
//                     // comic.characters.items.filter((item)=> 
//                     comic.characters.filter((item)=> 
//                         // item.name.includes(charName[0])
//                         item.includes(charName[0])
//                         ).map((item, index) => (
//                             <div className={styles.list}>
//                                 <Comic key={index}  comic={comic} title={comic.title} /> 
//                                 {/* {comic} */}
//                             </div>
//                     ))
//                 )}
//             </ul>
//             <ul className={styles.ul}>
//                 {comics.map((comic) => 
//                     // comic.creators.items.filter((item)=> 
//                     comic.creators.filter((item)=> 
//                         item.name.includes(creatorFilter)
//                         ).map((item, index) => (
//                             <div className={styles.list}>
//                                 <Comic key={index}  comic={comic} title={comic.title} /> 
//                             </div>
//                     ))
//                 )}
//             </ul>
//         </div>
//         </>
//     )
// }
















