import {useState} from "react";
import { Root } from "../Components/Interfaces";

export const useToggleFavorites = () => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [storageFavs, setStorageFavs] = useState<Root[]>([]);
    
    const toggleFavorite = () => {
        setIsFavorite( isFavorite => !isFavorite)
        console.log('toggle clicked')
    }

    return {isFavorite, setIsFavorite, toggleFavorite,  storageFavs, setStorageFavs }
}