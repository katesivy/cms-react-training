import React, {useContext, useState} from "react";
import styles from '../styles/CharacterDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";

type Props = {
    characterFilter: String;
    setcharacterFilter(text:string): String | void;
    // value?: string | ReadonlyArray<string> | number | undefined;
}

// export default function CharacterDropdown ({ setcharacterFilter, characterFilter}: Props) {
export default function CharacterDropdown () {
    const characterArray = [
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
    const {characterFilter, setCharacterFilter } = useContext(AppContext);
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (e, character) => {
        e.preventDefault();
        setOpen(prevState => !prevState), 
        setCharacterFilter(character) 
    }
    console.log('character dropdown', open, characterFilter)
  
    return (
      <div>
         <label className={styles.label}>
            Filter by:
            <button className={styles.dropdownButton} onClick={() => { setOpen(prevState => !prevState)}}>{ (characterFilter == '' ) | (characterFilter == 'View All') ? 'Character' : characterFilter.name }
                <FontAwesomeIcon className={styles.angleIcon} icon={faAngleDown} />
            </button>
            {open && <div className={styles.dropdownDiv}>
                {characterArray.map((character, index) => {
                    // if (characterFilter == 'View All') {
                    //     setCharacterFilter([]);  
                    // } else {
                       
                    return (
                        <ul key={index} onClick={(e) => handleClick(e, character)}>{character.name}</ul>
                        )
                    // }
                })}
            </div>}
        </label>
      </div>
    );
}