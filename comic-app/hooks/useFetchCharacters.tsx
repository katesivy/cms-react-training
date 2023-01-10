import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/PageWrapper';
import { Root } from '../Components/Interfaces'


export default function useFetchCharacters () {
    const { characterFilter, setCharacterFilter, creatorFilter, setCreatorFilter, offset } = useContext(AppContext);
    const [characterFilteredComics, setCharacterFilteredComics] = useState<Root | undefined>()
    const [totalChars, setTotalChars] = useState<number>(0)
    const [isLoading, setLoading] = useState<boolean>(false)

    const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
    var crypto = require('crypto');
    const baseUrl: string = `http://gateway.marvel.com/v1/public/characters/${characterFilter.id}/comics?limit=15&offset=${offset}`;
    const timestamp: number = new Date().getTime();
    const auth: string = `${timestamp}${privateKey}${publicKey}`; 
    var hash: string = crypto.createHash('md5').update(auth).digest('hex');
    const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    const getCharacters = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.data) {
            console.log('character data', data.data)
            setCharacterFilteredComics(data.data.results)
        } 
        setLoading(false)
        if (data.data.results.length) {
          setTotalChars(data.data.total)
        } else {
          alert(`No comics contain the character ${characterFilter.name}.`)
        }
      } catch (e) {
        console.error(e)
      }
    }
  
    useEffect(() => {
      if (characterFilteredComics && !characterFilteredComics.length) {
        setCharacterFilter({name: 'Creator', id: ''})
      }
      if (characterFilter.id && !creatorFilter.id) {
        getCharacters()
      } else {
        setCharacterFilteredComics(undefined)
      }
      }, [characterFilter, offset])

    return (
      {characterFilteredComics, totalChars}
    )
}



