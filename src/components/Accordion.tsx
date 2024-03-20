import React, { useState } from 'react';
import './accordion.css';
import Chevron from './Chevrondown.svg';

import * as RadixAccordion from '@radix-ui/react-accordion';
import BlackIcon from './assets/Icon_black.svg'
import RedIcon from './assets/Icon.svg'

interface AccordionProps {
  Size?: 'Desktop' | 'Tablet' | 'Mobile';
  State?: 'Collapsed' | 'Expanded';
  ShowLabelIcon: boolean;
  LabelText?: string;
  ShowTitle?: boolean;
  TitleText?: string;
  BodyCopy?: string;
  TopDivider?: boolean;
  BottomDivider?: boolean;
  Children?: string[][];
}

export const Accordion = ({
  Size = 'Desktop',
  LabelText = 'Accordion Label', 
  ShowLabelIcon = true,
  TitleText = 'Title',
  BodyCopy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  Children = [['Title', 'Lorem Ipsum'], ['Title', 'Lorem Ipsum']]
}: AccordionProps) => {

  return (
    <div>
      <RadixAccordion.Root 
        className='bg-transparent p-[16px] w-[1180px] border-t-solid border-t-[1px] border-t-white border-b-solid border-b-[1px] border-b-white' 
        type='single' 
        defaultValue="item-1"
        collapsible>
          <RadixAccordion.Item value='item-1'>
            <RadixAccordion.Header>
              <RadixAccordion.Trigger className='flex w-[100%]'>
                  {ShowLabelIcon && <img src={BlackIcon} alt='' style={{marginRight: '12px'}}/>}
                  {LabelText}
                  <img src={RedIcon} alt='' style={{marginLeft: 'auto', marginRight: '0'}}/>
              </RadixAccordion.Trigger>
            </RadixAccordion.Header>
            <RadixAccordion.Content>
              <div className='flex pt-[16px]'>
                <img src={BlackIcon} alt='' style={{marginRight: '12px'}}/>
                {TitleText}
              </div>
              <div className='mt-[8px]'>
                {BodyCopy}
              </div>
            </RadixAccordion.Content>
          </RadixAccordion.Item>
      </RadixAccordion.Root>
    </div>
  );
};
