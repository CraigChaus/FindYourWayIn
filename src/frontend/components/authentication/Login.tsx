import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import AuthButton from './Button';
import NavigationLink from './NavigationLink';
import Router from 'next/router';
import Warning from '../../public/icons/warning.svg';
import Verify from '../../public/icons/verify.svg';

/** Authentication form for sign in
 * @returns Sign in form
 */
export default function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState<any>({});
    const [loginFail, setLoginFail] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const login = async () => {
        try {
            // Takes in auth from firebase object and login credentials
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            );
            if (user) {
                onAuthStateChanged(auth, (currentUser) => {
                    setUser(currentUser);
                    setLoginSuccess(true);
                    console.log(
                        'Currently logged in user:' + auth.currentUser?.email,
                    );
                    Router.push('/home');
                });
            }
        } catch (error) {
            console.log('COULD NOT SIGN IN.');
            console.log(error);
            setLoginFail(true);
        }
    };
    return (
        <>
            <AuthLayout>
                <HeaderAuthForm formName="Login" />
                <div className="flex flex-col items-center w-5/6">
                    {loginFail && (
                        <div
                            className="w-full px-4 py-2 mt-4 mb-8 text-red-900 bg-red-100 border-l-4 border-red-500 shadow-md"
                            role="alert"
                        >
                            <div className="flex">
                                <div className="py-1">
                                    <Warning className="w-6 h-6 mr-4 text-red-500 fill-current" />
                                </div>
                                <div>
                                    <p className="text-sm">
                                        Your email/password is incorrect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {loginSuccess && (
                        <div
                            className="w-full px-4 py-2 mt-4 mb-8 text-green-900 bg-green-100 border-l-4 border-green-500 shadow-md"
                            role="alert"
                        >
                            <div className="flex">
                                <div className="py-1">
                                    <Verify className="w-6 h-6 mr-4 text-green-500 fill-current" />
                                </div>
                                <div>
                                    <p className="text-sm">
                                        Login successfully!
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <Input
                        placeholder="Email"
                        type="email"
                        isRequired={true}
                        onChange={(
                            event: React.FormEvent<HTMLInputElement>,
                        ) => {
                            setLoginEmail(event.currentTarget.value);
                            setLoginFail(false);
                        }}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        isRequired={true}
                        onChange={(
                            event: React.FormEvent<HTMLInputElement>,
                        ) => {
                            setLoginPassword(event.currentTarget.value);
                            setLoginFail(false);
                        }}
                    />
                </div>
                <AuthButton action={login} text="Login" />

                <NavigationLink link="signup" />
            </AuthLayout>
        </>
    );
}
