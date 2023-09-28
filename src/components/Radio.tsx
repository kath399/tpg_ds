import React from 'react';
import './radio.css';

interface RadioProps {
  id: string;
}

export const Radio = ({
  id
}: RadioProps) => {
  return (
    <label htmlFor={id}>
    <input 
      id={id} 
      className=""
    />
  </label>
  );
};
  