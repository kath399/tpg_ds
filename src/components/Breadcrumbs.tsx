import React, { useState, useEffect } from 'react';
import './breadcrumbs.css';
import ChevronRight from './assets/chevron-right.svg'
import ChevronLeft from './assets/chevron-left.svg'

interface BreadcrumbsProps {
    Size: 'Large' | 'Small';
    State: 'Default' | 'Focus' | 'Hover' | 'Pressed';
}

export const Breadcrumbs = ({
    Size = 'Large',
    State = 'Default',
}: BreadcrumbsProps) => {
    const [p0, setP0] = useState(true)
    const [p1, setP1] = useState(true)
    const [p2, setP2] = useState(true)
    const [p3, setP3] = useState(true)
    const [s0, setS0] = useState(true)

    const handleBackClick = () => {
        setS0(false)
    }

    const handleHomeClick = () => {
        setP0(false)
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
            {(Size==='Large') && p0 && <div className={[`breadcrumbs`, `breadcrumbs--${Size}`].join(' ')}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                    {p0 && <a onClick={handleHomeClick} style={{textDecoration: 'underline', cursor: 'pointer'}}>Parent</a>}
                    {p0 && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {p1 && <a onClick={handleP1Click} style={{textDecoration: 'underline', cursor: 'pointer'}}>Parent</a>}
                    {p1 && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {p2 && <a onClick={handleP2Click} style={{textDecoration: 'underline', cursor: 'pointer'}}>Parent</a>}
                    {p2 && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {p3 && <a onClick={handleP3Click} style={{textDecoration: 'underline', cursor: 'pointer'}}>Parent</a>}
                    {p3 && <img src={ChevronRight} style={{width: '16px', height: '16px', margin: '4px'}}/>}
                    {p0 && <text>Current page</text>}
                </div>
            </div>}
            {(Size==='Small') && s0 && <div className={[`breadcrumbs`, `breadcrumbs--Small`].join(' ')}>
                <a style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}} onClick={handleBackClick}>
                    <img src={ChevronLeft} style={{width: '20px', height: '20px', margin: '4px'}}/>
                    Back button
                </a>
            </div>}
        </>
    )
}