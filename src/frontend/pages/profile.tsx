import React from 'react';
import { useAuth } from 'contexts/AuthContext';
import ProfilePage from '../components/authentication/ProfilePage';

const Profile = (props: any) => {
    const { user } = useAuth();

    return <ProfilePage user={user} />;
};

export default Profile;
