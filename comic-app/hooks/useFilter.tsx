import { useState } from "react"

export const useFilter = () => {

    const [ creatorArray, setCreatorArray ] = useState<string[]>([])
    const [ characterArray, setCharacterArray ] = useState<string[]>([])
    const [ combinedArray, setCombinedArray ] = useState<string[]>([])

    return { creatorArray, setCreatorArray, characterArray, setCharacterArray, combinedArray, setCombinedArray }
}