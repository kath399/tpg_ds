import React, { useState, useEffect } from 'react';
import './footer.css';
import { Divider } from './Divider';

interface FooterProps {
    Size: 'Desktop' | 'Tablet' | 'Mobile'
}

export const Footer = ({
    Size
}: FooterProps) => {
    return(
        <div className={[`footer`, `footer--${Size}`,].join(' ')}>
            <div className={[`content`, `content--${Size}`].join(' ')}>
                © 2023 TPG Telecom Limited ABN 76 096 304 620
                <div className={[`footerDiv`, `footerDiv--${Size}`].join(' ')}/>
                <div style={{fontSize: '14px'}}>
                    We acknowledge the Traditional Custodians of the land on which we live, work and connect. We pay respect to Elders, past, present, and emerging.
                </div>
            </div>
        </div>
    )
}