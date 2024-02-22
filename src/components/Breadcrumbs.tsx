import React, { useState, useEffect } from 'react';
import './breadcrumbs.css';
import ChevronRight from './assets/chevron-right.svg'
import ChevronLeft from './assets/chevron-left.svg'

interface BreadcrumbsProps {
    Size: 'Large' | 'Small';
    State: 'Default' | 'Focus' | 'Hover' | 'Pressed';
    Text?: string;
}

export const Breadcrumbs = ({
    Size = 'Large',
    State = 'Default',
    Text,
}: BreadcrumbsProps) => {
    const [home, setHome] = useState(true)
    const [p1, setP1] = useState(true)
    const [p2, setP2] = useState(true)
    const [p3, setP3] = useState(true)

    const handleHomeClick = () => {
        setHome(false)
        setP1(false)
        setP2(false)
        setP3(false)
    }
    const handleP1Click = () => {
        setP1(false)
        setP2(false)
        setP3(false)
    }
    const handleP2Click = () => {
        setP2(false)
        setP3(false)
    }
    const handleP3Click = () => {
        setP3(false)
    }

    return(
        <>
            {(Size==='Large') && <div className={[`breadcrumbs`, `breadcrumbs--${Size}`].join(' ')}>
                <div style={{display: 'flex', alignItems: 'center', justifyItems:'center', width: '1180px'}}>
                    <a onClick={handleHomeClick} style={{textDecoration: 'underline'}}>Home</a>
                    {home && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {p1 && <a onClick={handleP1Click} style={{textDecoration: 'underline'}}>Parent</a>}
                    {p1 && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {p2 && <a onClick={handleP2Click} style={{textDecoration: 'underline'}}>Parent</a>}
                    {p2 && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {p3 && <a onClick={handleP3Click} style={{textDecoration: 'underline'}}>Parent</a>}
                    {p3 && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {home && <text>Current page</text>}
                </div>
            </div>}
            {(Size==='Small') && <div className={[`breadcrumbs`, `breadcrumbs--${Size}`].join(' ')}>
                <img src={ChevronLeft} style={{width: '20px', height: '20px', margin: '4px'}}/>
                <text>Back button</text>
            </div>}
        </>
    )
}