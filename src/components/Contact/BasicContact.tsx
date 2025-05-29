import { useState } from "react";

const BasicContact = () => {
    const dataCity = [
        {
            value: "rioDeJaneiro",
            text: "Rio de Janeiro"
        },
        {
            value: "saoPaulo",
            text: "São Paulo"
        }
    ]

    const [ inputValue, setInputValue ] = useState("");
    const [ selectedOption, setSelectedOption ] = useState(dataCity[0].value);
    const [ isChecked, setIsChecked ] = useState(false);

    const handleChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const handleDropdownChange = (event: any) => {
        setSelectedOption(event.target.value)
    }

    const handleCheckedChange = (event: any) => {
        setIsChecked(event.target.checked);
    }

  return (
    <form className="flex flex-col">
        <label>
            Name:
            <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <p>Input Value: {inputValue}</p>

        <label>
            CIdade: 
            <select name="city" id="city" value={selectedOption} onChange={handleDropdownChange}>
                {dataCity.map((d: any, i: number) => (
                    <option key={`d-${i}`} value={d.value}>{d.text}</option>
                ))}
            </select>
        </label>
        <p>Selected Option: {selectedOption}</p>

        <label htmlFor="color">
            <input type="checkbox" name="color" checked={isChecked} onChange={handleCheckedChange} />
        </label>

        {isChecked && <div>Blue is selected!</div>}
        
        <button>Submit</button>
    </form>
  );
};

export default BasicContact;