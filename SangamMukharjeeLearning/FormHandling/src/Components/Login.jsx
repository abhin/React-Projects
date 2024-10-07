import FormFrame from "./FormFrame";
import {loginFormFields} from "./FormFieldsConfig.jsx";
import { FormDataHandlingProvider } from "./GlobalContext";

function Login() {
    // const [formData] = useContext(FormDataHandlingContext);

    const handleSubmit = (e, formData) => {
        e.preventDefault();
        console.log(formData);
    }

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