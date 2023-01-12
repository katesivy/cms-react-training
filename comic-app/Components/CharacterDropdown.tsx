import React, {useContext, useState} from "react";
import styles from '../styles/CharacterDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";
import { Character } from "./Interfaces";
import useFetchCharacters from "../hooks/useFetchCharacters";
import { Karla } from '@next/font/google'

const karla = Karla({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export default function CharacterDropdown () {
    const characterArray: Character[] = [
        {name:'View All', id: ''},
        {name:'Iron Man', id: '1009368'},
        {name:'Captain America', id: '1009220'},
        {name:'Thor', id: '1009664'},        
        {name:'Deadpool', id: '1009268'},        
        {name:'Scarlet Witch', id: '1009562'},
        {name:'Black Widow', id: '1100918923'},
        {name:'Wasp', id: '12100970734'},
        {name:'Gamora', id: '1010763'},
        {name:'Storm', id: '1010979'}
    ]
    const { characterFilter, setCharacterFilter, showFilters } = useContext(AppContext);
    const { characterFilteredComics } = useFetchCharacters();
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>, character: { name: string; id: string; }) => {
        e.preventDefault();
        setCharacterFilter(character);
        if (characterFilteredComics && !characterFilteredComics.length) {
            setCharacterFilter({name: 'Character', id: ''})
        }
        setOpen(prevState => !prevState); 
    }
  
    return (
        <div className={karla.className}>
            <label className={styles.label}>
            {!showFilters && <>Filter by:</>}
                <button className={styles.dropdownButton} onClick={() => { setOpen(prevState => !prevState)}}>
                    { (characterFilter.id == '' ) || (characterFilter.id == undefined) || (characterFilteredComics && !characterFilteredComics.length)
                    ? 'Character' 
                    : characterFilter.name }
                    <FontAwesomeIcon className={styles.angleIcon} icon={faAngleDown} />
                </button>
                {open && <div className={styles.dropdownDiv}>
                    {characterArray.map((character, index) => {
                        return (
                            <ul className={styles.ul} key={index} onClick={(e) => handleClick(e, character)}>{character.name}</ul>
                            )
                    })}
                </div>}
            </label>
        </div>
    );
}