import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/PageWrapper';


interface Creators {
  id: number,
  fullName: string,
}[]
// const baseUrl: string = 'http://gateway.marvel.com/v1/public/creators/${creatorFilter.id}/comics?';

export default function useFetchCreators () {
    const { creatorFilter } = useContext(AppContext);
    const [creatorFilteredComics, setCreatorFilteredComics] = useState<Creators>([])
    const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
    var crypto = require('crypto');
    const baseUrl: string = creatorFilter ? `http://gateway.marvel.com/v1/public/creators/${creatorFilter.id}/comics?` : [];
    const timestamp: number = new Date().getTime();
    const auth: string = `${timestamp}${privateKey}${publicKey}`; 
    var hash: string = crypto.createHash('md5').update(auth).digest('hex');
    const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    
    const [isLoading, setLoading] = useState<boolean>(false)
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    const getCreators = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.data) {
            console.log('data', data.data.results)
            setCreatorFilteredComics(data.data.results)
        } 
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
  
    useEffect(() => {
      getCreators()
      }, [creatorFilter])



    
    return (
    
      {creatorFilteredComics}

    )
}



