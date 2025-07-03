import { useReducer, useState } from 'react';
import css from './Counter.module.css'

function countReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload}
            break;
        case 'decrement':
            return {...state, count: state.count - action.payload}
            break;
        default: return state;
    }
}

function Counter() {

    // const [count, setCount] = useState(0);

    const [state, setCount] = useReducer(countReducer, {count: 0})





    return (
        <div className={css.container}>
            <button onClick={() => setCount({ type: 'increment', payload: 1 })} className={css.btn} type="button">+</button>
            <p className={css.value}>{state.count}</p>
            <button onClick={() => setCount({ type: 'decrement', payload: 1 })} className={css.btn} type="button">-</button>
        </div>
    );
}

export default Counter;