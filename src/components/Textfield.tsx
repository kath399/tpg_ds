import React, { useState } from 'react';
import './textfield.css';

interface TextfieldProps {
    id: string;
    complex: boolean;
    state: 'enabled' | 'disabled';
    label: string;
    error?: boolean;
    errortext?: string;
    suggestions?: string[]; // Add a new prop for suggestions
}

export const Textfield = ({
  id,
  complex,
  state = 'enabled',
  label,
  error,
  errortext = 'Error',
  suggestions = ['List item 1', 'List item 2'] // Provide default empty array for suggestions
}: TextfieldProps) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [inputValue, setInputValue] = useState(''); // State to store input value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsEmpty(value.trim() === ''); // Check if input is empty
  };

  return (
    <div className='txtfield'>
      <label htmlFor={id} className='textfield'> {label} </label>
      <input 
        id={id}
        type="text"
        className={error ? 'error' : 'textfield'}
        onChange={handleInputChange}
        disabled={state === 'disabled'}
        required={error === true}
        list="suggestions" // Associate input with the datalist
      />
      {error && <div className="error-message">{errortext}</div>}
      
      {complex && (
        <datalist id="suggestions"> {/* Create the datalist */}
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>
      )}
    </div>
  );
};
