import Head from 'next/head'
import React from 'react';
import Comics from '../Components/Comic'
import useFetch from '../hooks/useFetch';
import Filter from '../Components/Filter'
import ComicsList from '../Components/ComicsList';


type Thumbnail = {
  path: string,
  extension: string,
  id? : number
}

type Dates = {
  date: string;
}[]

// type Comic = {
//   id: number | string; 
//   title: string | undefined;
//   issueNumber: number; 
//   creators: string[] | undefined; 
//   thumbnail: Thumbnail; 
//   characters: {};
//   dates?: Dates | undefined;
//   newDate: string;
// } | undefined;


export default function Home() {
  const { comics } = useFetch();

  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>

      <div >
        <h1>My Comics App</h1>
        <ComicsList 
        // comic={{
            // id: '',
            // issueNumber: 0,
            // creators: undefined,
            // id: number,
            // title: string | undefined,
            // issueNumber: 0, 
            // creators: string[] | undefined; 
            // thumbnail: Thumbnail; 
            // characters: {};
            // dates?: Dates | undefined;
            // newDate: string;
            // thumbnail: {
            //   path: '',
            //   extension: '',
            //   id: undefined
            // }
          // }} 
          // title={''} 
          // newDate={''} 
           />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 100%), 1fr))', gap:'20px', background: 'beige' }}>
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
