import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import Comics from '../Components/Comics'
import { useEffect, useState } from 'react';

// const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async (url) => await axios.get(url).then((res) => res.data);
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const [comics, setComics] = useState([])
  var crypto = require('crypto');
  const baseUrl = 'http://gateway.marvel.com/v1/public/comics?';
  // const query = `?limit=${req.query.limit}&nameStartsWith=${req.query.name}`;
  const timestamp = new Date().getTime();
  const auth = `${timestamp}f0a85775813b56663b41ab843ff139c218862002bb4ff62ae36790ef6bc4bee9ec3fa24b`; 
  var hash = crypto.createHash('md5').update(auth).digest('hex');
  const url = `${baseUrl}ts=${timestamp}&apikey=bb4ff62ae36790ef6bc4bee9ec3fa24b&hash=${hash}`;

  const getComics = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log('data', data.data.results)
      setComics(data.data.results)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getComics(0)
    }, [])
console.log(comics)

  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>

      <div >
        <h1>My Comics App</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 100%), 1fr))', gap:'20px', background: 'beige',  placeItems: 'center' }}>
            {comics && comics.map((comic, index) => {
                // var month = new Date(comic.publishDate).toLocaleString('en-US', { month: 'long' });
                // var d = new Date(comic.publishDate)
                // var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                let splitTitle = comic.title.split('(')
                return (
                  <h2>{comic.title}</h2>
                  // <Comics key={index} comic={comic} title={splitTitle} newDate={newDate} />
                  )
                }
            )}
        </div>
      </div>
    </main>
    </>
  );
}
