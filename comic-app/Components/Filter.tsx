// import React, {useState} from "react";
// import useFetch from '../hooks/useFetch';

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