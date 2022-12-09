import React, { createContext, useContext, useState } from 'react';
import Comic from '../Components/Comic';
import { useToggleFavorites } from '../hooks/useToggleFavorites';

export const AppContext = createContext({
    comicStatus: false,
    favArray: [],
});

export default function PageWrapper ({ children }: any) {
    const {isFavorite, setIsFavorite, toggleFavorite} = useToggleFavorites();

    return (
        <AppContext.Provider
            value={{
                isFavorite: isFavorite,
                setIsFavorite: setIsFavorite,
                toggleFavorite: toggleFavorite,
                comicStatus: isFavorite,
                favArray: []
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppState = () => useContext(AppContext)