import React from 'react';
import './checkbox.css';

interface CheckboxProps { 
  /**
   * Is this the principal call to action on the page?
   */
  //primary?: boolean;
  mode?: string;
  /**
   * Checkbox contents
   */
  label: string;
  /**
   * Checking the checkbox
   */
  checked: boolean;
  /**
   * Optional state
   */
  state?: 'enable' | 'disabled' | 'hover' | 'focus' | 'pressed';

  onChange?: (checked: boolean) => void;

}

export const Checkbox = ({ 
  mode,
  label, 
  checked,
  state = 'enable',
  onChange, 
  ...props 
}: CheckboxProps) => {
  const handleCheckboxChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className='font-container'>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className={['storybook-checkbox', `storybook-checkbox--${mode}--${state}`].join(' ')}
        {...props} 
      />
        {label}
    </label>
  );
};