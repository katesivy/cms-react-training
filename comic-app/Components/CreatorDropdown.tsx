import React, {useContext, useState} from "react";
import styles from '../styles/CreatorDropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";
import useFetchCreators from "../hooks/useFetchCreators";

type Props = {
    creatorFilter: String;
    setcreatorFilter(text:string): String | void;
}

// export default function CreatorDropdown ({ setcreatorFilter, creatorFilter}: Props) {
export default function CreatorDropdown () {
    const creatorArray = [
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
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = (e, creator) => {
        console.log('clicked:', creator)
        e.preventDefault();
        setOpen(prevState => !prevState), 
        setCreatorFilter(creator) 
    }
  
    return (
      <div>
         <label className={styles.label}>
            Filter by: 
        <button className={styles.dropdownButton} onClick={() => { setOpen(prevState => !prevState)}}>{ (creatorFilter.id == '' ) | (creatorFilter.id == undefined) ? 'Creator' : creatorFilter.fullName }
                <FontAwesomeIcon className={styles.angleIcon} icon={faAngleDown} />
        </button>
            {open && <div className={styles.dropdownDiv}>
                {creatorArray.map((creator, index) => {
                    return (
                        <ul key={index} onClick={(e) => handleClick(e, creator)}>{creator.fullName}</ul>
                        )
                })}
            </div> }
        </label>
      </div>
    );
}