import { useRef } from "react";

function UseRefDemo() {

    const inputRef = useRef();

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div>

            <h3>useRef Example</h3>

            <input
                type="text"
                ref={inputRef}
                className="form-control w-50"
            />

            <br />

            <button
                className="btn btn-primary"
                onClick={focusInput}
            >
                Focus Input
            </button>

        </div>
    );
}

export default UseRefDemo;