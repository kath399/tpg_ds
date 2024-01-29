import React, { useState } from 'react';
import { Textfield } from './Textfield';
import { Checkbox } from './Checkbox';

interface AddressLookupProps {
    errorAddress?: boolean;
    errorAddressText?: string;
    addresses?: string[];
}

export const AddressLookup =({
    errorAddress,
    errorAddressText = 'Error text',
    addresses = []

}: AddressLookupProps) => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showNotFoundError, setShowNotFoundError] = useState(false);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setIsEmpty(value.trim() === '');
    
        // Check if the input value is not found in suggestions
        setShowNotFoundError(value.trim() !== '' && !addresses.includes(value.trim()));
    };

    const dynamicSuggestions = showNotFoundError ? ["We're looking for your address, please keep trying or enter it manually."] : addresses;

    return (
        <div>
            <Textfield
                id = 'AddressLookup'
                complex= { true }
                state= 'enabled'
                label= 'Home Address'
                error= {errorAddress}
                errortext= {errorAddressText}
                suggestions={addresses}
            />
            <br/>
            
        </div>
    )
}