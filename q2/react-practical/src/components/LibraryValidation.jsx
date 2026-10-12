import { useState } from "react";
import validator from "validator";

function LibraryValidation() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function checkEmail(value) {

        setEmail(value);

        if (validator.isEmail(value)) {
            setMessage("Valid Email");
        } else {
            setMessage("Invalid Email");
        }
    }

    return (
        <div>

            <h3>Email Validation</h3>

            <input
                type="text"
                className="form-control w-50"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => checkEmail(e.target.value)}
            />

            <br />

            <p>{message}</p>

        </div>
    );
}

export default LibraryValidation;