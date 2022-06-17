import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Link component for navigation between authentication pages
 * @param link - link to be navigated to
 * @returns NavigationLink component
 */
export default function NavigationLink({ link }: any) {
    const { t } = useTranslation('common');
    return (
        <p className="mb-4 text-sm">
            {link === 'login'
                ? `${t('linkToLogin')} `
                : `${t('linkToSignup')} `}
            <Link href={`/auth/${link}`}>
                <a data-cy="authLink" className="text-green-700 underline hover:text-green-600">
                    {t('here')}
                </a>
            </Link>
        </p>
    );
}
