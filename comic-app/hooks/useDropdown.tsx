import {useState} from "react";

export const useDropdown = () => {
    const [characterFilter, setCharacterFilter] = useState<string[]>([]);
    const [creatorFilter, setCreatorFilter] = useState<string[]>([]);

    return { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter }
}