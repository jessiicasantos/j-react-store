

import { useState } from "react";

const MultipleFormFIelds = () => {
    const [ formData, setFormData ] = useState({ name: "", email: "", message: "" });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, E-mail: ${formData.email}, Message: ${formData.message}`);
    };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name">
            Name: 
            <input type="text" id="name"  name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label htmlFor="email">
            E-mail:
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label htmlFor="message">
            Message:
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleFormFIelds;