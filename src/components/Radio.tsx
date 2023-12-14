import React from 'react';
import './radio.css';

interface RadioProps {
  id: string;
  name: string;
  label: string[];
  value: string;
  checked?: boolean;
  numberOfBtns: number;
  onChange: (value: string) => void;
  inline?: boolean;
  disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({ 
  id, 
  name,
  label, 
  value, 
  checked,
  numberOfBtns = 5, 
  onChange,
  inline = false,
  disabled = false,
}) => {
  const radioButtons = [];

  const containerStyle: React.CSSProperties = {
    display: inline ? 'inline-block' : 'block',
    marginRight: inline ? '16px' : '0',
  }

  for (let i = 0; i < numberOfBtns; i++) {
    const uniqueId = `${id}_${i}`;

    radioButtons.push(      
      <label id={uniqueId} className='container' style={containerStyle}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          disabled={disabled}
        />
        <span className="checkmark"></span>
        {label[i]}
      </label>
    );
  }

  return (
    <div>
      {radioButtons}
    </div>
  );
};