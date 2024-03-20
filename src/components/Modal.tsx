import React, { useState, useEffect } from 'react';
import { Button } from './Button';

import * as Dialog from '@radix-ui/react-dialog';
import Icon from './assets/TooltipIcon.svg';

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
    let modalSize = (Size==='Small') ? 'h-[480px] bottom-0 left-0 pb-[24px] pl-[16px] pr-[16px] rounded-[16px_16px_0px_0px]'
        : 'w-[780px] min-h-[384px] max-h-[728px] rounded-[32px] pt-[32px] pl-[64px] pr-[64px]';
    let headSize = (Size==='Small') ? 'text-[28px]' : 'text-[48px]';
    let btnSize = (Size==='Small') ? 'inline-block' : 'flex justify-end';

    let shadow = (Size==='Small') ? '' :
    'shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10),0px_14px_14px_0px_rgba(0,0,0,0.09),0px_32px_19px_0px_rgba(0,0,0,0.05),0px_57px_23px_0px_rgba(0,0,0,0.01),0px_89px_25px_0px_rgba(0,0,0,0.00),0px_0px_4px_0px_rgba(0,0,0,0.08)]';
    

    return (
        <div>
        <div className={`bg-white sm:fixed sm:bottom-0 sm:left-0 ${modalSize} ${shadow}`}>
            <div className={`font-vodafone ${headSize} pt-[32px] pb-[32px]`}>{HeadingText}</div>
            {ShowBodyText && <div className='font-vodafone flex flex-wrap text-[18px] w-[100px] h-[120px]'>{BodyText}</div>}
            {ShowButtons && <div className={`${btnSize}`}>
                {ShowButton02 && <Button Breakpoint={(Size==='Small') ? 'small' : 'large'} Type='tertiary' Status='default' Text='Label'/>}
                <div style={{width: (Size==='Small') ? '' : '24px', height: (Size==='Small') ? '12px' : ''}}/>
                <Button Breakpoint={(Size==='Small') ? 'small' : 'large'} Type='primary' Status='default' Text='Label'/>
            </div>}
            
        </div>

        </div>
    )
}