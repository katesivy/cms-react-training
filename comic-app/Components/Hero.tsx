import React from 'react';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import heroPhoto2 from '../public/hero-photo@2x.png';
import heroPhoto from '../public/hero-photo.png';
import borderPhoto2 from '../public/halftone@2x.png';
import borderPhoto from '../public/halftone.png';
import logo2 from '../public/logo@2x.png'
import TopNavs from './TopNavs';

type LoaderProps = {
  src: string,
  width: number | string,
  quality?: number | string | undefined, 
}

export default function Hero() {
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
            layout="responsive"
            priority
        />

    const borderImage: any =
        <Image className={styles.borderImage}
            loader={myLoader}
            src={borderPhoto}
            alt='hero border'
            sizes="(max-width: 400px) 100wv,
            (max-width: 640px) 100vw,
            33vw"
        />

    const logoImage: any =
        <Image className={styles.logo2}
            loader={myLoader}
            src={logo2}
            alt='logo'
            layout="responsive"
            priority
        />

  return (
    <>
        <TopNavs /> 
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
            </h1>
        </div>
        <div className={styles.headingContainer}>
            <h2 className={styles.comingOutDaily}>Coming Out Daily</h2>
            <div className={styles.newComicsBox}> 
                <h5 className={styles.newComics}>New Comics!</h5>
            </div>
        </div>
            <p className={styles.latin}>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </div>
    </>
    )
}