import React, { useState, useEffect } from 'react';
import './link.css';
import ChevronRight from './assets/chevron-right.svg';
import ChevronLeft from './assets/chevron-left.svg';
import Icon from './assets/Icon.svg';

interface LinkProps {
    Size: 'Large' | 'Small';
    Colour: 'Primary' | 'Secondary';
    State: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
    Text: string;
    ShowRightIcon: boolean;
    ShowLeftIcon: boolean;
    onClick?: () => void;
}

export const Link = ({
    Size = 'Large',
    Colour = 'Primary',
    State = 'Enabled',
    Text = 'Link',
    ShowRightIcon = true,
    ShowLeftIcon = false,
    ...props
}: LinkProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    // BREAKPOINTS
    let linkSize = (Size==='Large') ? 'text-[20px]' : 'text-[18px]'

    // PRIMARY STATES
    let linkColour = (Colour==='Primary') ?
        (State==='Hovered') ? 'text-[#C30000]' :
        (State==='Focused') ? 'text-[#A10000] p-[2px_4px] rounded-md border-2 border-solid border-[rgba(0,150,173,1)]' :
        (State==='Pressed') ? 'text-[#A10000]' :
        'text-[#E60000]' :
    // SECONDARY STATES
        (State==='Hovered') ? 'text-[#C30000]' :
        (State==='Focused') ? 'text-[#A10000] p-[2px_4px] rounded-md border-2 border-solid border-[rgba(0,150,173,1)]' :
        (State==='Pressed') ? 'text-[#A10000]' :
        'text-[#0D0D0D]'
    // DISABLED STATE
        let linkDisabled = (State==='Disabled') ? 'opacity-[0.38]' : ''

    
    // COLOURS
    let linkWeight = (Colour==='Primary') ? 'font-bold' : ''

    // DYNAMIC STATES
    let linkFocus = 'focus:text-[#A10000] focus:p-[2px_4px] focus:rounded-md focus:border-2 focus:border-solid focus:border-[rgba(0,150,173,1)]'

    /* TAILWIND LINK
        <button className={`font-vodafone flex items-center cursor-pointer ${linkWeight} ${linkSize} ${linkColour} ${linkDisabled} ${linkFocus}`}>
            {ShowLeftIcon && <img src={ChevronLeft} alt='Left' className='hover:fill-[#E60000]'/>}
            {Text}
        </button>

        <div style={{height: '48px'}} />
    */

    return(
        <>

        <button 
            className={[
                'link', 
                `link--${Size}`, 
                `link--${State}`
            ].join(' ')} 
            {...props} 
            onFocus={handleFocus} 
            onBlur={handleBlur}
        >
            {(ShowLeftIcon && (State==='Enabled' || State==='Hovered' || State==='Disabled')) && !isFocused && <img src={ChevronLeft} alt='Chevron_left' style={{paddingRight: '7px'}}/>}
            {(ShowLeftIcon && (State==='Pressed' || State==='Focused' || isFocused)) && <img src={Icon} alt='Chevron_left' style={{paddingRight: '7px'}}/>}
            {Text}
            {(ShowRightIcon && (State==='Enabled' || State==='Hovered' || State==='Disabled')) && !isFocused && <img src={ChevronRight} alt='Chevron_right' style={{paddingLeft: '7px'}}/>}
            {(ShowRightIcon && (State==='Pressed' || State==='Focused' || isFocused)) && <img src={Icon} alt='Chevron_right' style={{paddingLeft: '7px'}}/>}
        </button>
        </>
    )
}