import React, { useContext, useReducer } from 'react';

// Expose the context in case not using the context hook.
export const CounterContext = React.createContext();

// REDUCER
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };

        case 'decrement':
            return { count: state.count - 1 };

        default:
            return state;
    }
}

// PROVIDER
function CounterProvider({ children }) {
    return <CounterContext.Provider value={useReducer(counterReducer, { count: 0 })}>
        {children}
    </CounterContext.Provider>
}

// Context hook for access the context values.
function useCounterContext() {
    const context = useContext(CounterContext);
    if (context) {
        return context;
    }
    throw new Error('context is not configured');
}


export { CounterProvider, useCounterContext };
