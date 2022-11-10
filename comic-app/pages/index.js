import Head from 'next/head'
import Comics from '../Components/Comics'
import useFetch from '../hooks/useFetch';


export default function Home() {
  const comicsList = useFetch();
  console.log('list', comicsList)

  return (
    <>
    <Head>
      <title>Comic App</title>
    </Head>
    <main style={{ padding: 40}}>

      <div >
        <h1>My Comics App</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(15rem, 100%), 1fr))', gap:'20px', background: 'beige',  placeItems: 'center' }}>
            {comicsList && comicsList.comics.map((comic, index) => {
                var month = new Date(comic.dates[0].date).toLocaleString('en-US', { month: 'long' });
                var d = new Date(comic.dates[0].date)
                var newDate = month + ' ' + d.getDate() + ', ' + d.getFullYear()
                let splitTitle = comic.title.split('(')[0];
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
