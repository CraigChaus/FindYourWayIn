import React from 'react';

export default function Input(props: any){
    return(
        <input
            onChange={props.onChange}
            required={props.isRequired}
            type={props.type}
            className="w-full p-3 mb-3 bg-gray-200 rounded-xl"
            placeholder={props.placeholder}
        />
    )
}