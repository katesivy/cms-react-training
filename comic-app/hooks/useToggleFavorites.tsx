import {useState} from "react";
import useFetch from "./useFetchComics";

export const useToggleFavorites = () => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    // const [favStatus, setFavStatus] = useState<boolean>(false);
    const [storageFavs, setStorageFavs] = useState();
    
    const toggleFavorite = () => {
        setIsFavorite( isFavorite => !isFavorite)
        console.log('toggle clicked')
    }


    
    return {isFavorite, setIsFavorite, toggleFavorite,  storageFavs, setStorageFavs }
}