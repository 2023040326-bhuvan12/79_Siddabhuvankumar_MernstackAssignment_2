import { useState } from "react";

function ManualValidation() {

    const [name, setName] = useState("");
    const [error, setError] = useState("");

    function checkName(value) {

        setName(value);

        if (value.length < 3) {
            setError("Name must contain at least 3 characters.");
        } else {
            setError("");
        }
    }

    return (
        <div>

            <h3>Manual Form Validation</h3>

            <input
                type="text"
                className="form-control w-50"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => checkName(e.target.value)}
            />

            <br />

            {error && <p style={{ color: "red" }}>{error}</p>}

        </div>
    );
}

export default ManualValidation;