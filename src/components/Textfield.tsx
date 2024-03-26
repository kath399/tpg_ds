import React, { useState, useEffect } from 'react';
import './textfield.css';
import TooltipIcon from './assets/TooltipIcon.svg';

interface TextfieldProps {
    Type: 'Simple' | 'Complex';
    Size: 'Large' | 'Small';
    State: 'Enabled' | 'Focused' | 'Active' | 'Filled' | 'Error' | 'Disabled';
    ShowLabel: boolean;
    LabelText: string;
    ShowLeftIcon?: boolean;
    ShowInputText?: boolean;
    InputText?: string
    ShowRightIcon: boolean;
    ShowSupportingText?: boolean;
    SupportingText?: string;
    ShowErrorText?: boolean;
    ErrorText?: string;
}

export const Textfield = ({
  Type = 'Simple',
  Size = 'Large',
  State = 'Enabled',
  ShowLabel = true,
  LabelText,
  ShowLeftIcon = false,
  ShowInputText = true,
  ShowRightIcon = false,
  ShowSupportingText = false,
  SupportingText = 'Support text',
  InputText = 'User Input Text',
  ShowErrorText = false,
  ErrorText = 'Error',
}: TextfieldProps) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [inputValue, setInputValue] = useState(InputText); // State to store input value
  const [showInputError, setShowInputError] = useState(false)
  const [selectedOption, setSelectedOption] = useState(State === 'Enabled' ? '' : State === 'Filled' ? 'Selected Option' : '');
  const [fieldState, setFieldState] = useState(State);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsEmpty(value.trim() === ''); // Check if input is empty
    setShowInputError((Type==='Complex') && value.trim() !== '' && !suggestions.includes(value.trim()));
  };

  let suggestions = ['List item 1', 'List item 2']

  if(showInputError) {
    suggestions = [];
    suggestions.push('Cannot find')
  }

  /* Event handler for when an option is selected or the dropdown is clicked */
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setInputValue(selectedValue);
    setSelectedOption(selectedValue);
    setFieldState('Focused');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const fieldContainer = document.getElementById('SBTextfield');
      if (fieldContainer && !fieldContainer.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setFieldState('Enabled');
      }
    };

    if (fieldState==='Focused') {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  useEffect(() => {
    // Update inputValue when InputText prop changes
    setInputValue(InputText);
  }, [InputText]);

  return (
    <div id='SBTextfield' className='txtfield'>
      <label htmlFor='SBTextfield' className={[`labelField`, `labelField--${Size}`].join(' ')}> 
        {ShowLabel && LabelText} 
      </label>
      <div 
        className={[
          `field`, 
          `field--${Size}`,
          `field--${State}`, 
          `field--${fieldState}`
        ].join(' ')}
        style={{
          borderRadius: (((Type==='Complex') && (State==='Active')) || ((Type==='Complex') && isDropdownOpen)) ? '6px 6px 0px 0px' : '6px'
        }}
        onClick={() => {
          toggleDropdown();
          setFieldState('Focused');
        }}>
        {ShowLeftIcon && <img src={TooltipIcon} alt='Icon' style={{marginRight: '12px', width: '24px'}}/>}
        {ShowInputText &&
          <input 
            type="text"
            className={[`fieldInput`, `fieldInput--${Size}`].join(' ')}
            onChange={handleInputChange}
            disabled={State === 'Disabled'}
            required={(State === 'Error')}
            list="suggestions"
            placeholder='User Input Text'
            value={inputValue}
          />
        }
        {ShowRightIcon && <img src={TooltipIcon} alt='Icon' style={{padding: '8px 0', marginLeft: 'auto', marginRight: '0px', width: '24px'}}/>}
      </div>
      {ShowErrorText && <div className="error-message">{ErrorText}</div>}
      <div className='supportText'>{(ShowSupportingText && !ShowErrorText) && SupportingText}</div>
      {(Type==='Complex') && (
        <ul  
          className={['complexField', `complexField--${Size}`].join(' ')}
          style={{ 
            display: (isDropdownOpen || (State === 'Active')) ? 'block' : 'none',
          }}
        >
          {suggestions.map((option, index) => (
            <li
              className='complexOption'
              key={index}
              onClick={() => {
                handleOptionChange({ target: { value: option } } as React.ChangeEvent<HTMLSelectElement>);
                toggleDropdown();
              }}
              style={{
                
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
