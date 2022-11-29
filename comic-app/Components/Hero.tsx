import Head from 'next/head'
import React from 'react';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import heroPhoto from '../public/hero-photo.png'

type LoaderProps = {
  src: string,
  width: number | string,
  quality?: number | string | undefined, 
}

export default function Hero() {
  const { comics } = useFetch();
  const myLoader = ({ src, width, quality }: LoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const image: any =
      <Image className={styles.image}
        loader={myLoader}
        src={heroPhoto}
        alt='hero img'
      />

  return (
        <div className={styles.heroContainer}>
            <div className={styles.heroImgContainer}>
                {image}
            </div>
            <div className={styles.heroTitleBox}>
                <h1 className={styles.heroTitle}>
                    Comic Closet
                </h1>
            </div>
            <div className={styles.newComicsBox}> 
                <h5 className={styles.newComics}>New Comics!</h5>
            </div>
           <h2 className={styles.comingOutDaily}>Coming Out Daily</h2>
           <p className={styles.latin}>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </div>
    )
}