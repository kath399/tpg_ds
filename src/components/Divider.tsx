import React, { useState, useEffect } from 'react';
import './divider.css';

interface DividerProps {
    Colour: 'LightGrey' | 'MidGrey' | 'DarkGrey' | 'Success' | 'Incomplete'
}

export const Divider = ({
    Colour
}: DividerProps) => {
    return(
        <div className={[`divider`, `divider--${Colour}`,].join(' ')}/>
    )
}