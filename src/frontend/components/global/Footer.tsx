import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
            <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-300">© 2022
                <Link href="/home">
                    <a className="hover:underline"> FYWI™</a>
                </Link>
                . All rights reserved.
            </span>
        </footer>
    )
}