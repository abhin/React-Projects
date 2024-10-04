import FormFrame from "./FormFrame";
import {loginFormFields} from "./FormFieldsConfig.jsx";

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