import { useEffect, useState } from 'react'


export default function useFetch () {
    const [comics, setComics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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
        setIsLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
  
    useEffect(() => {
      getComics()
      }, [])
  
    return (
      {comics}
    )
}


// const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async (url) => await axios.get(url).then((res) => res.data);
// const fetcher = (...args) => fetch(...args).then((res) => res.json())

