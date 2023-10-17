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
    <label className='container'>
    <input 
      type="radio"
      className=""
      checked
    />
    <span className="checkmark"></span>{label}
    </label>
  );
};
  