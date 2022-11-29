import React, {useState} from "react";
import useFetch from '../hooks/useFetch';

type Props = {
    filter: String;
    setFilter(text:string): String | void;
    // value?: string | ReadonlyArray<string> | number | undefined;
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