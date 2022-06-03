import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from 'firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import AuthButton from './Button';
import NavigationLink from './NavigationLink';
import Router from 'next/router';

/** Authentication form for sign in
 * @returns Sign in form
*/
export default function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState<any>({});
    const [loginFail, setLoginFail] = useState(false);

    const login = async () => {
       


        try {
            // Takes in auth from firebase object and login credentials
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            if(user){
             onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser);
            console.log("Currently logged in user:" + auth.currentUser?.email)
            Router.push("/home")
          });
            }
        } catch (error) {
            console.log("COULD NOT SIGN IN.")
            console.log(error)
            setLoginFail(true);
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
                {loginFail &&
                // TODO: Temporary display. Refactor to look better.
                <h4>
                    FAILED LOGIN. 
                </h4>
                
                }

                <NavigationLink 
                    link="signup"
                />
            </AuthLayout>
        </>
    )

}