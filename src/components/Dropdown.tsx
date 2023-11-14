import React, { useState } from 'react';
import './dropdown.css';
import Chevron from './Chevrondown.svg';

interface DropdownProps {
    label: string,
    options: string[],
    error?: boolean,
}

export const Dropdown = ({
    label = 'Label',
    options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    error = false
}: DropdownProps ) => {
    const [selectedOption, setSelectedOption] = useState('Option 1');
  
    // Event handler for when an option is selected
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
    return (
        <div className="dropdown-container">
            <label htmlFor="label">{label}
            <br/>
            <select className={error ? 'dropdown-select-error' : 'dropdown-select'} value={selectedOption} onChange={handleOptionChange}>
                {options.map((option, index) => (
                    <option className='dropdown-option' key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            </label>
            {error && <div className="error-message">Error</div>}

        </div>
    )
}