import React from 'react';
// import { hover } from '@testing-library/user-event/dist/hover';
import '../tokens.css'


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
  Breakpoint = 'large',
  Type,
  Status = 'default',
  Inverse = false, 
  Text,
  ...props
}: ButtonProps) => {
  
  // BREAKPOINTS
  let btnSize = (Breakpoint==='large') ? 'w-[150px]' : 'w-[328px]';

  // DYNAMIC STATES
  let btnDynamicStates = (Type==='primary') ? 'hover:bg-red-700 focus:bg-red-700 active:bg-red-800'
    : (Type==='secondary') ? 'hover:bg-neutral-800 focus:bg-neutral-800 active:bg-zinc-600'
    : (Type==='tertiary') ? 'hover:bg-[color:var(--transparency-monochrome-150)] focus:bg-[color:var(--transparency-monochrome-300)] active:bg-[color:var(--transparency-monochrome-300)]'
    : (Type==='link') ? 'hover:text-[color:var(--color-light-brand-500)] focus:text-[color:var(--color-light-brand-500)] active:text-[color:var(--color-light-brand-600)]'
    : ''
  
    // PRIMARY STATIC STATES
  let btnStaticState = (Type==='primary')
    ? (Status==='hover') ? 'bg-[color:var(--color-light-brand-600)]'
    : (Status==='focused') ? 'bg-red-700 outline-teal-600'
    : (Status==='pressed') ? 'bg-[color:var(--color-light-brand-700)]'
    : 'bg-[color:var(--color-light-brand-500)]' :
  
    // SECONDARY STATIC STATES
  (Type==='secondary')
    ? (Status==='hover') ? 'bg-neutral-800'
    : (Status==='focused') ? 'bg-neutral-800 outline-teal-600'
    : (Status==='pressed') ? 'bg-zinc-600'
    : 'bg-[color:var(--color-monochrome-950)]' :
  
    // TERTIARY STATIC STATES
  (Type==='tertiary')
    ? (Status==='hover') ? 'bg-[color:var(--transparency-monochrome-150)] border border-solid border-1 border-[color:var(--color-monochrome-950)]'
    : (Status==='focused') ? 'bg-[color:var(--transparency-monochrome-300)] border border-solid border-1 border-[color:var(--color-monochrome-950)] outline-teal-600'
    : (Status==='pressed') ? 'bg-[color:var(--transparency-monochrome-300)] border border-solid border-1 border-[color:var(--color-monochrome-950)]'
    : 'bg-transparent border border-solid border-1 border-[color:var(--color-monochrome-950)]' :
  
    // LINK STATIC STATES
    'bg-transparent underline'
  let textColor = (Type==='tertiary') ? 'text-[color:var(--color-monochrome-950)]'
    : (Type==='link')
      ? (Status==='hover') ? 'text-[color:var(--color-light-brand-500)] underline'
      : (Status==='focused') ? 'text-[color:var(--color-light-brand-500)] outline-teal-600'
      : (Status==='pressed') ? 'text-[color:var(--color-light-brand-600)] underline'
      : 'text-[color:var(--color-monochrome-950)] underline'
    : 'text-white';

  // DISABLED STATE
  let opacity = (Status==='disabled') ? 'opacity-[.38]' : 'opacity-100';

  return (
    <button
      type="button"
      className={`font-vodafone cursor-pointer sm:w-[328px] text-xl leading-6 text-center tracking-normal rounded-lg flex py-3 px-6 flex-col justify-center items-center focus:outline-teal-600 outline-offset-2 outline-none active:outline-none ${btnSize} ${btnStaticState} ${btnDynamicStates} ${textColor} ${opacity}`}
      {...props}
    >
      {Text}
    </button>
  );  
};
