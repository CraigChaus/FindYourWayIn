import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

/**
 *
 * @returns reset password link component
 */
const ResetPasswordLink = (): JSX.Element => {
    const { t } = useTranslation('common');
    return (
        <Link href={'/auth/reset'}>
            <a className="text-sm text-green-800 hover:text-green-600">
                {t('forgetPassword')}
            </a>
        </Link>
    );
};

export default ResetPasswordLink;
