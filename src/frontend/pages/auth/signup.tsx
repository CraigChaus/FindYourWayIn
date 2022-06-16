import React from 'react';
import SignUp from '@components/authentication/SignUp';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default function SignUpPage() {
    return (
        <>
            <Head>
                <title>Sign up</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <SignUp />;
        </>
    );
}
