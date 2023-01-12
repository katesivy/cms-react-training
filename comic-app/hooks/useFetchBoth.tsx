import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/PageWrapper';
import { Root } from '../Components/Interfaces';

export default function useFetchBoth () {
    const { characterFilter, creatorFilter, offset, total } = useContext(AppContext);
    const [bothSelectedComics, setBothSelectedComics] = useState<Root | undefined>()
    const [bothTotal, setBothTotal] = useState<number>(0)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [bothStatus, setBothStatus] = useState<boolean>(true)

    const privateKey: string | undefined = process.env.NEXT_PUBLIC_PRIVATE_API_KEY
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY
    var crypto = require('crypto');
    const baseUrl: string = `http://gateway.marvel.com/v1/public/comics?limit=15&offset=${offset}&characters=${characterFilter.id}&creators=${creatorFilter.id}`;
    const timestamp: number = new Date().getTime();
    const auth: string = `${timestamp}${privateKey}${publicKey}`; 
    var hash: string = crypto.createHash('md5').update(auth).digest('hex');
    const url: string = `${baseUrl}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    const getBoth = async () => {
        console.log('getting both')
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.data) {
            console.log('both data', data.data)
            setBothSelectedComics(data.data.results)
            setBothStatus(true)
        } 
        setLoading(false)
        if (data.data.results.length) {
            setBothTotal(data.data.total)
        } else {
            setBothStatus(false)
            alert(`No comics contain the character ${characterFilter.name} and creator ${creatorFilter.fullName}.`)
        }
        console.log('both in useeffect', bothStatus)
      } catch (e) {
        console.error(e)
      }
    }

    useEffect(() => {
      if (characterFilter.id && characterFilter.id != '' && creatorFilter.id && creatorFilter.id != '') {
        getBoth()
      } else {
        setBothSelectedComics(undefined)
      }
      }, [characterFilter, creatorFilter, offset])

    return (
      {bothSelectedComics, bothTotal, bothStatus, setBothStatus}
    )
}



