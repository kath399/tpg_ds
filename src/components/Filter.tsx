import React, { useState } from 'react';
import './filter.css';
import Close from './close.svg';

interface FilterProps {
    mode?: 'primary' | 'secondary',
    Label: string,
    disable?: boolean,
    noOfChips?: number,
}


export const Filter = ({
    Label = 'Label',
    disable = true,
    mode = 'primary',
    noOfChips = 1,
}: FilterProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const toggleFilter = () => {
        setIsSelected(!isSelected)
    }     

    return (
        <div className="filter-row">
        {[...Array(noOfChips)].map((_, index) => (

          <button className={isSelected ? `selected-${mode}` : `filter-${mode}`} onClick={toggleFilter} disabled={disable===true}>
            <text>{Label}</text>
            {isSelected && (<img src={Close}/>)}
          </button>
        ))}
      </div>
    )
}