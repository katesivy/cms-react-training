// import React, {useState} from "react";
// import useFetch from '../hooks/useFetch';

import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"

// type Props = {
//     filter: String;
//     setFilter(text:string): String | void;
//     value?: string;
// }


// export default function Filter ({ setFilter, filter}: Props) {
//     // const { comics } = useFetch();

//     return (
//         <div>
//             <label>
//                 Filter by:
//                 <input
//                     onChange={(e) => setFilter(e.target.value)} 
//                     value={filter}
//                 />
//             </label>
               
//         </div>
//     )
// }


****************************************************************
    // const { creatorArray, setCreatorArray, characterArray, setCharacterArray, combinedArray, setCombinedArray } = useContext(AppContext);
    // const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useContext(AppContext); 
    // const charName: string[] = characterFilter.length ? characterFilter.split(':') : [];
 // console.log('creators', creatorFilter)
    // console.log('characters', characterFilter)

    // useEffect(() => {
    //     console.log('character useEffect')
    //     console.log('filtered char list', filteredCharacterList)
    //     filterCharacters(filteredCharacterList)
    //     filterCreator(filteredCreatorList);
    // }, [characterFilter])

    // useEffect(() => {
    //     console.log('creator useEffect')
    //     console.log('filtered creator list', filteredCreatorList)
    //     filterCreator(filteredCreatorList);
    //     filterCharacters(filteredCharacterList)
    // }, [creatorFilter])

    // let filteredCharacterList = comics.map((comic) => 
    //     comic.characters.items.filter((item)=> item.name.includes(charName[0]))
    //     // comic.characters.filter((item)=> item.includes(charName[0]))
    //         .map(() => (
    //             comic
    //         ))
    // )

    // let filteredCreatorList = comics.map((comic) => 
    //     comic.creators.items.filter((creator)=> creator.name.includes(creatorFilter))
    //     // comic.creators.filter((creator)=> creator.name.includes(creatorFilter))
    //         .map(() => (
    //           comic
    //         ))
    // )

    // let filteredCharacterArray: [] = [];
    // const filterCharacters = (filteredCharacterList: string | any[]) => {
    //     console.log('char function', characterArray, creatorArray)
    //     if (filteredCharacterList.length) {
    //         for (let i = 0; i < filteredCharacterList.length; i++) {
    //                 if (filteredCharacterList[i].length) {
    //                     filteredCharacterArray.push(filteredCharacterList[i][0])
    //                 }
    //         }
    //         console.log('filtered character array in function', filteredCharacterArray)
    //         setCharacterArray(filteredCharacterArray)
    //         if (creatorArray.length && creatorArray != 'View All') {
    //             setCombinedArray([...filteredCharacterArray, ...filteredCreatorArray])
    //         } else {
    //             setCombinedArray(filteredCharacterArray)
    //         }
    //         console.log('combinedArray in Character Func', combinedArray)
    //     }
    // }

    // let filteredCreatorArray: [] = [];
    // const filterCreator = (filteredCreatorList: string | any[]) => {
    //     console.log('creators function', characterArray, creatorArray)
    //     if (filteredCreatorList.length) {
    //         for (let i = 0; i < filteredCreatorList.length; i++) {
    //                 if (filteredCreatorList[i].length) {
    //                     filteredCreatorArray.push(filteredCreatorList[i][0])
    //                 }
    //         }
    //         console.log('filtered creator array in function', filteredCreatorArray)
    //         setCreatorArray(filteredCreatorArray)
    //         if (characterArray.length && characterArray != 'View All') {
    //             setCombinedArray([...filteredCharacterArray, ...filteredCreatorArray])
    //         } else {
    //             setCombinedArray(filteredCreatorArray)
    //         }
    //         console.log('combinedArray in Creator Func', combinedArray)
    //     }
    // }
    // //add function to check for duplicates in combined array

    // // console.log('comics', comics)
    // console.log('combined', combinedArray.length, combinedArray)

    ****************************************************

    // useEffect(() => {
    //     if (((characterFilter.id == '') | (characterFilter.id == undefined)) && (creatorFilter.id != '') && (creatorFilter.id != undefined)) {
    //         console.log('View All/no char selected')
    //         setCombinedArray(...creatorFilteredComics)
    //     } else if (((characterFilter.id == '') | (characterFilter.id == undefined)) && ((creatorFilter.id == '') | (creatorFilter.id == undefined))) {
    //         console.log('both empty ids')
    //         setCombinedArray([comics])
    //     }
    //     else {
    //         console.log('setting to both arrays')
    //         setCombinedArray([...creatorFilteredComics, ...characterFilteredComics])
    //     }
    // }, [characterFilter])

    // useEffect(() => {
    //     if ((creatorFilter.id == '') && (characterFilter.id != '')) {
    //         console.log('View All/no creators selected')
    //         setCombinedArray(...characterFilteredComics)
    //     } else if ((creatorFilter.id == '') && (characterFilter.id == '')) {
    //         console.log('both empty ids')
    //         setCombinedArray([comics])
    //     }
    //     else {
    //         console.log('setting to both arrays')
    //         setCombinedArray([...creatorFilteredComics, ...characterFilteredComics])
    //     }
    // }, [creatorFilter])


    ************************************************** Dummy JSON if API is down 
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