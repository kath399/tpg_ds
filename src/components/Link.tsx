import React from 'react';
import './link.css';
import ChevronRight from './assets/Chevron_right.svg';

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
    return(
        <button className={['link', `link--${Size}`, `link--${State}`].join(' ')} {...props}>
            {ShowLeftIcon}
            {Text}
            {ShowRightIcon && <img src={ChevronRight} alt='Chevron_right' style={{paddingLeft: '11px'}}/>}
        </button>
    )
}