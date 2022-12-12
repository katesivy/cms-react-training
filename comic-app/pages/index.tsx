import Head from 'next/head'
import React, { useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Comic from '../Components/Comic'
import FilteredComics from '../Components/FilteredComics';
import Hero from '../Components/Hero';
import styles from '../styles/Home.module.css'
import Favorites from '../Components/Favorites';
import  PageWrapper, { AppContext } from '../state/PageWrapper'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router';
import Paginate from '../Components/Paginate'


export default function Home() {
  const { comics } = useFetch();

  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>
    <PageWrapper>
      <div >
        <Hero />
        <FilteredComics  />
        <div className={styles.comicsSection}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 50%), 1fr))', background: '#F8F8F2' }} className={styles.grid}>
            {comics && comics.map((comic: { dates?: any; title: any; id?: string; issueNumber?: number; creators?: string[] | undefined; thumbnail?: { path: string; extension: string; id?: number | undefined; }; characters?: {}; isFavorite?: boolean; }, index: number) => {
                var month: string = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                var d = new Date(comic.dates[0].date)
                var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                let splitTitle = comic.title.split('(')[0];
                return (
                  <>
                    <Comic key={index} comic={comic} title={splitTitle} newDate={newDate} />
                  </>
                  )
                }
            )}
        </div>
        <Favorites />
        {/* <Paginate /> */}
        </div>
      </div>
      </PageWrapper>
    </main>
    </>
  );
}
