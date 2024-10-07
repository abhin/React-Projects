import PropType from "prop-types";
import { useContext } from "react";
import { FormDataHandlingContext } from "../GlobalContext";

// InputField component
function InputField({ config = {} }) {
  const [formData, setFormData] = useContext(FormDataHandlingContext);

  return (
    <>
      {config?.label && (
        <label htmlFor={config?.attr?.id}>{config?.label}</label>
      )}
      <input
        {...config?.attr}
        value={formData[config?.attr?.name] || config?.attr?.value || ""}
        onChange={(e) => {
          config?.defaultHandler === "onChange" &&
            setFormData({
              ...formData,
              [config?.attr?.name]: e?.target?.value,
            });
        }}
        onClick={() => {
          config?.attr?.id == 'reset' && config?.defaultHandler === "onClick" && setFormData({});
        }}
      />
    </>
  );
}

InputField.propTypes = {
  config: PropType.object,
};

export default InputField;
