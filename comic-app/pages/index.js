import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import Comics from '../Components/Comics'

// const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async (url) => await axios.get(url).then((res) => res.data);
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/staticdata', fetcher)
  if (!data) return <p>No profile data, {error} </p>

  let comicsList = JSON.parse(data).comics[0]

  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>

      <div >
        <h1>My Comics App</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 100%), 1fr))', gap:'20px', background: 'beige',  placeItems: 'center' }}>
            {data && comicsList.map((comic, index) => {
                var month = new Date(comic.publishDate).toLocaleString('en-US', { month: 'long' });
                var d = new Date(comic.publishDate)
                var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                let splitTitle = comic.title.split('(')
                return (
                  <Comics key={index} comic={comic} title={splitTitle} newDate={newDate} />
                  )
                }
            )}
        </div>
      </div>
    </main>
    </>
  );
}
