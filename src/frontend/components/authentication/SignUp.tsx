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
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

/**
 * Authentication form for sign up
 * @returns Sign up form
 */
export default function SignUp() {
    // States for sign-up credentials
    const { t } = useTranslation('common');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();

    // const history = useHistory()

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (registerPassword !== registerPasswordConfirm) {
            return setError(t('passwordNotMatch'));
        }
        try {
            setError('');
            setLoading(true);
            await signup(registerEmail, registerPassword)
                .then(() => {
                    Router.push('/home');
                })
                .catch((error: { message: SetStateAction<string> }) => {
                    setError(error.message);
                    setLoading(false);
                });
            // history.push("/")
        } catch (error: any) {
            console.log(error.message);
            setError(t('errorSignup'));
        }

        setLoading(false);
    }

    console.log(t('signup'));

    return (
        <AuthLayout isSignUp={true}>
            <HeaderAuthForm formName={`${t('signup')}`} />
            <div className="flex flex-col items-center w-5/6">
                {error && (
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
                    placeholder={t('email')}
                    type="email"
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setError('');
                        setRegisterEmail(event.currentTarget.value);
                    }}
                />
                <Input
                    placeholder={t('password')}
                    type="password"
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setError('');
                        setRegisterPassword(event.currentTarget.value);
                    }}
                />
                <Input
                    placeholder={t('confirmPassword')}
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
