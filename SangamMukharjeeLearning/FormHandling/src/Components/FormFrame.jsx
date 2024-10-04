import PropType from "prop-types";
import InputField from "./Fileds/InputField";
import { FormDataHandlingProvider } from "./GlobalContext";

function FormFrame({ fieldsConfig = [] }) {
  return (
    <>
      <FormDataHandlingProvider>
        <form>
          {fieldsConfig?.map((filedConfig, index) => {
            if (filedConfig?.field == "input") {
              return <InputField key={index} config={filedConfig} />;
            }
          })}
        </form>
      </FormDataHandlingProvider>
    </>
  );
}

FormFrame.propTypes = {
  fieldsConfig: PropType.array,
  eventHandler: PropType.object,
};

export default FormFrame;
