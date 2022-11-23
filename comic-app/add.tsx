import React, { useState} from "react";

export default function Count () {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <button data-testid="counter-button" onClick={()=> setCount(prevState => prevState + 1)}>
                {count}
            </button>
        </div>
    )
}