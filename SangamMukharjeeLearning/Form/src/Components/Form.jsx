import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };
  return (
    <>
      <div>
        <h1>Form</h1>
        <p>Name: {formData.name}</p>
        <input
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter name"
          onChange={handleChange}
        />

        <input
          value={formData.email}
          name="email"
          id="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Form;
