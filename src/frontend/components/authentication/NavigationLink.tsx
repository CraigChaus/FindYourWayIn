import Link from 'next/link';
import React from 'react';

export default function NavigationLink(props: any) {
    return (
        <p className="mb-4 text-sm">
            {(props.link === 'login') ? `Already have an account? Login ` : `Don't have an account? Sign up `}
            <Link href={`/${props.link}`}><a className="text-green-700 underline hover:text-green-600">here</a></Link>
        </p>

    )
}