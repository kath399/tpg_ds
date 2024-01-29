import React, { useState, useEffect } from 'react';
import './dropdown.css';
import TooltipIcon from './assets/TooltipIcon.svg';
import Icon from './assets/Icon.svg';

interface DropdownProps {
    Size?: 'Large' | 'Small',
    State: 'Enabled' | 'Filled' | 'Active' | 'Error',
    ShowTooltipIcon?: boolean,
    Label?: string,
    ShowErrorText: boolean,
    ErrorText: string
}

export const Dropdown = ({
  Label = 'Label',
  Size = 'Large',
  State = 'Enabled',
  ShowTooltipIcon = true,
  ShowErrorText = false,
  ErrorText = 'Error Text',
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(State === 'Enabled' ? '' : State === 'Filled' ? 'Selected Option' : '');
  const [dropdownState, setDropdownState] = useState(State);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Event handler for when an option is selected or the dropdown is clicked
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setDropdownState('Active');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dropdownContainer = document.getElementById('dropdown-container');
      if (dropdownContainer && !dropdownContainer.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setDropdownState('Enabled');
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const options = ['List item 1', 'List item 2', 'List item 3', 'List item 4'];

  let sizeSmall: boolean = false;
  if (Size === 'Small') {
    sizeSmall = true;
  } else {
    sizeSmall = false;
  }

  return (
    <div id="dropdown-container" className={"dropContainer"} style={{ width: sizeSmall ? '328px' : '480px' }}>
      <label htmlFor="label">{Label}</label>
      <div>
        <div
          className={['dropTextfield', `dropTextfield-${State}`, `dropTextfield-${dropdownState}`, isDropdownOpen && 'open'].join(' ')}
          onClick={() => {
            toggleDropdown();
            setDropdownState('Active');
          }}
        >
          <div className='selectedOption'>{selectedOption || ''}</div>
        </div>
        <ul className="dropOptions" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
          {options.map((option, index) => (
            <li
              className='dropOption'
              key={index}
              onClick={() => {
                handleOptionChange({ target: { value: option } } as React.ChangeEvent<HTMLSelectElement>);
                toggleDropdown();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
        {ShowTooltipIcon && <img className="tooltip-icon" style={{ top: ShowErrorText ? '50%' : '60%' }} src={TooltipIcon} alt="Tooltip" />}
        <img className={ShowTooltipIcon ? 'icon' : 'icon-HideTooltip'} style={{ top: ShowErrorText ? '50%' : '60%' }} src={Icon} alt="Icon" />
      </div>
      <div className='errorText'>{ShowErrorText && ErrorText}</div>
    </div>
  );
};
