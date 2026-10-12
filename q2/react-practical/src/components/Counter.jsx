import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h3>Counter Component</h3>

            <h2>{count}</h2>

            <button
                className="btn btn-primary me-2"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

            <button
                className="btn btn-warning me-2"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>

            <button
                className="btn btn-danger"
                onClick={() => setCount(0)}
            >
                Reset
            </button>

        </div>

    );

}

export default Counter;