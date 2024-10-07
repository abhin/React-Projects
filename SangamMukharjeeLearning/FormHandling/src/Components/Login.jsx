import FormFrame from "./FormFrame";
import {loginFormFields} from "./FormFieldsConfig.jsx";
import { FormDataHandlingProvider, handleSubmit } from "./GlobalContext";

function Login() {
    return (
        <>
            <div>
                <h3>Login</h3>
                <FormDataHandlingProvider>
                <FormFrame fieldsConfig={loginFormFields} handleSubmit={handleSubmit}/>
                </FormDataHandlingProvider>
            </div>
        </>
    );
}

export default Login;