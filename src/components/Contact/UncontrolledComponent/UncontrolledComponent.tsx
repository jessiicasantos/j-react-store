import { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef<any>(null);
  const selectRef = useRef<any>(null);
  const checkboxRef = useRef<any>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log("Input value: ", inputRef.current.value);
    console.log("Select value: ", selectRef.current.value);
    console.log("Checkbox value: ", checkboxRef.current.checked);
  }

  return (
    <div className="contact-us">
        <h1>Uncontrolled Component</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              ref={inputRef} 
              type="text" 
            />
          </label>
          <label>
            Favorite color:
            <select 
              ref={selectRef}
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </label>
          <label>
            Do you like React?
            <input 
              type="checkbox" 
              ref={checkboxRef} 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default UncontrolledComponent;
