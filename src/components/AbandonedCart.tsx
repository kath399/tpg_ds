import React from 'react';
import './abandonedcart.css';
import {Button} from './Button';

interface AbandonedCartProps {
  mode?: string;
  viewport?: 'desktop' | 'tablet' | 'mobile';
  buttonlabel: string;
  number?: string;
}

export const AbandonedCart = ({
    //primary = false,
    mode = 'primary',
    viewport = 'desktop',
    buttonlabel = 'Go to cart',
    number = '04XX XXX 246',
    ...props
  }: AbandonedCartProps) => {
    //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <div className='cart'>
            <h1>Welcome back</h1>
            <h2>{number}</h2>
            <p>This is saved in your cart:</p>

            <Button label={buttonlabel} mode='primary' state='default'/>
            <p><u><a>No thanks</a></u></p>
        </div>
    );
  };