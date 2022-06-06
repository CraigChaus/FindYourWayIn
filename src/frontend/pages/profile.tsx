import React from 'react';
import { useAuth } from 'contexts/AuthContext';
const Profile = (props: any) => {
    const { user } = useAuth();
    return (
        user && (<h1>{user.uid}</h1>)
    )
};

export default Profile;
