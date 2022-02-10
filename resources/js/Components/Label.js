import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-text text-sm  ` + className}>
            {value ? value : children}
        </label>
    );
}
