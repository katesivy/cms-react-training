import Head from 'next/head'
import React, {useContext, useEffect} from 'react';
import Hero from '../Components/Hero';
import ComicList from '../Components/ComicList'
import styles from '../styles/Home.module.css'
import Favorites from '../Components/Favorites';
import PageWrapper, { AppContext } from '../state/PageWrapper'

export default function Home() {
    return (
      <>
      <Head>
        <title>Comic App</title>
      </Head>
      <main >
      <PageWrapper>
          <div >
              <Hero />
              <div className={styles.mainContainer}>
                  <ComicList />
              </div>
          </div>
      </PageWrapper>
      </main>
      </>
    );
}
