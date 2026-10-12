function Conditional() {

    const isLogin = true;

    return (

        <div>

            <h3>Conditional Rendering</h3>

            {
                isLogin
                    ? <h4>Welcome User</h4>
                    : <h4>Please Login</h4>
            }

        </div>

    );

}

export default Conditional;