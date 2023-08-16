import React from 'react';
import './textfield.css';

interface TextfieldProps {
    primary?: boolean;
    id: string;
    borderColor?: string;
    status?: 'default' | 'active';
    isDisabled: boolean;
    label: string;
}

export const Textfield = ({ id, status, label }: TextfieldProps) => {
    return (
      <label htmlFor={id}> {label}
        <input id={id} type="text" className={['textfield', `texfield--${status}`].join(' ')}/>
      </label>
    );
};
  