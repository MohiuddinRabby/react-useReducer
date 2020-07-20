import React, { useReducer } from 'react';

const initialState = { count: 0 }
const reducer = (state, action) => {
    console.log(action, state)
    switch (action.type) {
        case 'INCREAMENT':
            return { count: state.count + 1 }
        case 'DECREAMENT':
            return { count: state.count - 1 }
        default:
            return state;

    }
}
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>This is reducer count:{state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREAMENT' })}>Increament</button>
            <button onClick={() => dispatch({ type: 'DECREAMENT' })}>Decreament</button>
        </div>
    );
};

export default ReducerCount;