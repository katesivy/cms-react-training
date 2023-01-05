import Head from 'next/head'
import React from 'react';
import Hero from '../Components/Hero';
import ComicList from '../Components/ComicList'
import styles from '../styles/Home.module.css'
import Favorites from '../Components/Favorites';
import PageWrapper from '../state/PageWrapper'

export default function Home() {

  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>
    <PageWrapper>
        <div >
            <Hero />
            <div className={styles.mainContainer}>
                <ComicList />
                <Favorites />
            </div>
        </div>
    </PageWrapper>
    </main>
    </>
  );
}
