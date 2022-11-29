import React, {useState} from "react";
import Comic from "./Comic";
import Filter from "./Filter";
import styles from '../styles/CharacterDropdown.module.css';
import useFetch from '../hooks/useFetch';

type Props = {
    filter: String;
    setFilter(text:string): String | void;
    // value?: string | ReadonlyArray<string> | number | undefined;
}

export default function CharacterDropdown ({ setFilter, filter}: Props) {
    const characterArray = [
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

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div>
         <label>
        
            Filter by: 
        
            <button className={styles.dropdownButton} onClick={handleOpen}>Character</button>
            {open ? <div>
                {characterArray.map(item => {
                    return (
                    <ul onClick={() => {setFilter(item), setOpen(false)}}>{item}</ul>
                    )
                })}
            </div> : null}
        </label>
      </div>
    );
}