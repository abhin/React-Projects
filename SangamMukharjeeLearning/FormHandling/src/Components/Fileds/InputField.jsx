import PropType from "prop-types";

function InputField({ config = {} }) {
  return (
    <>
      <label htmlFor={config.attr.id}>{config.label}</label>
      <input {...config.attr} />
    </>
  );
}

InputField.propTypes = {
  config: PropType.object,
};

export default InputField;
