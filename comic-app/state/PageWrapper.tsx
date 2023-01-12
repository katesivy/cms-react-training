import React, { createContext, useContext } from 'react';
import { useToggleFavorites } from '../hooks/useToggleFavorites';
import { useDropdown } from '../hooks/useDropdown';
import { usePagination } from '../hooks/usePagination';
import {  Character, Creator, Favs, Root } from '../Components/Interfaces';
import { useMobileMenus } from '../hooks/useMobileMenus';
import useFetchBoth from '../hooks/useFetchBoth';
import Comic from '../Components/Comic';
import ComicList from '../Components/ComicList';

type SetStateAction<S> = S | ((prevState: S) => S);

type Dispatch<A> = (action: A) => void;

type InitialValues = {
    isFavorite: boolean,
    isFavoritesOpen: boolean,
    isFiltersOpen: boolean,
    windowSize: number,
    showFavorites: boolean,
    showFilters: boolean,
    storageFavs: Favs[],
    characterFilter: Character,
    creatorFilter: Creator,
    total: number,
    offset: number,
    toggleFavorite: () => void,
    setIsFavoritesOpen: Dispatch<SetStateAction<boolean>>,
    setIsFiltersOpen: Dispatch<SetStateAction<boolean>>,
    setShowFavorites:  Dispatch<SetStateAction<boolean>>,
    setShowFilters:Dispatch<SetStateAction<boolean>>,
    setWindowSize: Dispatch<SetStateAction<number>>,
    setStorageFavs: Dispatch<SetStateAction<Favs[]>>,
    setCharacterFilter: Dispatch<SetStateAction<Character>>,
    setCreatorFilter: Dispatch<SetStateAction<Creator>>,
    setTotal:  Dispatch<SetStateAction<number>>,
    setOffset: Dispatch<SetStateAction<number>>,            
}

export const AppContext = createContext<InitialValues>({
    isFavorite: false,
    isFavoritesOpen: false,
    isFiltersOpen: false,
    showFavorites: true,
    showFilters: false,
    windowSize: 640,
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
    setIsFavoritesOpen: () => false,
    setIsFiltersOpen: () => false,
    setShowFavorites: () => false,
    setShowFilters: () => false,
    setWindowSize: () => 0,
    setStorageFavs: () => [],
    setCharacterFilter: () => {},
    setCreatorFilter: () => {},
    setTotal: () => 0,
    setOffset: () => 15,
});

export default function PageWrapper ({ children }: any) {
    const { isFavorite, toggleFavorite, storageFavs, setStorageFavs } = useToggleFavorites();  
    const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter } = useDropdown();
    const { isFavoritesOpen, setIsFavoritesOpen, windowSize, setWindowSize, showFavorites, setShowFavorites, showFilters, setShowFilters, isFiltersOpen, setIsFiltersOpen } = useMobileMenus();
    const { total, offset, setTotal, setOffset } = usePagination();

    return (
        <AppContext.Provider
            value={{
                isFavorite,
                windowSize,
                showFavorites,
                showFilters,
                isFavoritesOpen,
                isFiltersOpen,
                storageFavs,
                characterFilter,
                creatorFilter,
                total,
                offset,
                toggleFavorite,
                setIsFavoritesOpen,
                setIsFiltersOpen,
                setShowFavorites,
                setShowFilters,
                setWindowSize,
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
