import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'
import { setConstantValue } from 'typescript';
import { AppContext } from '../state/PageWrapper';

type Thumbnail = {
  path: string,
  extension: string,
  id? : number
}

type Characters = {
  available: number,
  collectionURI: string,
  items: string[],
  returned: number
}

type Dates = {
  date: string;
  type: string;
}[] 

interface Comics {
  isFavorite: boolean;
  id: string; 
  title: string;
  issueNumber: number; 
  creators: string[] | undefined; 
  thumbnail: Thumbnail; 
  characters: Characters | undefined;
  dates?: Dates | undefined;
}[]


export default function useFetchComics () {
    const [comics, setComics] = useState<Comics>([])
    const { total, setTotal, offset } = useContext(AppContext);
    const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
    var crypto = require('crypto');
    const baseUrl: string = `http://gateway.marvel.com/v1/public/comics?limit=15&offset=${offset}`;
    const timestamp: number = new Date().getTime();
    const auth: string = `${timestamp}${privateKey}${publicKey}`; 
    var hash: string = crypto.createHash('md5').update(auth).digest('hex');
    const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    
    const [isLoading, setLoading] = useState<boolean>(false)

    const getComics = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log('comic data', data.data.results)
        setTotal(data.data.total)
        setComics(data.data.results)
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }

    useEffect(() => {
      getComics()
      }, [offset])

    return (
      {comics}
    )
}



