import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface ModalProps {
    Size: 'Large' | 'Medium' | 'Small';
    HeadingText: string;
    ShowBodyText: boolean;
    BodyText: string;
    ShowButtons: boolean;
    ShowButton02: boolean;
}

export const Modal = ({
    Size = 'Large',
    HeadingText = 'Heading',
    ShowBodyText = true,
    BodyText = 'Body text',
    ShowButtons = true,
    ShowButton02 = true,
}: ModalProps) => {

    // BREAKPOINTS
    let modalSize = (Size==='Small') ? 'pb-[24px] pl-[16px] pr-[16px]'
        : 'w-[780px] h-[384px] rounded-[32px] pt-[32px] pl-[64px] pr-[64px]';
    let headSize = (Size==='Small') ? 'text-[28px]' : 'text-[48px]';
    let btnSize = (Size==='Small') ? 'inline-block' : 'flex justify-end';
    

    return (
        <div className={`bg-white ${modalSize}`}>
            <div className={`font-vodafone ${headSize} pt-[32px] pb-[32px]`}>{HeadingText}</div>
            {ShowBodyText && <div className='font-vodafone text-[18px] h-[120px]'>{BodyText}</div>}
            {ShowButtons && <div className={`${btnSize}`}>
                {ShowButton02 && <Button Breakpoint={(Size==='Small') ? 'small' : 'large'} Type='tertiary' Status='default' Text='Label'/>}
                <div style={{width: (Size==='Small') ? '' : '24px', height: (Size==='Small') ? '12px' : ''}}/>
                <Button Breakpoint={(Size==='Small') ? 'small' : 'large'} Type='primary' Status='default' Text='Label'/>
            </div>}
            
        </div>
    )
}