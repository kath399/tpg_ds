import React from 'react';
import './radio.css';

interface RadioProps {
  id: string;
  numButtons: number;
  option1: string;
}

export const Radio = ({
  id,
  numButtons,
  option1
}: RadioProps) => {

  function createRadioButtons(numButtons: number): HTMLDivElement {
    const container = document.createElement('div');

    for (let i = 1; i <= numButtons; i++) {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'radioGroup';
        radio.id = `radio${i}`;

        const label = document.createElement('label');
        label.setAttribute('for', `radio${i}`);
        label.textContent = `Radio ${i}`;

        container.appendChild(radio);
        container.appendChild(label);
        container.appendChild(document.createElement('br'));
    }

    return container;
}

  return (
    <label htmlFor={id}>{option1}
    <input 
      id={id} 
      type="radio"
      className=""
    />
  </label>
  );
};
  