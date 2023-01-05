import {useState} from "react";

type Character = {
    id: string,
    name: string
}
type Creator = {
    id: string,
    fullName: string
}

export const useDropdown = () => {
    const [characterFilter, setCharacterFilter] = useState<Character>({ name: "", id: "" });
    const [creatorFilter, setCreatorFilter] = useState<Creator>({ fullName: "", id: "" });

    return { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter }
}