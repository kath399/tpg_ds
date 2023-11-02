import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  //primary?: boolean;
  mode?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be? 
   */
  size?: 'small' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  state?: 'default' | 'hover' | 'pressed' | 'disabled' | 'focused';

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  //primary = false,
  mode,
  size = 'small',
  backgroundColor,
  label,
  state = 'default',
  ...props
}: ButtonProps) => {
  //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${mode}`, `storybook-button--${mode}--${state}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
