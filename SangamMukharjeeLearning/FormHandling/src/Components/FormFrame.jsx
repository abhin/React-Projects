import PropType from "prop-types";
import InputField from "./Fileds/InputField";
import { FormDataHandlingContext } from "./GlobalContext";
import { useContext } from "react";

function FormFrame({ fieldsConfig = [], handleSubmit }) {
  const [formData] = useContext(FormDataHandlingContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e, formData);
        }}
      >
        {fieldsConfig?.map((filedConfig, index) => {
          if (filedConfig?.field == "input") {
            return <InputField key={index} config={filedConfig} />;
          }
        })}
      </form>
    </>
  );
}

FormFrame.propTypes = {
  fieldsConfig: PropType.array,
  handleSubmit: PropType.func,
};

export default FormFrame;
