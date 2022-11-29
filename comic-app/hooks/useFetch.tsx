import { useEffect, useState } from 'react';
import { env } from 'process';

type Thumbnail = {
  path: string,
  extension: string,
  id? : number
}

type Dates = {
  date: string;
}[]

type Comics = {
  id: number; 
  title: string;
  issueNumber: number; 
  creators: string[] | undefined; 
  thumbnail: Thumbnail; 
  characters: string[] | undefined;
  dates?: Dates | undefined;
}[]


export default function useFetch () {
    const [comics, setComics] = useState<Comics>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
    var crypto = require('crypto');
    const baseUrl: string = 'http://gateway.marvel.com/v1/public/comics?';
    // const query = `?limit=${req.query.limit}&nameStartsWith=${req.query.name}`;
    const timestamp: number = new Date().getTime();
    const auth: string = `${timestamp}${privateKey}${publicKey}`; 
    var hash: string = crypto.createHash('md5').update(auth).digest('hex');
    const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

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

