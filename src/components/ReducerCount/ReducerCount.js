import React, { useReducer } from 'react';

const initialState = { count: 0 }
const reducer = (state, action) => {

}
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>This is reducer count</h1>
        </div>
    );
};

export default ReducerCount;