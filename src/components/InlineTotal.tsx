import React from 'react';
import './inlinetotal.css';

interface InlineTotalProps {
    headline: string,
    amount: number
}

export const InlineTotal = ({
    headline = 'Headline',
    amount = 0,
}: InlineTotalProps ) => {
    return (
        <div>
            <div className='inline-container'>
                <h1>{headline}</h1>        
                <div className="grid-container">
                    <div className="grid-item">
                        <div className='container'><text className='dollarsign'>$</text><h2>{amount}</h2></div>
                    </div>
                    <div className="grid-item">
                        <p className='amount'>$0</p><p className='permonth'>per month</p>
                    </div>
                </div>
                <p className='details'>When you <u>stay connected with us for 36 months.</u></p>
                <p className='details'>Plan cost additional.</p>
            </div>
            <div className='inline-container'>
                <h1>{headline}</h1>        
                <div className="grid-container">
                    <div className="grid-item">
                        <div className='container'><text className='dollarsign'>$</text><h2>{amount}</h2></div>
                    </div>
                    <div className="grid-item">
                        <p className='amount'>$0</p><p className='permonth'>per month</p>
                    </div>
                </div>
                <p className='details'>When you <u>stay connected with us for 36 months.</u></p>
                <p className='details'>Plan cost additional.</p>
            </div>
        </div>
    )
}