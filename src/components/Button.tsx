import React from 'react';
import { hover } from '@testing-library/user-event/dist/hover';
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

  // BREAKPOINTS
  let btnSize = (Breakpoint==='large') ? 'w-[150px]' : 'w-[328px]';

  let textColor = 'text-white';
  let btnClass = 'font-vodafone cursor-pointer sm:w-[328px] text-xl leading-6 text-center tracking-normal rounded-lg flex py-3 px-6 flex-col justify-center items-center focus:outline-teal-600'
  let bgColor, hoverStates, focusStates, pressedStates

  if(Type==='primary') {
    bgColor = (Status==='focused') ? 'bg-red-700 outline-teal-600' 
      : (Status==='hover') ? 'bg-[color:var(--color-light-brand-600)]' 
      : (Status==='pressed') ? 'bg-[color:var(--color-light-brand-700)]' 
      : 'bg-[color:var(--color-light-brand-500)]';
    hoverStates = 'hover:bg-red-700';
    focusStates = 'focus:bg-red-700'
    pressedStates = 'active:bg-red-800'
  } else if (Type==='secondary') {
    bgColor = (Status==='focused') ? 'bg-neutral-800 outline-teal-600' 
      : (Status==='hover') ? 'bg-neutral-800' 
      : (Status==='pressed') ? 'bg-zinc-600' 
      : 'bg-[color:var(--color-monochrome-950)]';
    hoverStates = 'hover:bg-neutral-800';
    pressedStates = 'active:bg-zinc-600';
    focusStates = 'focus:bg-neutral-800'
  } else if (Type==='tertiary') {
    bgColor = (Status==='focused') ? 'bg-[color:var(--transparency-monochrome-300)] border border-solid border-1 border-[color:var(--color-monochrome-950)] outline-teal-600' 
      : (Status==='hover') ? 'bg-[color:var(--transparency-monochrome-150)] border border-solid border-1 border-[color:var(--color-monochrome-950)]' 
      : (Status==='pressed') ? 'bg-[color:var(--transparency-monochrome-300)] border border-solid border-1 border-[color:var(--color-monochrome-950)]' 
      : 'bg-transparent border border-solid border-1 border-[color:var(--color-monochrome-950)]';
    textColor = 'text-[color:var(--color-monochrome-950)]'
    hoverStates = 'hover:bg-[color:var(--transparency-monochrome-150)]';
    focusStates = 'focus:bg-[color:var(--transparency-monochrome-300)]';
    pressedStates = 'active:bg-[color:var(--transparency-monochrome-300)]';
  } else if (Type==='link') {
    bgColor = 'bg-transparent'
    textColor = (Status==='focused') ? 'text-[color:var(--color-light-brand-500)] underline outline-teal-600' 
      : (Status==='hover') ? 'text-[color:var(--color-light-brand-500)] underline' 
      : (Status==='pressed') ? 'text-[color:var(--color-light-brand-600)] underline' 
      : 'text-[color:var(--color-monochrome-950)] underline';
    hoverStates = 'hover:text-[color:var(--color-light-brand-500)] underline';
    focusStates = 'focus:text-[color:var(--color-light-brand-500)] underline';
    pressedStates = 'active:text-[color:var(--color-light-brand-600)] underline'
  }

  let opacity = (Status==='disabled') ? 'opacity-[.38]' : 'opacity-100';

  return (
    <button
      type="button"
      className={`${btnClass} ${btnSize} ${bgColor} ${hoverStates} ${focusStates} ${pressedStates} ${textColor} ${opacity} outline-offset-2 outline-none active:outline-none`}
      {...props}
    >
      {Text}
    </button>
  );  
};
