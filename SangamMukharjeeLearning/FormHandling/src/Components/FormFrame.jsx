import PropType from "prop-types";
import InputField from "./Fileds/InputField";

function FormFrame({ fieldsConfig = [] }) {
  return (
    <>
      <form>
        {fieldsConfig?.map((filedConfig, index) => {
          if (filedConfig?.field == "input") {
            return (
              <InputField
                key={index}
                config={filedConfig}
              />
            );
          }
        })}
      </form>
    </>
  );
}

FormFrame.propTypes = {
  fieldsConfig: PropType.array,
  eventHandler: PropType.object,
};

export default FormFrame;
