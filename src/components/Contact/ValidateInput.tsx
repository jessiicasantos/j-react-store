import React, { useState } from "react";


const ValidateInput = () => {
  const [ inputValue, setInputValue ] = useState('');
  const [ inputError, setInputError ] = useState<null | string>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if(value.length < 5) {
      setInputError('Input must be at least 5 characters');
    } else {
      setInputError(null);
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if(inputValue.length >- 5) {
      //submit form
      setInputError('Success!');
    } else {
      setInputError('Input must be at least 5 characters');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="">
          Fruit:
          <input type="text" name="" value={inputValue} onChange={handleInputChange} />
          {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
        </label>
        <button type="submit">Submit</button>
    </form>
  );
};

export default ValidateInput;