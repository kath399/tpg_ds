import React, { useState, useEffect } from 'react';
import './link.css';
import ChevronRight from './assets/chevron-right.svg';
import ChevronLeft from './assets/chevron-left.svg';
import Icon from './assets/Icon.svg';

interface LinkProps {
    Size: 'Large' | 'Small';
    State: 'Default' | 'Hover' | 'Pressed' | 'Focused' | 'Disabled';
    Text: string;
    ShowRightIcon: boolean;
    ShowLeftIcon: boolean;
    onClick?: () => void;
}

export const Link = ({
    Size = 'Large',
    State = 'Default',
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
    return(
        <button className={['link', `link--${Size}`, `link--${State}`].join(' ')} {...props} onFocus={handleFocus} onBlur={handleBlur}>
            {(ShowLeftIcon && (State==='Default' || State==='Hover')) && !isFocused && <img src={ChevronLeft} alt='Chevron_left' style={{paddingRight: '7px'}}/>}
            {(ShowLeftIcon && (State==='Pressed' || State==='Focused' || isFocused)) && <img src={Icon} alt='Chevron_left' style={{paddingRight: '7px'}}/>}
            {Text}
            {(ShowRightIcon && (State==='Default' || State==='Hover')) && !isFocused && <img src={ChevronRight} alt='Chevron_right' style={{paddingLeft: '7px'}}/>}
            {(ShowRightIcon && (State==='Pressed' || State==='Focused' || isFocused)) && <img src={Icon} alt='Chevron_right' style={{paddingLeft: '7px'}}/>}
        </button>
    )
}