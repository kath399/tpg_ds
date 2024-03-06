import React from 'react';
import './radio.css';

interface RadioProps {
  Checked: boolean;
  State: 'Enable' | 'Hover' | 'Focus' | 'Disabled';
  ShowText?: boolean;
  Text: string[];
  numberOfBtns?: number;
  Inverse?: boolean;
  Inline?: boolean;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({ 
  Checked,
  State = 'Enable',
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
  }

  let Disabled:boolean = false;
  if(State == 'Disabled') {
    Disabled = true
  }

  let textColor:string = 'black';
  if(Inverse == true) {
    textColor = 'white'
  } else if(Disabled == true) {
    textColor = '#0D0D0D61'
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
            disabled={Disabled}
          />
          <span 
            className={[
              'checkmark',
              `checkmark--${State}`,
              Inverse ? 'checkmarkInverse' : ''
            ].join(' ')}
          >
          </span>
          {ShowText && <text style={{ color: textColor }}>{Text[i]}</text>}
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