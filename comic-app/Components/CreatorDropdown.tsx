import React, {useState} from "react";
import styles from '../styles/CreatorDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

type Props = {
    filter: String;
    setFilter(text:string): String | void;
}

export default function CreatorDropdown ({ setFilter, filter}: Props) {
    const creatorArray = [
        'Kate Leth: 12787',
        'Brian Michael Bendis: 24',
        'Stan Lee: 30',        
        'Steve Ditko: 32',        
        'Jack Kirby: 196',
        'Storm: 1010979'
    ]

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div>
         <label>
        
            Filter by: 
        
            <button className={styles.dropdownButton} onClick={handleOpen}>Creator
                <FontAwesomeIcon className={styles.angleIcon} icon={faAngleDown} />
            </button>
            {open ? <div>
                {creatorArray.map(item => {
                    return (
                        <ul onClick={() => {setFilter(item),  handleOpen}}>{item}</ul>
                    )
                })}
            </div> : null}
        </label>
      </div>
    );
}