
import React from 'react';
import './button.css';


interface ButtonProps {
  
  /**
   * How large should the button be? 
   */
  Breakpoint?: 'large' | 'small';
  /**
   * Is this the principal call to action on the page?
   */
  //primary?: boolean;
  Type?: 'primary' | 'secondary' | 'tertiary' | 'link';
  /**
   * Optional click handler
   */
  Status?: 'default' | 'hover' | 'pressed' | 'disabled' | 'focused';
  
  Inverse?: boolean;
  /**
   * Button contents
   */
  Text: string;
  /**
   * What background color to use
   */
  //backgroundColor?: string;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  //primary = false,
  Breakpoint = 'large',
  Type,
  Status = 'default',
  Inverse = false, 
  Text,
  //backgroundColor,
  ...props
}: ButtonProps) => {
  //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

  return (
    <button
      type="button"
      className={[
        'storybook-button', 
        `storybook-button--${Breakpoint}`, 
        `storybook-button--${Type}`, 
        `storybook-button--${Type}--${Status}`,
        Inverse ? 'button-inverse' : '', // Apply the inverse class only when inverse is true 
      ].join(' ')}
      {...props}
    >
      {Text}
    </button>
  );  
};
