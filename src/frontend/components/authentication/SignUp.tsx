import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import HeaderAuthForm from './HeaderAuthForm';
import Input from './Input';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from 'firebase_config';
import { db } from 'firebase_config';
import { doc, setDoc } from "firebase/firestore"; 
import AuthButton from './Button';
import NavigationLink from './NavigationLink';
import Router from 'next/router';


export default function SignUp() {
    // States for sign-up credentials
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    
    const register = async () => {
        try {
            // Takes in auth from firebase object and credentials
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
            // Add a new document in collection "users"
            await setDoc(doc(db, "users", user.user.uid), {
                  favorite_locations: [""],
            });

            console.log("New user added to database.")
            Router.push("/home")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AuthLayout>
            <HeaderAuthForm formName="Sign up"/>
            <div className='flex flex-col items-center w-5/6'>                
                <Input 
                    placeholder="Email" 
                    type="email" 
                    isRequired={true} 
                    onChange={(event: React.FormEvent<HTMLInputElement>) => { setRegisterEmail(event.currentTarget.value) }}
                />
                <Input 
                    placeholder="Password" 
                    type="password" 
                    isRequired={true}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => { setRegisterPassword(event.currentTarget.value) }}
                />
            </div>
            <AuthButton 
                action={register}
                text="Sign up"
            />
            <NavigationLink 
                link="login"
            />
        </AuthLayout>
    )

}