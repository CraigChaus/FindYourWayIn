import React from 'react';
import ResetPassword from '@components/authentication/ResetPassword';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }: any) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },  
})

const Reset = (): JSX.Element => {
    return <ResetPassword />;
};

export default Reset;
