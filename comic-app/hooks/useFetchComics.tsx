import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/PageWrapper';
import { Root } from '../Components/Interfaces';


export default function useFetchComics () {
    const [comics, setComics] = useState<Root>()
    const { offset } = useContext(AppContext);
    const [totalComics, setTotalComics] = useState<number>(0)

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
        setTotalComics(data.data.total)
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
      {comics, totalComics}
    )
}



