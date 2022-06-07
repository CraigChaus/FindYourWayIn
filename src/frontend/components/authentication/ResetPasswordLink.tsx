import React from 'react';
import Link from 'next/link';

const ResetPasswordLink = (): JSX.Element => {
    return (
        <Link href={'/auth/reset'}>
            <a className="text-sm text-green-800 hover:text-green-600">
                Forget your password?
            </a>
        </Link>
    );
};

export default ResetPasswordLink;
