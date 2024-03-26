import React, { useState, useEffect } from 'react';
import './accordion.css';

import * as RadixAccordion from '@radix-ui/react-accordion';
import BlackIcon from './assets/Icon_black.svg'
import RedIcon from './assets/Icon.svg'

interface AccordionProps {
  Size: 'Large' | 'Medium' | 'Small';
  Type: 'Single' | 'Multiple';
  State: 'Collapsed' | 'Expanded';
  ShowLabelIcon: boolean;
  LabelText: string;
  ShowTitle: boolean;
  TitleText: string;
  BodyCopy: string;
  TopDivider: boolean;
  BottomDivider: boolean;
}

export const Accordion = ({
  Size = 'Large',
  Type = 'Single',
  State = 'Collapsed',
  LabelText = 'Accordion Label', 
  ShowTitle = true,
  ShowLabelIcon = true,
  TitleText = 'Title',
  BodyCopy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  TopDivider = true,
  BottomDivider = true,
}: AccordionProps) => {

  // BREAKPOINTS
  let accordionSize = (Size==='Large') ? 'w-[1180px]' 
    : (Size==='Medium') ? 'w-[720px]'
    : 'w-[328px]';

  // BORDERS
  let topBorder = (TopDivider) ? 'border-t-solid border-t-[1px] border-t-white' : ''
  let botBorder = (BottomDivider) ? 'border-b-solid border-b-[1px] border-b-white' : ''
  
  // ACCORDION GROUP
  const accordionGroup = []
  const [accordionStates, setAccordionStates] = useState<string[]>([]);
  const numberOfAccordions = (Type==='Single') ? 1 : 8;

  useEffect(() => {
    if (State === 'Expanded') {
        const expandedStates = Array.from(Array(numberOfAccordions).keys()).map(i => `item-${i}`);
        setAccordionStates(expandedStates);
    } else {
        setAccordionStates(Array(numberOfAccordions).fill(''));
    }
  }, [State, numberOfAccordions]);


  const handleAccordionClick = (index: number) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = (newAccordionStates[index] === 'closed') ? 'open' : 'closed';
    setAccordionStates(newAccordionStates);
  };

  for(let i = 0; i < numberOfAccordions; i++) {
    accordionGroup.push(          
      <RadixAccordion.Item 
        key={`accordion-${i}`}
        value={`item-${i}`} 
        className={`${topBorder} ${botBorder}`}
        data-state={accordionStates[i]}
      >
        <RadixAccordion.Header>
          <RadixAccordion.Trigger className='flex w-[100%]  p-[16px]' onClick={() => handleAccordionClick(i)}>
              {ShowLabelIcon && <img src={BlackIcon} alt='' style={{marginRight: '12px'}}/>}
              {LabelText}
              <img src={RedIcon} alt='' style={{marginLeft: 'auto', marginRight: '0'}}/>
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <RadixAccordion.Content>
          {ShowTitle && <div className='flex p-[8px_16px]'>
            <img src={BlackIcon} alt='' style={{marginRight: '12px'}}/>
            {TitleText}
          </div>}
          <div className='pl-[16px] pr-[16px] pt-[8px] pb-[16px]'>
            {BodyCopy}
          </div>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    );
  }

  return (
    <div>
      <RadixAccordion.Root 
        className={`bg-transparent ${accordionSize} sm:w-[328px] md:w-[720px]`} 
        type='multiple'
        value={accordionStates}
        onValueChange={setAccordionStates}
      >
        {accordionGroup}
      </RadixAccordion.Root>
    </div>
  );
};
