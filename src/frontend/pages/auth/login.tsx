import React from 'react';
import Login from '@components/authentication/Login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }: any) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },  
})

export default function LoginPage() {
    return <Login />;
}
