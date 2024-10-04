import PropType from "prop-types";
import { useContext } from "react";
import {FormDataHandlingContext} from "../GlobalContext";

// InputField component
function InputField({ config = {} }) {
  const [formData, setFormData] = useContext(FormDataHandlingContext);

  return (
    <>
      <label htmlFor={config.attr.id}>{config.label}</label>
      <input
        {...config.attr}
        value={formData[config.attr.name] || ''}
        onChange={(e) => {
          setFormData({
            ...formData,
            [config.attr.name]: e.target.value,
          });
        }}
      />
    </>
  );
}

InputField.propTypes = {
  config: PropType.object,
};

export default InputField;
