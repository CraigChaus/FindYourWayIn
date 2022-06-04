import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase_config';
import { db } from 'firebase_config';
import { doc, setDoc } from 'firebase/firestore';
import AuthButton from './Button';
import NavigationLink from './NavigationLink';
import Router from 'next/router';

/**
 * Authentication form for sign up
 * @returns Sign up form
 */
export default function SignUp() {
    // States for sign-up credentials
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [signupFail, setSignupFail] = useState(false);

    const register = async () => {
        try {
            // Takes in auth from firebase object and credentials
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword,
            );
            console.log(user);

            // Check if user exists
            if (user) {
                // Add a new document in collection "users"
                await setDoc(doc(db, 'users', user.user.uid), {
                    favorite_locations: [''],
                });
                console.log('New user added to database.');
                // Route user to home page after signup
                Router.push('/home');
            } else {
                console.log('Could not sign up!');
            }
        } catch (error) {
            console.log(error);
            setSignupFail(true);
        }
    };
    return (
        <AuthLayout>
            <HeaderAuthForm formName="Sign up" />
            {signupFail && (
                // TODO: This is temporary display. Refactor make it look better.
                <h4>Sign up failed</h4>
                // <div className="px-4 py-3 text-teal-900 bg-teal-100 border-t-4 border-teal-500 rounded-b shadow-md" role="alert">
                // <div className="flex">
                //     <div className="py-1"><svg className="w-6 h-6 mr-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                //     <div>
                //     <p className="font-bold">Our privacy policy has changed</p>
                //     <p className="text-sm">Make sure you know how these changes affect you.</p>
                //     </div>
                // </div>
                // </div>            
            )}
            <div className="flex flex-col items-center w-5/6">
                <Input
                    placeholder="Email"
                    type="email"
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setRegisterEmail(event.currentTarget.value);
                    }}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setRegisterPassword(event.currentTarget.value);
                    }}
                />
            </div>
            <AuthButton action={register} text="Sign up" />
            <NavigationLink link="login" />
        </AuthLayout>
    );
}
