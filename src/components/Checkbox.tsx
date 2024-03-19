import React, { useState, useEffect } from 'react';
import checkIcon from './assets/checkIcon.svg'
import './checkbox.css';

import * as RadixCheckbox from '@radix-ui/react-checkbox';

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

  let numberOfBoxes = (Single) ? 1 : 6;

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

  let style = (Inline) ? 'inline-block mr-[16px]' : 'block mb-[16px]'

  let labelColor = (Inverse) ? 'white' : 'black';

  // DYNAMIC STATES
  let hoverState = 'outline-none outline-offset-0 hover:outline-4 hover:outline-[color:var(--transparency-monochrome-150)]'
  let focusState = 'focus: outline-4 focus:outline-[color:var(--color-dark-aqua-blue-400)]'

  // STATIC STATES
  let StaticStates = (State==='Hover') ? 'outline-4 outline-[color:var(--transparency-monochrome-150)]'
    : (State==='Focus') ? 'outline-4 outline-[color:var(--color-dark-aqua-blue-400)]'
    : ''
  let ErrorState = (State==='Error') ? 'border-[color:var(--color-light-red-600)]' : 'border-[color:var(--color-monochrome-250)]'
  let DisabledState = (State==='Disabled') ? 'opacity-[.38]' : 'opacity-100'

  return (
    <div>
      {Array.from({ length: numberOfBoxes }, (_, i) => {
        const uniqueId = `${i}`;
        return (
          <div className={`${style}`}>
            <div className='block'>
              <div className={`flex items-center ${DisabledState}`}>
                <RadixCheckbox.Root
                  className={`flex h-[20px] w-[20px] relative box-border appearance-none items-stretch justify-center rounded-[4px] bg-white border border-1 ${ErrorState} ${hoverState} ${StaticStates} ${focusState}`}
                  checked={checkboxStates[i]}
                  id={`c${i}`}
                  disabled={(State==='Disabled')}
                  onCheckedChange={() => handleCheckboxClick(i)}
                >
                  <RadixCheckbox.Indicator className="flex absolute top-[-1px] right-[-1px] bottom-[-1px] left-[-1px] border-box items-center justify-center rounded-[4px] bg-[color:var(--color-light-turquoise-600)]">
                    <img src={checkIcon} alt='Checked'/>
                  </RadixCheckbox.Indicator>
                </RadixCheckbox.Root>
                {ShowText && <label className="font-vodafone pl-[8px] text-[16px] leading-none text-black" htmlFor={`c${i}`}>
                  {Text}
                </label>}
              </div>
              {ShowError && <text className='text-[14px] text-[color:var(--color-light-red-600)]'>{ErrorText}</text>}
            </div>
          </div>
        );
      })}
    </div>
  );
};