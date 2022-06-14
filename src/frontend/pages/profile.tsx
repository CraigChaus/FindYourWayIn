import React from 'react';
import { useAuth } from 'contexts/AuthContext';
import ProfilePage from '../components/authentication/ProfilePage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }: any) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },  
})

const Profile = (props: any) => {
    const { user } = useAuth();

    return <ProfilePage user={user} />;
};

export default Profile;
