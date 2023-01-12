import React, {useContext, useState} from "react";
import styles from '../styles/CreatorDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";
import { Creator } from "./Interfaces";
import useFetchCreators from "../hooks/useFetchCreators";
import useFetchBoth from "../hooks/useFetchBoth";

export default function CreatorDropdown () {
    const creatorArray: Creator[] = [
        {fullName:'View All', id: ''},
        {fullName:'Kate Leth', id: '12787'},
        {fullName:'Brian Michael Bendis', id: '24'},
        {fullName:'Stan Lee', id: '30'},        
        {fullName:'Steve Ditko', id: '32'},        
        {fullName:'Jack Kirby', id: '196'},
        {fullName:'Daniel Way', id: '123'},
        {fullName:'Mike Mayhew', id: '1234'}
    ]
    const { creatorFilter, setCreatorFilter  } = useContext(AppContext);
    const { creatorFilteredComics } = useFetchCreators();
    const {  bothStatus, setBothStatus } = useFetchBoth();
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>, creator: Creator) => {
        e.preventDefault();
        // setBothStatus(true)
        setOpen(prevState => !prevState);
        if (creatorFilteredComics && !creatorFilteredComics.length) {
            setCreatorFilter({fullName: 'Creator', id: ''})
        }
        setCreatorFilter(creator)
    }
  
    return (
      <div>
         <label className={styles.label}>
            
        <button className={styles.dropdownButton} onClick={() => { setOpen(prevState => !prevState)}}>
                { (creatorFilter.id == '' ) || (creatorFilter.id == undefined) || ( creatorFilteredComics && !creatorFilteredComics.length )
                    ? 'Creator' 
                    : creatorFilter.fullName }
                <FontAwesomeIcon className={styles.angleIcon} icon={faAngleDown} />
        </button>
            {open && <div className={styles.dropdownDiv}>
                {creatorArray.map((creator, index) => {
                    return (
                        <ul className={styles.ul} key={index} onClick={(e) => handleClick(e, creator)}>{creator.fullName}</ul>
                        )
                })}
            </div> }
        </label>
      </div>
    );
}