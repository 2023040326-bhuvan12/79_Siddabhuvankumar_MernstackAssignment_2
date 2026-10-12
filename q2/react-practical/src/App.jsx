import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Counter from "./components/Counter";
import Conditional from "./components/Conditional";
import List from "./components/List";
import Parent from "./components/Parent";
import UseStateDemo from "./components/UseStateDemo";
import UseRefDemo from "./components/UseRefDemo";
import Clock from "./components/Clock";
import ManualValidation from "./components/ManualValidation";
import LibraryValidation from "./components/LibraryValidation";
import Employee from "./components/Employee";
import Student from "./components/Student";

function App() {

    return (

        <BrowserRouter>

            <div className="container mt-3">

                <h2>React Practical</h2>

                <nav className="mb-4">

                    <Link to="/">Home</Link>{" | "}

                    <Link to="/counter">Counter</Link>{" | "}

                    <Link to="/conditional">Conditional</Link>{" | "}

                    <Link to="/list">List</Link>{" | "}

                    <Link to="/parent">Nested</Link>{" | "}

                    <Link to="/state">useState</Link>{" | "}

                    <Link to="/ref">useRef</Link>{" | "}

                    <Link to="/clock">Clock</Link>{" | "}

                    <Link to="/manual">Manual Validation</Link>{" | "}

                    <Link to="/library">Library Validation</Link>{" | "}

                    <Link to="/employee">Employee</Link>{" | "}

                    <Link to="/student">Student</Link>

                </nav>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/counter"
                        element={<Counter />}
                    />

                    <Route
                        path="/conditional"
                        element={<Conditional />}
                    />

                    <Route
                        path="/list"
                        element={<List />}
                    />

                    <Route
                        path="/parent"
                        element={<Parent />}
                    />

                    <Route
                        path="/state"
                        element={<UseStateDemo />}
                    />

                    <Route
                        path="/ref"
                        element={<UseRefDemo />}
                    />

                    <Route
                        path="/clock"
                        element={<Clock />}
                    />

                    <Route
                        path="/manual"
                        element={<ManualValidation />}
                    />

                    <Route
                        path="/library"
                        element={<LibraryValidation />}
                    />

                    <Route
                        path="/employee"
                        element={<Employee />}
                    />

                    <Route
                        path="/student"
                        element={<Student />}
                    />

                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;