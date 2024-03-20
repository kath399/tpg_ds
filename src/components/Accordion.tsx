import React, { useState } from 'react';
import './accordion.css';
import Chevron from './Chevrondown.svg';

import * as RadixAccordion from '@radix-ui/react-accordion';

interface AccordionProps {
  Size?: 'Desktop' | 'Tablet' | 'Mobile';
  State?: 'Collapsed' | 'Expanded';
  LabelIcon?: boolean;
  LabelText?: string;
  TopDivider?: boolean;
  BottomDivider?: boolean;
  Children?: string[][];
}

export const Accordion = ({
  Size = 'Desktop',
  LabelText = 'Label', 
  Children = [['Title', 'Lorem Ipsum'], ['Title', 'Lorem Ipsum']]
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <RadixAccordion.Root 
        className='bg-white' 
        type='single' 
        defaultValue="item-1"
        collapsible>
      </RadixAccordion.Root>
      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
          <h3>{LabelText}</h3>
          <img src={Chevron} style={{display: 'flex', alignSelf: 'flex-end'}} alt='Chevron'/>
        </div>
        {isOpen && (
          <div className="accordion-content">
            {Children}
          </div>
        )}
      </div>
    </div>
  );
};
