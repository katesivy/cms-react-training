import {useState } from "react";

export const useCountFavs = ({
    maxValue = 10,
    minValue = 0,
    initial = 0
}) => {
    const [value, setValue] = useState(initial);

    const inc = () => {
        setValue(prevState => (prevState >= maxValue ? maxValue : prevState + 1))
    }

    const dec = () => {
        setValue(prevState => (prevState <= minValue? minValue : prevState - 1))
    }

    const reset = () => setValue(initial)

    return [value, {inc, dec, reset}]
}