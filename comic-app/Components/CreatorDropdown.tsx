import React, {useContext, useState} from "react";
import styles from '../styles/CreatorDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";

type Props = {
    creatorFilter: String;
    setcreatorFilter(text:string): String | void;
}

// export default function CreatorDropdown ({ setcreatorFilter, creatorFilter}: Props) {
export default function CreatorDropdown () {
    const creatorArray = [
        'View All',
        'Kate Leth: 12787',
        'Brian Michael Bendis: 24',
        'Stan Lee: 30',        
        'Steve Ditko: 32',        
        'Jack Kirby: 196',
        'Storm: 1010979',
        'Daniel Way',
        'Mike Mayhew',
        'Jim Nausedas'
    ]

    const { creatorFilter, setCreatorFilter  } = useContext(AppContext);
    const [open, setOpen] = useState<boolean>(false);

    // const handleOpen = () => {
    //     setOpen(!open);
    //   };

    const handleClick = (e, item) => {
        e.preventDefault();
        setOpen(false), 
        setCreatorFilter(item) 
    }
    // console.log('creator dropdown:', open, creatorFilter)
  
    return (
      <div>
         <label>
            Filter by: 
        <button className={styles.dropdownButton} onClick={() => { setOpen(!open)}}>{ (creatorFilter == '' ) | (creatorFilter == 'View All') ? 'Creator' : creatorFilter }
                <FontAwesomeIcon className={styles.angleIcon} icon={faAngleDown} />
        </button>
            {open && <div>
                {creatorArray.map(item => {
                    if (creatorFilter == 'View All') {
                        setCreatorFilter(''),  setOpen(false)
                    } else {
                       
                    return (
                        <ul onClick={(e) => handleClick(e, item)}>{item}</ul>
                        )
                    }
                })}
            </div> }
        </label>
      </div>
    );
}