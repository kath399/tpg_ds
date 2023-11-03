import React from 'react';
import { Textfield } from './Textfield';

interface AddressLookupProps {
    errorAddress?: boolean;
    errorAddressText?: string;
}

export const AddressLookup =({
    errorAddress,
    errorAddressText = 'Error text'
}: AddressLookupProps) => {
    return (
        <Textfield
            id = 'AddressLookup'
            complex= { true }
            state= 'enabled'
            label= 'Home Address'
            error= {errorAddress}
            errortext= {errorAddressText}
            suggestions={['List item 1', 'List item 2', 'List item 3', 'List item 4']}
        />
    )
}