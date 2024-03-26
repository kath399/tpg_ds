import React from 'react';
import '../tokens.css'
import Icon from './assets/Icon_white2.svg'

interface ButtonProps {
  Size?: 'Large' | 'Small';
  Style?: 'Contained' | 'Outline' | 'Text';
  Colour?: 'Primary' | 'Secondary' | 'Tertiary' | 'Link';
  State?: 'Enabled' | 'Hovered' | 'Pressed' | 'Disabled' | 'Focused';
  Inverse?: boolean;
  Text: string;
  ShowLeftIcon?: boolean;
  ShowRightIcon?: boolean;
  ShowLoadingIcon?: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  Size = 'Large',
  Colour,
  State = 'Enabled',
  Inverse = false, 
  Text,
  ShowLeftIcon = false,
  ShowRightIcon = false,
  ShowLoadingIcon = false,
  ...props
}: ButtonProps) => {
  
  // BREAKPOINTS
  let btnSize = (Size==='Large') ? 'min-w-[150px]' : 'min-w-[328px]';

  // DYNAMIC STATES
  let btnDynamicStates = (Colour==='Primary') ? 'hover:bg-red-700 focus:bg-red-700 active:bg-red-800'
    : (Colour==='Secondary') ? 'hover:bg-neutral-800 focus:bg-neutral-800 active:bg-zinc-600'
    : (Colour==='Tertiary') ? 'hover:bg-[color:var(--transparency-monochrome-150)] focus:bg-[color:var(--transparency-monochrome-300)] active:bg-[color:var(--transparency-monochrome-300)]'
    : (Colour==='Link') ? 'hover:text-[color:var(--color-light-brand-500)] focus:text-[color:var(--color-light-brand-500)] active:text-[color:var(--color-light-brand-600)]'
    : ''
  
    // Primary STATIC STATES
  let btnStaticState = (Colour==='Primary')
    ? (State==='Hovered') ? 'bg-[color:var(--color-light-brand-600)]'
    : (State==='Focused') ? 'bg-red-700 outline-teal-600'
    : (State==='Pressed') ? 'bg-[color:var(--color-light-brand-700)]'
    : 'bg-[color:var(--color-light-brand-500)]' :
  
    // Secondary STATIC STATES
  (Colour==='Secondary')
    ? (State==='Hovered') ? 'bg-neutral-800'
    : (State==='Focused') ? 'bg-neutral-800 outline-teal-600'
    : (State==='Pressed') ? 'bg-zinc-600'
    : 'bg-[color:var(--color-monochrome-950)]' :
  
    // Tertiary STATIC STATES
  (Colour==='Tertiary')
    ? (State==='Hovered') ? 'bg-[color:var(--transparency-monochrome-150)] border border-solid border-1 border-[color:var(--color-monochrome-950)]'
    : (State==='Focused') ? 'bg-[color:var(--transparency-monochrome-300)] border border-solid border-1 border-[color:var(--color-monochrome-950)] outline-teal-600'
    : (State==='Pressed') ? 'bg-[color:var(--transparency-monochrome-300)] border border-solid border-1 border-[color:var(--color-monochrome-950)]'
    : 'bg-transparent border border-solid border-1 border-[color:var(--color-monochrome-950)]' :
  
    // Link STATIC STATES
    'bg-transparent underline'
  let textColor = (Colour==='Tertiary') ? 'text-[color:var(--color-monochrome-950)]'
    : (Colour==='Link')
      ? (State==='Hovered') ? 'text-[color:var(--color-light-brand-500)] underline'
      : (State==='Focused') ? 'text-[color:var(--color-light-brand-500)] outline-teal-600'
      : (State==='Pressed') ? 'text-[color:var(--color-light-brand-600)] underline'
      : 'text-[color:var(--color-monochrome-950)] underline'
    : 'text-white';

  // DISABLED STATE
  let opacity = (State==='Disabled') ? 'opacity-[.38]' : 'opacity-100';

  return (
    <button
      type="button"
      className={`font-vodafone cursor-pointer sm:w-[328px] text-xl leading-6 text-center tracking-normal rounded-lg py-3 px-6 flex justify-center items-center focus:outline-teal-600 outline-offset-2 outline-none active:outline-none ${btnSize} ${btnStaticState} ${btnDynamicStates} ${textColor} ${opacity}`}
      {...props}
    >
      {ShowLeftIcon && <img src={Icon} alt='Icon' style={{marginRight: '4px'}}/>}
      {Text}
      {ShowRightIcon && <img src={Icon} alt='Icon' style={{margin: '0px 4px'}}/>}
      {ShowLoadingIcon && <img src={Icon} alt='Icon' />}
    </button>
  );  
};
