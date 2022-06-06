import React from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import AuthButton from './AuthButton';
import ArrowBack from '../../public/icons/arrow-back.svg';
import Link from 'next/link';
import { useAuth } from 'contexts/AuthContext';
import Verify from '../../public/icons/verify.svg';

const ResetPassword = (): JSX.Element => {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const { reset } = useAuth();

    const handleReset = async (e: any) => {
        e.preventDefault();
        try {
            await reset(email);
            setMessage('Password reset link has been sent to your email!');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <AuthLayout>
                <HeaderAuthForm formName="Reset password" />

                <div className="flex flex-col items-center w-5/6">
                    {message && (
                        <div
                            className="w-full px-4 py-2 mt-4 mb-8 text-green-900 bg-green-100 border-l-4 border-green-500 shadow-md"
                            role="alert"
                        >
                            <div className="flex items-center">
                                <div className="py-1">
                                    <Verify className="w-6 h-6 mr-4 text-green-500 fill-current" />
                                </div>
                                <div>
                                    <p className="text-sm text-left">
                                        {message}
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
                            setEmail(event.currentTarget.value);
                        }}
                    />
                </div>
                <AuthButton action={handleReset} text="Reset password" />

                <Link href="/auth/login">
                    <a className="flex items-center text-sm text-green-800 hover:text-green-600">
                        <ArrowBack className="w-6 h-6 mr-2 text-green-800 fill-current" />
                        Back to login
                    </a>
                </Link>
            </AuthLayout>
        </>
    );
};

export default ResetPassword;
