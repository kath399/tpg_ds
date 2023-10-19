import React from 'react';
import './abandonedcart.css';
import {Button} from './Button';

interface AbandonedCartProps {
  viewport?: 'desktop' | 'tablet' | 'mobile';
  number?: string;
  singleItem: boolean;
  items?: number;
}

export const AbandonedCart = ({
    viewport = 'desktop',
    number,
    items = 2,
    singleItem,
    ...props
  }: AbandonedCartProps) => {
    const itemsToShow = `You have ${items} <span class="bold">items</span> saved in your cart from your previous visit`;
    
    if (singleItem) {
      // Change itemsToShow to show single item
    }
    const element = document.getElementById("myElement");
    if (element) {
      element.style.textAlign = "center";
      element.textContent = itemsToShow;
    }
    return (
        <div className='cart'>
            <h1>Welcome back</h1>
            <h2>{number}</h2>
            <p>This is saved in your cart:</p>
            {itemsToShow}
            <button type="button" className="cartbutton">Go to cart</button>
            <p><u><a>No thanks</a></u></p>
        </div>
    );
  };