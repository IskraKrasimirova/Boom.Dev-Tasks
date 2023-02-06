import React, { useState, useEffect } from "react";

function Counter({ initialCount = 1 }) {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        document.title = `Count (${count})`;
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>Count ({count})</button>
    );
}

export default Counter;