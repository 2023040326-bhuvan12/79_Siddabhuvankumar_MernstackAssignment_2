import { useState } from "react";

function UseStateDemo() {

    const [name, setName] = useState("");

    return (
        <div>

            <h3>useState Example</h3>

            <input
                type="text"
                placeholder="Enter Name"
                className="form-control w-50"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />

            <h4>Name : {name}</h4>

        </div>
    );
}

export default UseStateDemo;