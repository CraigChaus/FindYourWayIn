import React from 'react';
import { useAuth } from 'contexts/AuthContext';
import ProfilePage from '../components/authentication/ProfilePage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

const Profile = (props: any) => {
    const { user } = useAuth();

    return (
        <div>
            {user ? (
                <>
                    <Head>
                        <title>Profile</title>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <ProfilePage user={user} />
                </>
            ) : (
                <>
                    <div>
                        <h1>You are not logged in</h1>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
