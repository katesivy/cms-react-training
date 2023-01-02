import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/PageWrapper';


interface Characters {
  id?: number,
  fullName?: string,
}[]

export default function useFetchCharacters () {
    const { characterFilter } = useContext(AppContext);
    // console.log('charfiter', characterFilter.id)
    const [characterFilteredComics, setCharacterFilteredComics] = useState<Characters>([])
    const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
    var crypto = require('crypto');
    const baseUrl: string = `http://gateway.marvel.com/v1/public/characters/${characterFilter.id}/comics?`;
    const timestamp: number = new Date().getTime();
    const auth: string = `${timestamp}${privateKey}${publicKey}`; 
    var hash: string = crypto.createHash('md5').update(auth).digest('hex');
    const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    
    const [isLoading, setLoading] = useState<boolean>(false)
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    const getCharacters = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.data) {
            console.log('character data', data.data.results)
            setCharacterFilteredComics(data.data.results)
        } 
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    }
  
    useEffect(() => {
      if (characterFilter.id) {
        getCharacters()
      } else {
        setCharacterFilteredComics([])
      }
      }, [characterFilter])



    
    return (
    
      {characterFilteredComics}

    )
}



