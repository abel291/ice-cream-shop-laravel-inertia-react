import React, { useEffect, useRef } from "react";

export default function Input({
    
    type = "text",
    placeholder,
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    disabled
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                className={
                    `w-full border-r-0 border-l-0 border-t-0 border-b border-gray-500 bg-inherit pl-0 font-text shadow-none ring-0 focus:border-b-gray-600 focus:ring-0 pb-1 ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
            />
        </div>
    );
}
