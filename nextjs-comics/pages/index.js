import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import Comics from '../components/Comics'

// const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async (url) => await axios.get(url).then((res) => res.data);
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/staticdata', fetcher)
  if (!data) return <p>No profile data, {error} </p>

  let parsed = JSON.parse(data).comics[0]
  console.log(parsed)
  
  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>

      <div >
        <h1>My Comics</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
          {data && parsed.map((comic, index) => {
            return (
              <Comics key={index} comic={comic} />
              )
            }
            )}
        </div>
      </div>
    </main>
    </>
  );
}
