import React, { useState } from 'react';
import './accordion.css';
import Chevron from './Chevrondown.svg';

interface AccordionProps {
  Label?: string;
  Children?: string[][];
}

const Accordion: React.FC<AccordionProps> = ({
    Label = 'Label', 
    Children = [['Title', 'Lorem Ipsum'], ['Title', 'Lorem Ipsum']]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{Label}</h3>
        <img src={Chevron} style={{display: 'flex', alignSelf: 'flex-end'}} alt='Chevron'/>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {Children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
