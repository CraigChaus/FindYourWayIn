import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import AuthButton from './AuthButton';
import NavigationLink from './NavigationLink';
import ResetPasswordLink from './ResetPasswordLink';
import { useRouter } from 'next/router';
import Warning from '../../public/icons/warning.svg';
import Verify from '../../public/icons/verify.svg';
import { useAuth } from 'contexts/AuthContext';
import { useTranslation } from 'react-i18next';

/** Authentication form for sign in
 * @returns Sign in form
 */
export default function Login() {
    const { t } = useTranslation();
    const [error, setError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const router = useRouter();
    const { user, login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // handle login action on button clicked
    const handleLogin = async (e: any) => {
        e.preventDefault();
        console.log(user);
        try {
            await login(email, password).then(() => {
                setLoginSuccess(true);
                router.push('/home');
            });
        } catch (error: any) {
            setError(error.message);
        }
    };

    /**
     * @returns Sign in form layout
     */
    return (
        <>
            <AuthLayout isSignUp={false}>
                <HeaderAuthForm formName={`${t('login')}`} />
                <div className="flex flex-col items-center w-5/6">
                    {error && (
                        <div
                            data-testid="login-error"
                            className="w-full px-4 py-2 mt-4 mb-8 text-red-900 bg-red-100 border-l-4 border-red-500 shadow-md"
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

                    {loginSuccess && (
                        <div
                            className="w-full px-4 py-2 mt-4 mb-8 text-green-900 bg-green-100 border-l-4 border-green-500 shadow-md"
                            role="alert"
                            data-testid="login-success"
                        >
                            <div className="flex items-center">
                                <div className="py-1">
                                    <Verify className="w-6 h-6 mr-4 text-green-500 fill-current" />
                                </div>
                                <div>
                                    <p className="text-sm text-center">
                                        {t('loginSuccess')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <Input
                        name="auth-email"
                        placeholder={t('email')}
                        type="email"
                        isRequired={true}
                        onChange={(
                            event: React.FormEvent<HTMLInputElement>,
                        ) => {
                            setEmail(event.currentTarget.value);
                            setError('');
                        }}
                    />
                    <Input
                        name="auth-password"
                        placeholder={t('password')}
                        type="password"
                        isRequired={true}
                        onChange={(
                            event: React.FormEvent<HTMLInputElement>,
                        ) => {
                            setPassword(event.currentTarget.value);
                            setError('');
                        }}
                    />
                </div>
                <AuthButton action={handleLogin} text={t('login')} />
                <ResetPasswordLink />

                <NavigationLink link="signup" />
            </AuthLayout>
        </>
    );
}
