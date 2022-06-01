import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from 'firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import AuthButton from './Button';
import NavigationLink from './NavigationLink';

export default function SignUp() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            // Takes in auth from firebase object and login credentials
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(`${user} has logged in!`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <AuthLayout>
                <HeaderAuthForm formName="Login"/>
                <div className='flex flex-col items-center w-5/6'>                
                    <Input 
                        placeholder="Email" 
                        type="email" 
                        isRequired={true} 
                        onChange={(event: React.FormEvent<HTMLInputElement> ) => { setLoginEmail(event.currentTarget.value) }}
                    />
                    <Input 
                        placeholder="Password" 
                        type="password" 
                        isRequired={true}
                        onChange={(event: React.FormEvent<HTMLInputElement>) => { setLoginPassword(event.currentTarget.value) }}
                    />
                </div>
                <AuthButton 
                    action={login}
                    text="Login"
                />
                <NavigationLink 
                    link="signup"
                />
            </AuthLayout>
        </>
    )

}