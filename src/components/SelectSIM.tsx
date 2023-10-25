import React, { useState } from 'react';
import './selectsim.css'
import Vector from './eSIM.svg'

interface SelectSIMProps {
  
}

export const SelectSIM = ({

}: SelectSIMProps ) => {
    return (
        <div className='selectsim'>
            <div className='sim-grid-container'>
                <div className='sim-grid-item'>
                    <img src={Vector} alt="img not found"/>
                </div>
                <div className='sim-grid-item'>
                    <h1 className='sim-h1'>Want to use an eSIM?</h1>
                    <p className='sim-text'>An eSIM is a chip that’s already embedded into your device, so you don’t need a physical SIM to use your plan.</p>    
                </div>
            </div>
            <h1 className='sim-h1'>The benefits of an eSIM</h1>
            <p className='sim-text'>Faster setup</p>
            <p className='sim-text'>Simpler activation</p>
            <p className='sim-text'>Environmentally friendly</p>
            <button className='physicalbtn'><img/>Physical SIM</button>
            <button className='ebtn'>Yes I want to use an eSIM</button>
            <div className='info-grid-container'>
                <div className='info-grid-item'>
                    <img/>
                </div>
                <div className='info-grid-item'>
                    <p className='info-text'>You'll need to activate your plan on an eSIM via the My Vodafone App.</p>
                    <p className='info-text'>Detailed instructions will be included in your order confirmation email.</p>
                </div>
            </div>
        </div>
    )
}