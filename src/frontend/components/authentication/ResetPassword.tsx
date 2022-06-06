import React from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import AuthButton from './AuthButton';
import NavigationLink from './NavigationLink';
import ResetPasswordLink from './ResetPasswordLink';
import Warning from '../../public/icons/warning.svg';
import Verify from '../../public/icons/verify.svg';

const ResetPassword = (): JSX.Element => {
    const [email, setEmail] = React.useState('');

    const reset = () => {
        console.log(email);
    }   
    return (
        <>
            <AuthLayout>
                <HeaderAuthForm formName="Reset password" />
                <div className="flex flex-col items-center w-5/6">
                    
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
                <AuthButton action={reset} text="Reset password" />
                <ResetPasswordLink />

                <NavigationLink link="signup" />
            </AuthLayout>
        </>
    )
}

export default ResetPassword;