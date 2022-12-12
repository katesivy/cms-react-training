import {useState} from "react";
import useFetch from "./useFetch";

export const useToggleFavorites = (initial: boolean | (() => boolean | undefined) | undefined) => {
        const [isFavorite, setIsFavorite] = useState<boolean | undefined>(initial);
    
        const toggleFavorite = () => {
            setIsFavorite( isFavorite => !isFavorite)
            console.log('clicked')
        }
        return {isFavorite, setIsFavorite, toggleFavorite }
    }