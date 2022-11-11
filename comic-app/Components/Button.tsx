import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Button.module.css'

export default function Button() {

    return (

        <div className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.icon} icon={faBolt} />
        </div>
    )
}