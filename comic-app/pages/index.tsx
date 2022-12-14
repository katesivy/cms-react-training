import Head from 'next/head'
import React, { useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Comic from '../Components/Comic'
import FilteredComics from '../Components/FilteredComics';
import Hero from '../Components/Hero';
import ComicList from '../Components/ComicList'
import styles from '../styles/Home.module.css'
import Favorites from '../Components/Favorites';
import PageWrapper from '../state/PageWrapper'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router';
import Paginate from '../Components/Paginate'


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
