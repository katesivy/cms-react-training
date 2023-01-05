import {useState} from "react";
import { Favs } from "../Components/Interfaces";


export const useToggleFavorites = () => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [storageFavs, setStorageFavs] = useState<Favs[]>([]);
    
    const toggleFavorite = () => {
        setIsFavorite( isFavorite => !isFavorite)
        console.log('toggle clicked')
    }

    return {isFavorite, setIsFavorite, toggleFavorite,  storageFavs, setStorageFavs }
}