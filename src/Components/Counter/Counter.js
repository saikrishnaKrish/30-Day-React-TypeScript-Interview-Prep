import { useState, useMemo } from 'react';

const Counter = () => {
    const initialCount = Number(localStorage.getItem("count")) || 0;
    const [count, setCount] = useState(initialCount);
    const [holdValue, setValue] = useState(0);

    function checkPrime(num) {
        const absNum = Math.abs(num);
        if (absNum <= 1) return false;
        for (let i = 2; i <= Math.sqrt(absNum); i++) {
            if (absNum % i === 0) return false;
        }
        return true;
    }

    // ✅ OPTIMIZATION: Memoize expensive calculations
    const isPrime = useMemo(() => checkPrime(count), [count]);
    const step = useMemo(() => isPrime ? 2 : 1, [isPrime]);
    const incrementDisabled = useMemo(() => count + step > 50, [count, step]);
    const decrementDisabled = useMemo(() => count - step < -50, [count, step]);

    const handleCount = (value) => {
        if (value === "+") {
            setCount((count) => {
                setValue(count);
                // Use memoized step value
                const newCount = count + step;

                // Don't exceed upper bound
                if (newCount > 50) return count;

                localStorage.setItem("count", newCount);
                return newCount;
            });

        } else if (value === "-") {
            setCount((count) => {
                setValue(count);
                // Use memoized step value
                const newCount = count - step;

                // Don't exceed lower bound
                if (newCount < -50) return count;

                localStorage.setItem("count", newCount);
                return newCount;
            });
        }
    }
    return <div style={{
        backgroundColor: count == 0 ? "#bc7c7c" : count > 0 ? "green" : "orange",
        width: "500px",
        margin: "auto",
        border: "10px solid rgb(69, 227, 227)",
        borderRadius: "20px",
        padding: "16px"
    }}>
        <p style={{
            fontSize: "20px",
            color: "blue",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",

        }}>count  {count}</p>
        <button
            disabled={incrementDisabled}
            onClick={() => handleCount("+")}
            style={{ margin: "10px" }}
        >
            Increment
        </button>
        <button
            disabled={decrementDisabled}
            onClick={() => handleCount("-")}
            style={{ margin: "10px" }}
        >
            Decrement
        </button>
        <button onClick={() => {
            setValue(count);
            setCount(0);
            localStorage.setItem("count", 0);
        }} style={{ margin: "10px" }}>Reset</button>
        <button
            disabled={holdValue === count}
            onClick={() => {
                const temp = count;
                setCount(holdValue);
                setValue(temp);
                localStorage.setItem("count", holdValue);
            }}
            style={{ margin: "10px" }}
        >
            UNDO - {holdValue}
        </button>
    </div>

}

export default Counter;