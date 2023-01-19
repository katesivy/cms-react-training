import Head from 'next/head'
import React from 'react';
import Hero from '../Components/Hero';
import ComicList from '../Components/ComicList'
import styles from '../styles/Home.module.css'
import PageWrapper from '../state/PageWrapper'
import { Montserrat } from '@next/font/google'
import Footer from '../Components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main className={montserrat.className}>
    <PageWrapper>
        <div className={styles.appContainer} >
            <Hero />
            <div className={styles.mainContainer}>
                <ComicList />
            </div>
            <Footer />
        </div>
    </PageWrapper>
    </main>
    </>
  );
}
