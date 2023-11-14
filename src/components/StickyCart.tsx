import React, { useState } from 'react';
import './stickycart.css';
import Chevron from './Chevrondown.svg';

interface StickyCartProps {
    amount?: number;
}

export const StickyCart =({
}: StickyCartProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => {
        setIsOpen(!isOpen);
      };
    return (
        <div>
            <div className='stickycart'>
                <div className='content'>
                    <p style={{fontSize: 20, padding: 0}}>You'll pay <b>$0.00</b> per month</p>
                    <p>Total min. cost: $0.00</p>
                </div>
                <div className='link' onClick={toggleCart}>
                    <text style={{color: '#E60000'}}>See more</text><img src={Chevron} alt="See More"/>
                </div>
                <button className='continuetocart'>
                    Continue to cart
                </button>
            </div>
            {isOpen && (
                <div className='expanded'>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '50%'}}><b>Plan</b></div>
                        <div style={{width: '50%', display: 'flex', justifyContent:'flex-end'}}><b>$0.00</b></div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '50%'}}><text>Plan Name</text></div>
                        <div style={{width: '50%', display: 'flex', justifyContent:'flex-end'}}><text>Details</text></div>
                    </div>
                    <hr/>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '50%'}}><b>Phone</b></div>
                        <div style={{width: '50%', display: 'flex', justifyContent:'flex-end'}}><b>$0.00</b></div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '50%'}}><text>Phone Name</text></div>
                        <div style={{width: '50%', display: 'flex', justifyContent:'flex-end'}}><text>Details</text></div>
                    </div>
                    <hr/>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '50%'}}><b>Extras</b></div>
                        <div style={{width: '50%', display: 'flex', justifyContent:'flex-end'}}><b>$0.00</b></div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '50%'}}><text>Add extras details</text></div>
                        <div style={{width: '50%', display: 'flex', justifyContent:'flex-end'}}><text>Details</text></div>
                    </div>
                </div>
            )}
        </div>
    )
}