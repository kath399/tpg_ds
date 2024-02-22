import React, { useState, useEffect } from 'react';
import './chip.css';
import Icon from './assets/Icon_White.svg'

interface ChipProps {
    Size: 'Large' | 'Small';
    State: 'Default' | 'Focus' | 'Hover' | 'Pressed'
}

export const Chip = ({
    Size = 'Large',
    State = 'Default'
}: ChipProps) => {
    return(
        <button className={[`chip`, `chip--${Size}`, `chip--${State}`].join(' ')}>
            Label
        </button>
    )
}