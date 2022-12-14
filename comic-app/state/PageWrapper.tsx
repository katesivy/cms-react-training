import React, { createContext, useContext, useState } from 'react';
import Comic from '../Components/Comic';
import { useFavsArray } from '../hooks/useFavsArray';
import { useToggleFavorites } from '../hooks/useToggleFavorites';
import { useDropdown } from '../hooks/useDropdown';

export const AppContext = createContext({

});

export default function PageWrapper ({ children }: any) {
    const { isFavorite, setIsFavorite, toggleFavorite, } = useToggleFavorites();  
    const { favArray, setFavArray } = useFavsArray();
    const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useDropdown();

    return (
        <AppContext.Provider
            value={{
                isFavorite: isFavorite,
                setIsFavorite: setIsFavorite,
                toggleFavorite: toggleFavorite,
                favArray: favArray, 
                setFavArray: setFavArray,
                characterFilter: characterFilter,
                setCharacterFilter: setCharacterFilter,
                creatorFilter: creatorFilter,
                setCreatorFilter: setCreatorFilter
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppState = () => useContext(AppContext)

