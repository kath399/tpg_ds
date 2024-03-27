import React, {useState} from 'react';
import './radio.css';

interface RadioProps {
  Checked: boolean;
  State: 'Enabled' | 'Hovered' | 'Focused' | 'Disabled';
  ShowText?: boolean;
  Text: string[];
  numberOfBtns?: number;
  Inverse?: boolean;
  Inline?: boolean;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({ 
  Checked,
  State = 'Enabled',
  ShowText = true,
  Text, 
  numberOfBtns = 5, 
  onChange,
  Inverse = false,
  Inline = false,
}) => {
  const radioButtons = [];

  const containerStyle: React.CSSProperties = {
    display: Inline ? 'inline-block' : 'block',
    marginRight: Inline ? '16px' : '0',
    opacity: (State==='Disabled') ? '0.38' : ''
  }

  for (let i = 0; i < numberOfBtns; i++) {
    const uniqueId = `${i}`;

    radioButtons.push(
      <div style={containerStyle}>
        <label id={uniqueId} className='container' >
          <input
            type="radio"
            name='Radio'
            checked={Checked}
            onChange={() => onChange('')}
          />
          <span 
            className={[
              'checkmark',
              `checkmark--${State}`,
              Inverse ? 'checkmarkInverse' : ''
            ].join(' ')}
          >
          </span>
          {ShowText && <text>{Text[i]}</text>}
          {!ShowText && <div style={{paddingTop: '16px'}}/>}
        </label>
      </div>
    );
  }

  return (
    <div>
      {radioButtons}
    </div>
  );
}; 