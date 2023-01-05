import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/PageWrapper';
import { Root } from '../Components/Interfaces';

export default function useFetchCreators () {
    const { creatorFilter, offset } = useContext(AppContext);
    const [totalCreators, setTotalCreators] = useState<number>(0)
    const [creatorFilteredComics, setCreatorFilteredComics] = useState<Root | undefined>()

    const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
    var crypto = require('crypto');
    const baseUrl: string = `http://gateway.marvel.com/v1/public/creators/${creatorFilter.id}/comics?limit=15&offset=${offset}`;
    const timestamp: number = new Date().getTime();
    const auth: string = `${timestamp}${privateKey}${publicKey}`; 
    var hash: string = crypto.createHash('md5').update(auth).digest('hex');
    const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    
    const [isLoading, setLoading] = useState<boolean>(false);

    const getCreators = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.data) {
            console.log('creator data', data.data)
            setCreatorFilteredComics(data.data.results)
        } 
        if (data.data.results.length) {
          setTotalCreators(data.data.total)
        } else {
          alert(`No comics contain the creator ${creatorFilter.fullName}.`)
        }
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
  
    useEffect(() => {
      if (creatorFilter.id) {
        getCreators()
      } else {
        setCreatorFilteredComics(undefined)
      }
      }, [creatorFilter, offset])



    
    return (
      {creatorFilteredComics, totalCreators}
    )
}



