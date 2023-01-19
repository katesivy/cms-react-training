import React, {useContext, useReducer} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../state/PageWrapper";
import styles from '../styles/Pagination.module.css'

const initialState = {count: 0}

export default function Pagination () {
    const { total, offset, setOffset } = useContext(AppContext);

    function reducer(state: { count: number; }, action: { type: string; }) {
        switch (action.type) {
            case 'add': 
                setOffset(state.count + 15)
                if ((state.count == total) || (offset + 15 > total)) {
                    setOffset(state.count)
                    return {
                        count: state.count
                    }
                } else {
                    return {
                        count: state.count + 15,
                    }
                }
            case 'subtract': 
                setOffset(state.count - 15)
                if (state.count <= 15) {
                    return {
                        count: initialState.count
                    }
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
                {/* <button onClick={() => {dispatch({type: 'reset'}), setOffset(state.count)}}>Reset</button> */}
            </div>
        )
    }

    return (
        <>
            <Counter />
        </>
    )
}