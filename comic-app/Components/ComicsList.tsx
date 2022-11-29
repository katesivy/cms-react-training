import React, {useState} from "react";
import Comic from "./Comic";
import Filter from "./Filter";
import styles from '../styles/Comic.module.css';
import useFetch from '../hooks/useFetch';
import { isTemplateExpression } from "typescript";

// type Thumbnail = {
//   path: string,
//   extension: string,
//   id? : number
// }

// type Dates = {
//     date: string;
// }[]

type Items = {
    resourceURI?: string;
    name?: string
}[]

type Characters = {
    length: number;
    name: string;
    available?: number;
    collectionURI?: string;
    returned?: number;
    items?: Items;
}[]

type Names = {
    resourceURI?: string;
    name?: string | undefined
}[]

export default function ComicsList() {
    const { comics } = useFetch();
    const [filter, setFilter] = useState<string>('')

    console.log('filter', filter)

    return (
        <>
        <div className={styles.comicDiv}>
                <Filter filter={filter} setFilter={setFilter} />
        <ul>
            {comics.map((comic) => 
                comic.characters.items.filter((item)=> 
                    item.name.includes(filter)
                    ).map((item) => (
                        <div>
                        {/* <li>{comic.title}</li> */}
                        <Comic  comic={comic} title={comic.title} /> 
                        </div>
                    ))
            )}
                  {/* {characterName}   */}
               
            </ul>
        </div>
        </>
    )
}


                {/* // <Comic key={index} comic={comic} title={""} newDate={""} />  */}















