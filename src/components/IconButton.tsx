import React, { useState, useEffect } from 'react';
import './iconbutton.css';
import PrimIcon from './assets/Icon_white2.svg'
import TertIcon from './assets/Icon_black.svg'

interface IconButtonProps {
    Size: 'Large' | 'Small';
    Type: 'Primary' | 'Tertiary';
    State: 'Default' | 'Focus' | 'Hover' | 'Disabled' | 'Pressed';
    onClick?: () => void;
}

export const IconButton = ({
    Size = 'Large',
    Type = 'Primary',
    State = 'Default',
    ...props
}: IconButtonProps) => {
    return(
        <button 
            className={[
                `iconbutton`, 
                `iconbutton--${Size}`, 
                `iconbutton--${Type}`,
                `iconbutton--${Type}--${State}`
            ].join(' ')}
            disabled={(State==='Disabled')}
            {...props}
        >
            <img 
                src={(Type==='Tertiary') ? TertIcon : PrimIcon} 
                alt='Icon' 
                style={{width: (Size==='Small') ? '20px' : '24px'}}/>
        </button>
    )
}