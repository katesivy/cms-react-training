import Head from 'next/head'
import React from 'react';
import useFetch from '../hooks/useFetch';
import Comics from '../Components/Comic'
import FilteredComics from '../Components/FilteredComics';
import Hero from '../Components/Hero';


export default function Home() {
  const { comics } = useFetch();
  
  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>

      <div >
        <Hero />
        <FilteredComics  />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 100%), 1fr))', background: '#F8F8F2' }}>
            {comics && comics.map((comic, index: number) => {
                var month: string = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                var d = new Date(comic.dates[0].date)
                var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                let splitTitle = comic.title.split('(')[0];
                return (
                  <>

                    <Comics key={index} comic={comic} title={splitTitle} newDate={newDate} />
                  </>
                  )
                }
            )}
        </div>
      </div>
    </main>
    </>
  );
}
