import React from 'react';
import './radio.css';

interface RadioProps {
  Label: string[];
  Checked?: boolean;
  State?: 'enable' | 'hover' | 'focus' | 'disabled';
  numberOfBtns?: number;
  Inverse?: boolean;
  Inline?: boolean;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({ 
  Label, 
  Checked,
  State = 'enable',
  numberOfBtns = 5, 
  onChange,
  Inverse = false,
  Inline = false,
}) => {
  const radioButtons = [];

  const containerStyle: React.CSSProperties = {
    display: Inline ? 'inline-block' : 'block',
    marginRight: Inline ? '16px' : '0',
  }

  let Disabled:boolean = false;
  if(State == 'disabled') {
    Disabled = true
  }

  let labelColor:string = 'black';
  if(Inverse == true) {
    labelColor = 'white'
  } else if(Disabled == true) {
    labelColor = '#0D0D0D61'
  }

  for (let i = 0; i < numberOfBtns; i++) {
    const uniqueId = `${i}`;

    radioButtons.push(      
      <label id={uniqueId} className='container' style={containerStyle}>
        <input
          type="radio"
          name='Button'
          checked={Checked}
          onChange={() => onChange('')}
          disabled={Disabled}
        />
        <span className={[
          'checkmark',
          `checkmark--${State}`,
          Inverse ? 'checkmarkInverse' : ''
        ].join(' ')}></span>
        <text style={{ color: labelColor }}>{Label[i]}</text>
      </label>
    );
  }

  return (
    <div>
      {radioButtons}
    </div>
  );
}; 