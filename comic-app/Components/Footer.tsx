import React from "react"
import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import logo from '../public/logo.png'



type LoaderProps = {
    src: string,
    width: number | string,
    quality?: number | string | undefined, 
  }

  
export default function Footer () {
    const myLoader = ({ src, width, quality }: LoaderProps) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
    

    const logoImage: any =
    <Image className={styles.logo}
        loader={myLoader}
        src={logo}
        alt='logo'
    />

    return (
        <div className={styles.footerDiv}>
            <div className={styles.logoDiv}>
                {logoImage}
            </div>
            <div className={styles.linksDiv}>
                <a href='#' className={styles.aDiv}>Privacy Policy</a> | <a href='#' className={styles.aDiv}>Terms of Service</a>
            </div>
            <div className={styles.copyrightDiv}>
                Copyright 2022. Comic Closet, LLC. All rights reserved.
            </div>
        </div>

    )
}