import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import AboutComp from '../components/contactPageComponent/AboutComp';

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

const About = () => {
    return <AboutComp />;
};

export default About;
