import React, { useState } from 'react';
import './selectsim.css';
import Vector from './eSIM.svg';
import Tick from './Tick.svg';
import Chevron from './Chevrondown.svg';

interface SelectSIMProps {
    dropdown?: boolean;
}

export const SelectSIM = ({
    dropdown = false
}: SelectSIMProps ) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSim = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='selectsim'>
            <div className={dropdown ? 'sim-grid-dropdown' : 'sim-grid-container'}>
                <div className='sim-grid-item'>
                    <img src={Vector} alt="img not found"/>
                </div>
                <div className='sim-grid-item'>
                    <h1 className='sim-h1'>Want to use an eSIM?</h1>
                    <p className='sim-text'>An eSIM is a chip that’s already embedded into your device, so you don’t need a physical SIM to use your plan.</p>    
                </div>
                {dropdown && (
                    <div className='sim-grid-item'>
                        <img src={Chevron} onClick={toggleSim} alt='Click'/>
                    </div>
                )}
            </div>
            
            {!dropdown && (<>
                <h1 className='sim-h1'>The benefits of an eSIM</h1>
                <ul>
                    <li className='sim-text'>Faster setup</li>
                    <li className='sim-text'>Simpler activation</li>
                    <li className='sim-text'>Environmentally friendly</li>
                </ul>
            </>)}

            {isOpen && (<>
                <h1 className='sim-h1'>The benefits of an eSIM</h1>
                <ul>
                    <li className='sim-text'>Faster setup</li>
                    <li className='sim-text'>Simpler activation</li>
                    <li className='sim-text'>Environmentally friendly</li>
                </ul>
            </>)}

            <button className='physicalbtn'>
                <img src={Tick} style={{marginRight: 5}} alt='Tick'/>
                <text>Physical SIM</text>
            </button>
            <button className='ebtn'>Yes I want to use an eSIM</button>
            <div className='info-grid-container'>
                <div className='info-grid-item'>
                    <div className="tooltip" style={{marginTop: 10}}>&#x1F6C8;
                        <span className="tooltiptext">Tooltip text</span>
                    </div>
                </div>
                <div className='info-grid-item'>
                    <p className='info-text'>You'll need to activate your plan on an eSIM via the My Vodafone App.</p>
                    <p className='info-text'>Detailed instructions will be included in your order confirmation email.</p>
                </div>
            </div>   
        </div>
    )
}