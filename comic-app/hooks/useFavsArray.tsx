import {useState} from "react";

export const useFavsArray = ()  => {
        const [ favArray, setFavArray ] = useState<string[]>([]);

        return { favArray, setFavArray  }
    }