import employees from "../employees.json";

function Employee() {

    return (

        <div>

            <h3>Employee Details</h3>

            <table className="table table-bordered">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        employees.map((emp) => (

                            <tr key={emp.id}>

                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.department}</td>
                                <td>{emp.salary}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default Employee;