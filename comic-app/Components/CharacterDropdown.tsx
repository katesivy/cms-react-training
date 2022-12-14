import React, {useContext, useState} from "react";
import styles from '../styles/CharacterDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";
// import styles from '../styles/Button.module.css'

type Props = {
    characterFilter: String;
    setcharacterFilter(text:string): String | void;
    // value?: string | ReadonlyArray<string> | number | undefined;
}

// export default function CharacterDropdown ({ setcharacterFilter, characterFilter}: Props) {
export default function CharacterDropdown () {
    const characterArray = [
        'View All',
        'Iron Man: 1009368',
        'Captain America: 1009220',
        'Thor: 1009664',
        'Deadpool: 1009268',
        'Scarlet Witch: 1009562',
        'Black Widow: 1009189',
        'Wasp: 1009707',
        'Gamora: 1010763',
        'Storm: 1010979'
    ]
    const {characterFilter, setCharacterFilter } = useContext(AppContext);
    const [open, setOpen] = useState<boolean>(false);

    // const handleOpen = () => {
    //     setOpen(!open);
    //   };

    const handleClick = (e, item) => {
        e.preventDefault();
        setOpen(false), 
        setCharacterFilter(item) 
    }
    // console.log('character dropdown', open, characterFilter)
  
    return (
      <div>
         <label>
            Filter by:
            <button className={styles.dropdownButton} onClick={() => { setOpen(!open)}}>{ (characterFilter == '' ) | (characterFilter == 'View All') ? 'Character' : characterFilter }
                <FontAwesomeIcon className={styles.angleIcon} icon={faAngleDown} />
            </button>
            {open && <div>
                {characterArray.map(item => {
                    if (characterFilter == 'View All') {
                        setCharacterFilter('');  
                        setOpen(false)
                    } else {
                       
                    return (
                        <ul onClick={(e) => handleClick(e, item)}>{item}</ul>
                        )
                    }
                })}
            </div>}
        </label>
      </div>
    );
}