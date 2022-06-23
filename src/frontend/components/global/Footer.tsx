import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation('common');
    return (
        <footer
            data-testid="copyright"
            className="p-4 text-center text-white lg:text-left sticky top-[100vh] "
        >
            <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-300">
                © 2022
                <Link href="/home">
                    <a className="hover:underline"> FYWI™</a>
                </Link>
                {`. ${t('footer')}.`}
            </span>
        </footer>
    );
}
