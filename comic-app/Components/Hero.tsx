import Head from 'next/head'
import React, { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import heroPhoto2 from '../public/hero-photo@2x.png';
import heroPhoto from '../public/hero-photo.png';
import borderPhoto2 from '../public/halftone@2x.png';
import borderPhoto from '../public/halftone.png';
import { AppContext } from '../state/PageWrapper';

type LoaderProps = {
  src: string,
  width: number | string,
  quality?: number | string | undefined, 
}

export default function Hero() {
  const { comics } = useFetch();
  const { favArray }  = useContext(AppContext);
//   console.log('favArray from Hero', favArray.length)
  const myLoader = ({ src, width, quality }: LoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

    const heroImage: any =
        <Image className={styles.heroImage}
            loader={myLoader}
            src={heroPhoto2}
            alt='hero img'
            width={1440}
            height={650}
            // sizes="(max-width: 400px) 100wv,
            // (max-width: 640px) 100vw,
            // 33vw"
            layout="responsive"
            priority
        />

    const borderImage: any =
        <Image className={styles.borderImage}
            loader={myLoader}
            src={borderPhoto}
            alt='hero border'
            // width={375}
            // height={225}
            
            sizes="(max-width: 400px) 100wv,
            (max-width: 640px) 100vw,
            33vw"
        />

  return (
        <div className={styles.heroContainer}>
            <div className={styles.heroImgContainer}>
                {heroImage}
            </div>
            <div className={styles.borderImgContainer}>
                {borderImage}
            </div>
            <div className={styles.heroTitleBox}>
                <h1 className={styles.heroTitle}>
                    Comic Closet
                    <p>My Favorites: {favArray.length}</p>
                </h1>
            </div>
            <div className={styles.headingContainer}>
                <h2 className={styles.comingOutDaily}>Coming Out Daily</h2>
                <div className={styles.newComicsBox}> 
                    <h5 className={styles.newComics}>New Comics!</h5>
                </div>
            </div>
           {/* <div className={styles.latinContainer}> */}
                <p className={styles.latin}>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
           {/* </div> */}
        </div>
    )
}