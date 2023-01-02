import React, { createContext, useContext, useState } from 'react';
import Comic from '../Components/Comic';
import { useFavsArray } from '../hooks/useFavsArray';
import { useToggleFavorites } from '../hooks/useToggleFavorites';
import { useDropdown } from '../hooks/useDropdown';
import { useFilter } from '../hooks/useFilter';
import { usePagination } from '../hooks/usePagination';

export const AppContext = createContext({

});

export default function PageWrapper ({ children }: any) {
    const { isFavorite, setIsFavorite, toggleFavorite, favStatus, setFavStatus, storageFavs, setStorageFavs } = useToggleFavorites();  
    const { favArray, setFavArray } = useFavsArray();
    const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useDropdown();
    const { creatorArray, setCreatorArray, characterArray, setCharacterArray, combinedArray, setCombinedArray } = useFilter();
    const { total, setTotal, offset, setOffset } = usePagination();

    return (
        <AppContext.Provider
            value={{
                isFavorite: isFavorite,
                setIsFavorite: setIsFavorite,
                toggleFavorite: toggleFavorite,
                favStatus: favStatus,
                setFavStatus: setFavStatus,
                storageFavs: storageFavs,
                setStorageFavs: setStorageFavs,
                favArray: favArray, 
                setFavArray: setFavArray,
                characterFilter: characterFilter,
                setCharacterFilter: setCharacterFilter,
                creatorFilter: creatorFilter,
                setCreatorFilter: setCreatorFilter,
                creatorArray: creatorArray,
                setCreatorArray: setCreatorArray,
                characterArray: characterArray, 
                setCharacterArray: setCharacterArray, 
                combinedArray: combinedArray, 
                setCombinedArray: setCombinedArray,
                total: total,
                setTotal: setTotal,
                offset: offset,
                setOffset: setOffset
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppState = () => useContext(AppContext)

