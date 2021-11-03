import { CounterContext, CounterProvider, useCounterContext } from "../context/counterContext"

const Counter = () => {
    const [state, dispatch] = useCounterContext();

    return <div>
        <p>Used HOOK - Counter - {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <CounterConsumer />
    </div>
}

const CounterConsumer = () =>
    <CounterContext.Consumer>
        {([state]) => <div>Used Consumer :<b>{state.count}</b></div>}
    </CounterContext.Consumer>


export const CounterWrapper = () =>
    <CounterProvider>
        <Counter />
    </CounterProvider>
