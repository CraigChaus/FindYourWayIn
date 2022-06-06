import React from 'react';
/**
 * Input component for authentcation form
 * @param onChange - function to be called when input is changed
 * @param isRequired - boolean indicates if input is required
 * @param placeholder - placeholder of the input
 * @param type - type of the input
 * @returns
 */
export default function Input({
    onChange,
    isRequired,
    type,
    placeholder
}: any) {
    return (
        <input
            onChange={onChange}
            required={isRequired}
            type={type}
            className="w-full p-3 mb-3 bg-gray-200 rounded-xl focus:bg-gray-200"
            placeholder={placeholder}
        />
    );
}
