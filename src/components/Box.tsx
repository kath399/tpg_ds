import React from 'react';
import './box.css';

interface BoxProps {
    backgroundColor: string,
    borderColor: string,
    size: 'small' | 'medium' | 'large';
}

export const Box = ({
    backgroundColor,
    borderColor,
    size
}: BoxProps) => {
    return (
        <div 
            className='box'
            style={{
                backgroundColor: backgroundColor,
                borderColor: borderColor,
            }}
        >

        </div>
    );
};
  
