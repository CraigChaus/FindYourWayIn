import React from 'react';

/**
 * Authentication button 
 * @param action - action to be performed
 * @param text - text to be displayed on the button 
 * @returns button for authentication (Sign up, Login)
 */
export default function AuthButton({action, text}: any) {
    return (
        <button 
            className="inline-block w-5/6 py-3 mb-4 font-medium leading-snug text-white transition duration-150 ease-in-out bg-green-600 shadow-md rounded-xl px-7 hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg" 
            onClick={action}
        >
            {text}
        </button>

    );
}