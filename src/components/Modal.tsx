import React, { useState, useEffect } from 'react';
import { Button } from './Button';

import * as Dialog from '@radix-ui/react-dialog';
import Close from './assets/close.svg';
import Icon from './assets/TooltipIcon.svg';

interface ModalProps {
    Size: 'Large' | 'Small';
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

    // SIZES
    let modalSize = (Size==='Small') ? 'h-[480px] w-[360px] pl-[16px] rounded-[16px_16px_0px_0px]'
        : 'w-[780px] min-h-[384px] max-h-[728px] pt-[32px] pl-[64px] pr-[64px] rounded-[32px]';
    let headSize = (Size==='Small') ? 'pb-[16px] text-[28px]' : 'pb-[32px] text-[48px]';
    let btnSize = (Size==='Small') ? 'inline-block absolute bottom-0 pb-[24px]' : 'flex justify-end absolute bottom-[32px] right-[64px]';
    let btnSmall = (Size==='Small') ? 'h-[12px]' : 'w-[24px]'
    let crossSize = (Size==='Small') ? 'top-[16px] right-[16px]' : 'top-[32px] right-[32px]'

    let shadow = (Size==='Small') ? 'shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08),0px_-89px_25px_0px_rgba(0,0,0,0.00),0px_-57px_23px_0px_rgba(0,0,0,0.01),0px_-32px_19px_0px_rgba(0,0,0,0.05),0px_-14px_14px_0px_rgba(0,0,0,0.09),0px_-4px_8px_0px_rgba(0,0,0,0.10)]' :
    'shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10),0px_14px_14px_0px_rgba(0,0,0,0.09),0px_32px_19px_0px_rgba(0,0,0,0.05),0px_57px_23px_0px_rgba(0,0,0,0.01),0px_89px_25px_0px_rgba(0,0,0,0.00),0px_0px_4px_0px_rgba(0,0,0,0.08)]';
    
    let modalSmall = 'sm:translate-x-0 sm:translate-y-0 sm:left-0 sm:bottom-0 sm:h-[480px] sm:w-[360px] sm:rounded-[16px_16px_0px_0px] sm:p-[24px_16px]'

    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Button Size={Size} Colour='Primary' State='Enabled' Text='Label'/>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Content className={`data-[state=open]:animate-contentShow fixed -translate-x-2/4 translate-y-2/4 left-2/4 bottom-2/4 ${modalSize} ${modalSmall} ${shadow} bg-white p-[25px] focus:outline-none`}>
                        <Dialog.Title className={`font-vodafone pt-[32px]  ${headSize} sm:text-[28px]`}>
                            {HeadingText}
                        </Dialog.Title>
                        {ShowBodyText && <div className='font-vodafone w-[100%] h-[120px] text-[18px]'>
                            <p className='break-all'>{BodyText}</p>
                        </div>}
                        {ShowButtons && <div className={`${btnSize} sm:inline-block sm:absolute sm:bottom-0 sm:pb-[24px]`}>
                            {ShowButton02 && <Button Size={Size} Colour='Tertiary' State='Enabled' Text='Label'/>}
                            <div className={`${btnSmall} sm:h-[12px]`}/>
                                <Button Size={Size} Colour='Primary' State='Enabled' Text='Label'/>
                            </div>
                        }
                        <Dialog.Close asChild className={`absolute ${crossSize}`}>
                            <button><img src={Close} alt='Close'/></button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        </div>
    )
}