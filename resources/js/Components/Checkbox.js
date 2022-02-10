import React from "react";

export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className=" border-gray-300 text-gray-600 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
        />
    );
}
