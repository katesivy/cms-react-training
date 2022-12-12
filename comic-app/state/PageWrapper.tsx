import React, { createContext, useContext, useState } from 'react';
import Comic from '../Components/Comic';
import { useFavsArray } from '../hooks/useFavsArray';
import { useToggleFavorites } from '../hooks/useToggleFavorites';

export const AppContext = createContext({
    // comicStatus: false,
    // favArray: [],
});

export default function PageWrapper ({ children }: any) {
    const { isFavorite, setIsFavorite, toggleFavorite, } = useToggleFavorites();  
    const { favArray, setFavArray } = useFavsArray();

    return (
        <AppContext.Provider
            value={{
                isFavorite: isFavorite,
                setIsFavorite: setIsFavorite,
                toggleFavorite: toggleFavorite,
                comicStatus: false,
                favArray: [], 
                setFavArray: setFavArray
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppState = () => useContext(AppContext)