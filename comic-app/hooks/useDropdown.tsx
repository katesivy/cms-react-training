import {useState} from "react";
import { Creator, Character } from "../Components/Interfaces";

export const useDropdown = () => {
    const [characterFilter, setCharacterFilter] = useState<Character>({ name: "", id: "" });
    const [creatorFilter, setCreatorFilter] = useState<Creator>({ fullName: "", id: "" });

    return { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter }
}