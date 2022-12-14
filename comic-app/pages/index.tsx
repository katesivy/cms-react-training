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
  // const { comics } = useFetch();
  const comics = [
    {
        "id": 100213,
        "title": "Hulk Vs. Thor: Banner Of War  (Trade Paperback)",
        "issueNumber": 0,
        "publishDate": "2022-10-19T00:00:00-0400",
        "creators": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12712",
                "name": "Donny Cates",
                "role": "writer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/14143",
                "name": "Nadia Shammas",
                "role": "writer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/14285",
                "name": "Martin Coccolo",
                "role": "penciller"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
                "name": "Nic Klein",
                "role": "penciller"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/308",
                "name": "Gary Frank",
                "role": "penciller (cover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                "name": "Jeff Youngquist",
                "role": "editor"
            }
        ],
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/634d57a98bda4.jpg"
    },
    {
        "id": 95773,
        "title": "Avengers Forever (2021) #8",
        "issueNumber": 8,
        "publishDate": "2022-08-24T00:00:00-0400",
        "creators": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                "name": "Jason Aaron",
                "role": "writer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                "name": "Tom Brevoort",
                "role": "editor"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12239",
                "name": "Guru Efx",
                "role": "colorist"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/426",
                "name": "Jason Keith",
                "role": "colorist (cover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12979",
                "name": "Aaron Kuder",
                "role": "penciler (cover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                "name": "Vc Cory Petit",
                "role": "letterer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/480",
                "name": "Cam Smith",
                "role": "inker"
            }
        ],
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/630507910522f.jpg"
    },
    {
        "id": 99641,
        "title": "Avengers 1,000,000 BC (2022) #1",
        "issueNumber": 1,
        "publishDate": "2022-08-17T00:00:00-0400",
        "creators": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11463",
                "name": "Jason Aaron",
                "role": "writer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
                "name": "Tom Brevoort",
                "role": "editor"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/649",
                "name": "Ed Mcguinness",
                "role": "penciler (cover)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
                "name": "Vc Cory Petit",
                "role": "letterer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/234",
                "name": "Kev Walker",
                "role": "inker"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/442",
                "name": "Dean White",
                "role": "colorist"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/10279",
                "name": "Matthew Wilson",
                "role": "colorist (cover)"
            }
        ],
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/62f3c6a4b53d9.jpg"
    },
  ]

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
                // var month: string = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                // var d = new Date(comic.dates[0].date)
                // var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                let splitTitle = comic.title.split('(')[0];
                return (
                  <>
                    <Comic key={index} comic={comic} title={splitTitle}  />
                    {/* newDate={newDate} */}
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
