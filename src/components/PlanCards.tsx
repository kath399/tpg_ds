import React from 'react';
import './plancards.css';
import Vector from './Vector.svg';

interface PlanCardsProps {
    gigabytes: string,
    amount: string
    planname?: string,
    plansubheadline?: string,
}

export const PlanCards = ({
    gigabytes = '00',
    amount = '00.00',
    planname = 'Plan Name',
    plansubheadline
}: PlanCardsProps ) => {
    return (
        <div className='card'>
            <div className="grid-container">
                <div className="grid-item"><h1 className='h1text'>{gigabytes}<text className='gbtext'> GB</text></h1></div>
                <div className="divider"></div>
                <div className="grid-item"><h1 className='value'>${amount}</h1><text className='permonth'>per month</text></div>
            </div>

            <div className='plan'>
                <h2 className='planname'>{planname}</h2>
            </div>
            <div className='headline'>
                <h3>Headline</h3>
                <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.</p>
                <div className = 'grid-container'>
                    <div className='grid-item'>
                        <img src={Vector} alt='Vector'/>
                    </div>
                    <div className='grid-item'>
                        <h3 className='headlinetext'>Headline</h3>
                        <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className = 'grid-container'>
                    <div className='grid-item'>
                        <img src={Vector} alt='Vector'/>
                    </div>
                    <div className='grid-item'>
                        <h3 className='headlinetext'>Headline</h3>
                        <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <button className='selectbtn'>
                    Select this plan
                </button>
                <p><a><u>Critical Information Summary</u></a></p>
                <p><a><u>Rates and charges</u></a></p>
            </div>
            <div className='chin'>
                <text>Get 5% off this plan with Bundle & Save</text>
            </div>
        </div>
    )
}