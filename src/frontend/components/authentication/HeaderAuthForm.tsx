import React from 'react';
import Image from 'next/image';
import logoWithoutText from '../../public/logo_without_text.png';

export default function HeaderAuthForm(props: any) {
    return (
        <div className="flex flex-col items-center">  
            <Image alt="logo" width={84} height={84} src={logoWithoutText}/>                      
            <h2 className="mt-4 text-4xl font-bold text-center text-black">{props.formName}</h2>
        </div>
    )
}