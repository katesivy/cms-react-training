import React, { createContext, useContext } from 'react';
import { useToggleFavorites } from '../hooks/useToggleFavorites';
import { useDropdown } from '../hooks/useDropdown';
import { usePagination } from '../hooks/usePagination';
import {  Character, Creator, Favs } from '../Components/Interfaces';

type SetStateAction<S> = S | ((prevState: S) => S);

type Dispatch<A> = (action: A) => void;

type InitialValues = {
    isFavorite: boolean, 
    storageFavs: Favs[],
    characterFilter: Character,
    creatorFilter: Creator,
    total: number,
    offset: number,
    toggleFavorite: () => void,
    setStorageFavs: Dispatch<SetStateAction<Favs[]>>,
    setCharacterFilter: Dispatch<SetStateAction<Character>>,
    setCreatorFilter: Dispatch<SetStateAction<Creator>>,
    setTotal:  Dispatch<SetStateAction<number>>,
    setOffset: Dispatch<SetStateAction<number>>,            
}

export const AppContext = createContext<InitialValues>({
    isFavorite: false,
    characterFilter: {
        id: '',
        name: ''
    },
    creatorFilter: {
        id: '',
        fullName: ''
    },
    storageFavs: [],
    total: 0, 
    offset: 0,
    toggleFavorite: () => {},
    setStorageFavs: () => [],
    setCharacterFilter: () => {},
    setCreatorFilter: () => {},
    setTotal: () => 0,
    setOffset: () => 15,
});

export default function PageWrapper ({ children }: any) {
    const { isFavorite, toggleFavorite, storageFavs, setStorageFavs } = useToggleFavorites();  
    const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useDropdown();
    const { total, offset, setTotal, setOffset } = usePagination();

    return (
        <AppContext.Provider
            value={{
                isFavorite, 
                storageFavs,
                characterFilter,
                creatorFilter,
                total,
                offset,
                toggleFavorite,
                setStorageFavs,
                setCharacterFilter,
                setCreatorFilter,
                setTotal,
                setOffset,             
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppState = () => useContext(AppContext)
