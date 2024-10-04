import FormFrame from "./FormFrame";
import {loginFormFields} from "./FormFieldsConfig.jsx";

const handleChange = (e) => {
    let userNameFiels
}

function Login() {
    return (
        <>
            <div>
                <h3>Login</h3>
                <FormFrame fieldsConfig={loginFormFields} />
            </div>
        </>
    );
}

export default Login;