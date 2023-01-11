import React, {useContext} from "react";
import styles from '../styles/ShowFilters.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";

export default function ShowFilters () {
    const { isFiltersOpen, setIsFiltersOpen } = useContext(AppContext);
  
    return (
      <div className={styles.showFilterDiv}>
         {/* <label className={styles.label}> */}
            <button className={styles.dropdownButton} onClick={() => { setIsFiltersOpen(prevState => !prevState)}}>
                Filter
                <FontAwesomeIcon className={styles.icon} icon={faFilter} />
            </button>
        {/* </label> */}
      </div>
    );
}