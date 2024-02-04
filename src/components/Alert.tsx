import React from 'react';
import './alert.css';
import IconWhite from './assets/Icon_White.svg'
import Icon from './assets/TooltipIcon.svg'

interface AlertProps {
    Size: 'Desktop' | 'Tablet' | 'Mobile';
    Type: 'Stacked' | 'Inline';
    State: 'Error' | 'Warning' | 'Success' | 'Info';
    ShowHeading: boolean;
    Heading: string;
    BodyText: string;
    CloseButton: boolean;
    Button: boolean;
}

export const Alert = ({
    Size = 'Desktop',
    Type = 'Stacked',
    State = 'Error',
    ShowHeading = true,
    Heading = 'Heading',
    BodyText = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    CloseButton = true,
    Button = false
}: AlertProps) => {
    return(
        <div className={['alert', `alert--${Size}`, `alert--${Type}`, `alert--${Size}--${State}`].join(' ')}>
            <div className={[`block`, `block--${Type}`, `block--${State}`].join(' ')}>
                <img src={IconWhite} alt='Icon' style={{ marginLeft:'auto', marginRight: 'auto' }}/> 
            </div>
            <img src={(Type==='Stacked') ? IconWhite : Icon} alt='Icon' style={{position: 'absolute', right:'16px', top: '11px'}}/>
            <div className={['textBox', `textBox--${Type}`].join(' ')}>
                <div style={{ marginBottom: '16px', fontWeight: 'bold' }}>{ShowHeading && Heading}</div>
                {BodyText}
            </div>
        </div>
    )
}