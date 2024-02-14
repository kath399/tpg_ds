import React, { useState, useEffect } from 'react';
import './alert.css';
import IconWhite from './assets/Icon_White.svg';
import Icon from './assets/TooltipIcon.svg';

interface AlertProps {
    Size: 'Desktop' | 'Tablet' | 'Mobile';
    Type: 'Stacked' | 'Inline';
    State: 'Error' | 'Warning' | 'Success' | 'Info';
    ShowHeading: boolean;
    Heading: string;
    BodyText: string;
    CloseButton: boolean;
    Button: boolean;
    onClick?: () => void;
}

/*export const Alert = ({
    Size = 'Desktop',
    Type = 'Stacked',
    State = 'Error',
    ShowHeading = true,
    Heading = 'Heading',
    BodyText = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    CloseButton = true,
    Button = false,
}: AlertProps) => {
    // const [windowSize, setWindowSize] = useState(Size);
    // if(window.innerWidth <= 360) {
    //     setWindowSize('Mobile')
    // }

    let inlineTextWidth = '620px'
    let stackedTextWidth = '704px'
    if(Size==='Tablet') {
        inlineTextWidth = '342px';
        stackedTextWidth = '398px';
    } else if(Size==='Mobile') {
        inlineTextWidth = '196px';
        stackedTextWidth = '252px';
    }

    return(
        <div className={['alert', `alert--${Type}`, `alert--${Size}`, `alert--${Size}--${State}`].join(' ')} style={{ display: (Type==='Inline') ? 'flex' : 'block' }}>
            {CloseButton && <img src={(Type==='Stacked') ? IconWhite : Icon} alt='Icon' style={{position: 'absolute', right:'16px', top: (Type==='Inline') ? '20px' : '11px'}}/>}
            <div className={[`block`, `block--${Type}`, `block--${State}`].join(' ')}>
                <img src={IconWhite} alt='Icon' style={{ marginLeft:'auto', marginRight: 'auto' }}/> 
            </div>
            <div className={['textBox', `textBox--${Type}`, `textBox--${Size}`].join(' ')} style={{ width: (Type==='Inline') ? inlineTextWidth : stackedTextWidth }}>
                <div style={{ marginBottom: '16px', fontWeight: 'bold' }}>{ShowHeading && Heading}</div>
                {BodyText}
                <div style={{paddingTop: '24px'}}>
                    {Button && <button className={['AlertButton', `AlertButton--${Size}`].join(' ')}>Button</button>}
                </div>
            </div>
        </div>
    )
}*/

export const Alert = ({
    Size = 'Desktop',
    Type = 'Stacked',
    State = 'Error',
    ShowHeading = true,
    Heading = 'Heading',
    BodyText = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    CloseButton = true,
    Button = false,
}: AlertProps) => {

    /*let inlineTextWidth = '620px'
    let stackedTextWidth = '704px'
    if(Size==='Tablet') {
        inlineTextWidth = '342px';
        stackedTextWidth = '398px';
    } else if(Size==='Mobile') {
        inlineTextWidth = '196px';
        stackedTextWidth = '252px';
    }*/

    return(
        <div 
            className={[
                'alert', 
                `alert--${Type}`, 
                `alert--${Size}`, 
                `alert--${Size}--${State}`
            ].join(' ')} 
            style={{ 
                display: (Type==='Inline') ? 'flex' : 'block' 
            }}
        >
            {CloseButton && 
                <img 
                    src={(Type==='Stacked') ? IconWhite : Icon} 
                    alt='Icon' 
                    style={{
                        position: 'absolute', 
                        right:'16px', 
                        top: (Type==='Inline') ? '20px' : '11px'
                    }}
                />
            }
            <div className={[`block`, `block--${Type}`, `block--${State}`].join(' ')}>
                <img src={IconWhite} alt='Icon' style={{ marginLeft:'auto', marginRight: 'auto' }}/> 
            </div>
            <div 
                className={[
                    'textBox', 
                    `textBox--${Type}`, 
                    `textBox--${Type}--${Size}`
                ].join(' ')} 
            >
                <div 
                    style={{ 
                        marginBottom: '16px', 
                        fontWeight: 'bold' 
                    }}
                >
                    {ShowHeading && Heading}
                </div>
                {BodyText}
                <div style={{paddingTop: '24px'}}>
                    {Button && <button className={['AlertButton', `AlertButton--${Size}`].join(' ')}>Button</button>}
                </div>
            </div>
        </div>
    )
}