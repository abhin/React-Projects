import { FormDataHandlingProvider, handleSubmit } from './GlobalContext'
import FormFrame from './FormFrame'
import { registerFormFields } from './FormFieldsConfig'

export default function Register() {
  return (
    <>
        <h3>Or Register </h3>
        <FormDataHandlingProvider>
        <FormFrame fieldsConfig={registerFormFields} handleSubmit={handleSubmit}/>
        </FormDataHandlingProvider>
    </>
  )
}
