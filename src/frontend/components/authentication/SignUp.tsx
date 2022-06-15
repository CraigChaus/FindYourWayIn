import { useRef, useState, useEffect, SetStateAction } from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase_config';
import AuthButton from './AuthButton';
import NavigationLink from './NavigationLink';
import { useAuth } from '../../contexts/AuthContext';
import Warning from '../../public/icons/warning.svg';
import Router from 'next/router';

/**
 * Authentication form for sign up
 * @returns Sign up form
 */
export default function SignUp() {
    // States for sign-up credentials
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, signup } = useAuth();

    // const history = useHistory()

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (registerPassword !== registerPasswordConfirm) {
            return setError('Passwords do not match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(registerEmail, registerPassword)
                .then(() => {
                    // Router.push('/home');
                    //  console.log(user)
                })
                .catch((error: { message: SetStateAction<string> }) => {
                    setError(error.message);
                    setLoading(false);
                });
            // history.push("/")
        } catch (error: any) {
            console.log(error.message);
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    // const register = async () => {
    //     try {
    //         // Takes in auth from firebase object and credentials
    //         const user = await createUserWithEmailAndPassword(
    //             auth,
    //             registerEmail,
    //             registerPassword,
    //         );
    //         console.log(user);

    //         // Check if user exists
    //         if (user) {
    //             // Add a new document in collection "users"
    //             await setDoc(doc(db, 'users', user.user.uid), {
    //                 favorite_locations: [''],
    //             });
    //             console.log('New user added to database.');
    //             // Route user to home page after signup
    //             Router.push('/home');
    //         } else {
    //             console.log('Could not sign up!');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setSignupFail(true);
    //     }
    // };
    return (
        <AuthLayout isSignUp={true}>
            <HeaderAuthForm formName="Sign up" />
            <div className="flex flex-col items-center w-5/6">
                {error && (
                    // TODO: This is temporary display. Refactor make it look better.
                    <div
                        className="w-full px-4 py-2 mt-4 mb-4 text-red-900 bg-red-100 border-l-4 border-red-500 shadow-md"
                        role="alert"
                    >
                        <div className="flex items-center">
                            <div className="py-1">
                                <Warning className="w-6 h-6 mr-4 text-red-500 fill-current" />
                            </div>
                            <div>
                                <p className="text-sm">{error}</p>
                            </div>
                        </div>
                    </div>
                )}
                <Input
                    placeholder="Email"
                    type="email"
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setError('');
                        setRegisterEmail(event.currentTarget.value);
                    }}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setError('');
                        setRegisterPassword(event.currentTarget.value);
                    }}
                />
                <Input
                    placeholder="Confirm password"
                    type="password"
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setError('');
                        setRegisterPasswordConfirm(event.currentTarget.value);
                    }}
                />
            </div>
            <AuthButton
                disabled={loading}
                action={handleSubmit}
                text="Sign up"
            />
            <NavigationLink link="login" />
        </AuthLayout>
    );
}
