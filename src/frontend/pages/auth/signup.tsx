import React from 'react';
import SignUp from '@components/authentication/SignUp';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }: any) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },  
})

export default function SignUpPage() {
    return <SignUp />;
}
  