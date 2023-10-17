import React from 'react';
import './abandonedcart.css';
import {Button} from './Button';

interface AbandonedCartProps {
  mode?: string;
  viewport?: 'desktop' | 'tablet' | 'mobile';
  label: string;
  number?: string;
}

export const AbandonedCart = ({
    //primary = false,
    mode = 'primary',
    viewport = 'desktop',
    label,
    number = '04XX XXX 246',
    ...props
  }: AbandonedCartProps) => {
    //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <div className={`cart--${viewport}`}>
            <h1>Welcome back</h1>
            <h2>{number}</h2>
            <p>This is saved in your cart:</p>
            <Button label='Go to cart'/>
            <p><u><a>No thanks</a></u></p>
        </div>
    );
  };