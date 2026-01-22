function Counter({ count, setCount}) {
    return(
        <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    )
}

export default Counter