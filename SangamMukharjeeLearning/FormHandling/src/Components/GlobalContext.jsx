import { createContext, useState } from "react";

// Create the context
export const FormDataHandlingContext = createContext(null);

// Provide the context
export function FormDataHandlingProvider({ children }) {
  const [formData, setFormData] = useState({});
  return (
    <FormDataHandlingContext.Provider value={[formData, setFormData]}>
      {children}
    </FormDataHandlingContext.Provider>
  );
}

export function handleSubmit (e, formData) {
  e.preventDefault();
  console.log(formData);
}


