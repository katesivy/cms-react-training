import { useState } from "react";

export const useMobileMenus = () => {
    const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
    const [showFavorites, setShowFavorites] = useState<boolean>(true)
    const [showFilters, setShowFilters] = useState<boolean>(true)

    const toggleOpen = () => {
        setIsFavoritesOpen( isFavoritesOpen => !isFavoritesOpen)
        console.log('burger clicked')
    }

    return {isFavoritesOpen, setIsFavoritesOpen, toggleOpen, showFavorites, setShowFavorites, showFilters, setShowFilters, isFiltersOpen, setIsFiltersOpen }
}