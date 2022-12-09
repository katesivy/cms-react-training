import {useState} from "react";
import useFetch from "./useFetch";

export const useToggleFavorites = () => {
        const { comics } = useFetch();
        const [isFavorite, setIsFavorite] = useState(false);
    
        const toggleFavorite = () => {
            comics.map((comic, index) => {
                comic.isFavorite = isFavorite;
            })
        }
        return {isFavorite, setIsFavorite, toggleFavorite}
    }