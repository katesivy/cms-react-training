import React, {useContext, useEffect, useReducer} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";
import styles from '../styles/Pagination.module.css'

const initialState = {count: 0}


export default function Pagination () {
    const { total, setOffset } = useContext(AppContext);

    function reducer(state: { count: number; }, action: { type: string; }) {
        console.log('statecount', state.count, 'pagination total', total)
        switch (action.type) {
            case 'add': 
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

    const [state, dispatch] = useReducer(reducer, initialState)

    const Counter = () => {
        return (
            <div className={styles.paginationDiv}>
                <button className={styles.iconContainer} onClick={() => dispatch({type: 'subtract'})}>
                    <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
                </button>
                <div>{state.count}-{state.count + 15} of {total}</div>
                <button className={styles.iconContainer} onClick={() => dispatch({type: 'add'})}>
                    <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
                </button>
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