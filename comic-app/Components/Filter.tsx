import React, {useState} from "react";
import useFetch from '../hooks/useFetch';

type Props = {
    filter: String;
    setFilter(text:string): String | void;
    value?: string[];
}


export default function Filter ({ setFilter, filter}: Props) {
    const { comics } = useFetch();

    return (
        <div>
            <label>
                Filter by:
                <input 
                    onChange={(e) => setFilter(e.target.value)} 
                    value={filter} 
                />
            </label>
               
        </div>
    )
}


// {comics.filter((comic: { title: string; }) => 
// comic.title.toLowerCase().includes(filter.toLowerCase())
// ).map((comic: Comic, index: React.Key | null | undefined) =>  (
//     <Comics key={index} comic={comic} title={""} newDate={""} />
// )
// )}