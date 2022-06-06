import Link from 'next/link';
import React from 'react';

/**
 * Link component for navigation between authentication pages
 * @param link - link to be navigated to
 * @returns NavigationLink component
 */
export default function NavigationLink({ link }: any) {
    return (
        <p className="mb-4 text-sm">
            {link === 'login'
                ? `Already have an account? Login `
                : `Don't have an account? Sign up `}
            <Link href={`/${link}`}>
                <a className="text-green-700 underline hover:text-green-600">
                    here
                </a>
            </Link>
        </p>
    );
}
