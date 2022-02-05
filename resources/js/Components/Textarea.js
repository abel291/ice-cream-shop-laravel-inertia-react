import React, { useEffect, useRef } from "react";

export default function Textarea({
    type = "text",
    placeholder,
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <textarea
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                className={
                    `w-full border-r-0 border-l-0 border-t-0 border-b border-gray-500 pl-0 font-text  shadow-none ring-0 focus:border-b-gray-700 focus:ring-0 ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            ></textarea>
        </div>
    );
}
