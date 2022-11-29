import React, {useState} from "react";
import Comic from "./Comic";
import Filter from "./Filter";
import styles from '../styles/FilteredComics.module.css';
import useFetch from '../hooks/useFetch';
import CharacterDropdown from "./CharacterDropdown";
import CreatorDropdown from "./CreatorDropdown";


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

export default function FilteredComics() {
    const { comics } = useFetch();
    const [filter, setFilter] = useState<string>('Character')

    const charName: string[] = filter.split(':')
    // console.log('charName', charName)
    // console.log('filter', filter)

    return (
        <>
        <div className={styles.comicDiv}>
                {/* <Filter filter={filter} setFilter={setFilter} /> */}
                <div className={styles.filterBox}>                    
                    <CharacterDropdown  filter={filter} setFilter={setFilter}/>
                    <CreatorDropdown filter={filter} setFilter={setFilter} />
                </div>
        <ul className={styles.ul}>
            {comics.map((comic) => 
                comic.characters.items.filter((item)=> 
                    item.name.includes(charName[0])
                    ).map((item, index) => (
                        <div className={styles.list}>
                            <Comic key={index}  comic={comic} title={comic.title} /> 
                        </div>
                ))
            )}               
        </ul>
        <ul className={styles.ul}>
            {comics.map((comic) => 
                comic.creators.items.filter((item)=> 
                    item.name.includes(filter)
                    ).map((item, index) => (
                        <div className={styles.list}>
                            <Comic key={index}  comic={comic} title={comic.title} /> 
                        </div>
                ))
            )}               
        </ul>
        </div>
        </>
    )
}


                {/* // <Comic key={index} comic={comic} title={""} newDate={""} />  */}















