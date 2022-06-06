import React from 'react';
import Image from 'next/image';
import logoWithoutText from '../../public/logo_without_text.png';
import { useRouter } from 'next/router';

/**
 * Header of authentication form
 * @param formName - name of the form
 * @returns
 */
export default function HeaderAuthForm({ formName }: any) {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center">
            <Image
                onClick={() => router.push('/')}
                alt="logo"
                width={80}
                height={80}
                src={logoWithoutText}
            />
            <h2 className="mt-4 text-3xl font-bold text-center text-black">
                {formName}
            </h2>
        </div>
    );
}
