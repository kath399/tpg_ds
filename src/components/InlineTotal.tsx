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
                <h1 className='headline'>{headline}</h1>        
                <div className="inline-grid-container">
                    <div className="inline-grid-item">
                        <div className='dollar-container'><text className='dollarsign'>$</text><text className='amount-value'>{amount}</text></div>
                    </div>
                    <div className="inline-grid-item">
                        <p className='amount'>$0</p><p className='permonth'>per month</p>
                    </div>
                </div>
                <p className='details'>When you <u>stay connected with us for 36 months.</u></p>
                <p className='details'>Plan cost additional.</p>
            </div>
            <div className='inline-container'>
                <h1 className='headline'>{headline}</h1>        
                <div className="inline-grid-container">
                    <div className="inline-grid-item">
                        <div className='dollar-container'><text className='dollarsign'>$</text><text className='amount-value'>{amount}</text></div>
                    </div>
                    <div className="inline-grid-item">
                        <p className='amount'>$0</p><p className='permonth'>per month</p>
                    </div>
                </div>
                <p className='details'>When you <u>stay connected with us for 36 months.</u></p>
                <p className='details'>Plan cost additional.</p>
            </div>
        </div>
    )
}