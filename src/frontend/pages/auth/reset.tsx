import React from 'react';
import ResetPassword from '@components/authentication/ResetPassword';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

const Reset = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Reset password</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ResetPassword />;
        </>    
    )
    
};

export default Reset;
