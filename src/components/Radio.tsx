import React from 'react';
import './radio.css';

interface RadioProps {
  id: string;
  label: string;
}

export const Radio = ({
  id,
  label
}: RadioProps) => {

  return (
    <label id={id} className='container'>
      <input 
        id={id}
        type="radio"
        className=""
        checked
      />
      <span className="checkmark"></span>{label}
    </label>
  );
};
  