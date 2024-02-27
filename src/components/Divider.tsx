import React, { useState, useEffect } from 'react';
import './divider.css';

interface DividerProps {
    Colour: 'LightGrey' | 'MidGrey' | 'Success' | 'Incomplete' | 'Dash' | 'DarkGrey'
}

export const Divider = ({
    Colour
}: DividerProps) => {
    return(
        <div className={[`divider`, `divider--${Colour}`,].join(' ')}/>
    )
}