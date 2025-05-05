// src/components/ui/button.jsx
import React from 'react';

const Button = ({ children, className, ...props }) =>
{
    return (
        <button
            className={`px-6 py-3 font-medium rounded-lg focus:outline-none ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export { Button };