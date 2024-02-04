import React, { useState, useEffect } from 'react';
import checkIcon from './assets/checkIcon.svg'
import './checkbox.css';

interface CheckboxProps { 
  Checked: boolean;
  State: 'Enable' | 'Hover' | 'Focus' | 'Disabled' | 'Error';
  ShowText: boolean;
  Text: string;
  ShowError?: boolean;
  ErrorText?: string;
  Single?: boolean;
  Inline?: boolean;
  Inverse?: boolean;
  onChange: (Checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  Checked = true,
  State = 'Enable',
  ShowText = true,
  Text, 
  ShowError,
  ErrorText = 'Error text',
  Single,
  Inline,
  Inverse,
  onChange, 
  ...props 
}: CheckboxProps) => {

  let numberOfBoxes = 6;
  if(Single) {
    numberOfBoxes = 1
  }

  const [checkboxStates, setCheckboxStates] = useState(Array(numberOfBoxes).fill(false));

  const handleCheckboxClick = (index: number) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  useEffect(() => {
    if (Checked) {
      setCheckboxStates(Array(numberOfBoxes).fill(true));
    } else {
      setCheckboxStates(Array(numberOfBoxes).fill(false));
    }
  }, [Checked, numberOfBoxes]);

  const containerStyle: React.CSSProperties = {
    display: Inline ? 'inline-block' : 'block',
    marginRight: Inline ? '16px' : '0',
    marginBottom: Inline ? '0' : '16px',
  }

  let Disabled:boolean = false;
  if(State == 'Disabled') {
    Disabled = true
  } else {
    Disabled = false
  }

  let Opacity:string = '1';
  if(Disabled == true) {
    Opacity = '0.38'
  }

  let labelColor:string = 'black';
  if(Inverse == true) {
    labelColor = 'white'
  }

  return (
    <div>
      {Array.from({ length: numberOfBoxes }, (_, i) => {
        const uniqueId = `${i}`;
        return (
          <div key={uniqueId} style={containerStyle}>
            <div style={{ display: 'block' }}>
              <label id={uniqueId} className='checkContainer'>
                <input
                  type="checkbox"
                  disabled={Disabled}
                  checked={checkboxStates[i]}
                  onChange={() => handleCheckboxClick(i)}
                />
                <span className={['checkmark', `checkmark--${State}`].join(' ')}>
                  {checkboxStates[i] && <img src={checkIcon} alt="Check Icon" className="image-icon" />}
                </span>
                {ShowText && (<text style={{ color: labelColor, opacity: Opacity }}>{Text}</text>)}
              </label>
              {ShowError && (<text style={{ color: 'rgba(189, 0, 0, 1)', fontFamily:'Vodafone', marginTop: '4px', fontSize: '14px' }}>{ErrorText}</text>)}
            </div>
          </div>
        );
      })}
    </div>
  );
};