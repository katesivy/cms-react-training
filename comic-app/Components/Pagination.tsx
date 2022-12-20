import React, {useContext, useReducer} from "react";
import { AppContext } from "../state/PageWrapper";

const initialState = {count: 0}
    


export default function Pagination () {
    const { total, offset, setOffset } = useContext(AppContext);

    function reducer(state, action) {
        switch (action.type) {
            case 'add': 
                console.log('statecount', state.count)
                setOffset(state.count + 15)
                if (state.count == total) {
                    return {count: state.count}
                } else {
                    return {
                        count: state.count + 15,
                        
                    }
                }
            case 'subtract': 
                console.log('statecount', state.count)
                setOffset(state.count - 15)
                if (state.count <= 15) {
                    return {count: initialState.count}
                } else {
                    return {
                        count: state.count - 15,
                    }
            }
            case 'reset': 
                return {
                    count: initialState.count
                }
            default:
                throw new Error();
        }
    }
    console.log('offset in pagination', offset)
    const [state, dispatch] = useReducer(reducer, initialState)

    const Counter = () => {
        return (
            <div>
                <div>{state.count}-{state.count + 15} of {total}</div>
                <button onClick={() => dispatch({type: 'subtract'})}>Prev</button>
                <button onClick={() => dispatch({type: 'add'})}>Next</button>
                <button onClick={() => {dispatch({type: 'reset'}), setOffset(state.count)}}>Reset</button>
            </div>
        )
       }

    return (
        <>
            <Counter />
        </>
    )
}