import React from 'react';
import './textfield.css';

interface TextfieldProps {
    id: string;
    status: 'default' | 'active' | 'isDisabled';
    label: string;
}

export const Textfield = ({
  id, 
  status = 'default',
  label
}: TextfieldProps) => {
  return (
    <div>
      <label htmlFor={id}> {label} 
        <input 
          type="text"
          id={id} 
          className={`textfield--${status}`}
        />
      </label>
      <button>Submit</button>
    </div>
  );
};
  