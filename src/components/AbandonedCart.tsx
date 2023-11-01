import React from 'react';
import ReactDOM from 'react-dom';
import './abandonedcart.css';
import {Button} from './Button';
import iphone14pro from '../stories/assets/iphone14pro.png'

interface AbandonedCartProps {
  //viewport?: 'desktop' | 'tablet' | 'mobile';
  number?: string;
  singleItem: boolean;
  items?: number;
  //itemCaption?: string;
}

export const AbandonedCart = ({
    //viewport = 'desktop',
    number,
    items = 2,
    singleItem,
    ...props
  }: AbandonedCartProps) => {
  let itemsToShow = (
    <p>
      You have {items} <span className="bold">items</span> saved in your cart from your previous visit
    </p>
  )
    
  if (singleItem) {
    itemsToShow = (
      <div className='itemContainer'>
        <img src={iphone14pro} alt="Product Image" className='productImage'/>
        <p>
        Samsung Galaxy Note 10+ 4G and $45 Red Plus Plan
        </p>
      </div>
    )  
  }

  const element = document.getElementById("myElement");
  if (element) {
    element.style.textAlign = "center";
    element.innerHTML = ''; // clear any existing content 
    ReactDOM.render(itemsToShow, element);
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