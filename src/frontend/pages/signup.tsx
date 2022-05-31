import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from 'firebase_config';
import Image from 'next/image';
import Link from 'next/link';
import logoWithoutText from '../public/logo_without_text.png';


export default function SignUp() {
    // States for sign-up credentials
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    
    const register = async () => {
     try {
         // Takes in auth from firebase object and credentials
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log(user)
     } catch (error) {
         console.log(error)
     }
    }


    return (
        <div className="h-screen bg-cover bg-landing-page">
             <div className="flex h-screen bg-gray-600 bg-opacity-70">
                <div className="flex flex-col items-center justify-around w-4/5 m-auto bg-gray-100 shadow-xl h-3/5 rounded-2xl">     
                    <div className="flex flex-col items-center">  
                        <Image alt="logo" width={84} height={84} src={logoWithoutText}/>                      
                        <h2 className="mt-4 text-4xl font-bold text-center text-black">Sign up</h2>
                    </div>
                    
                    <div className='flex flex-col items-center w-5/6'>    
                        <input className="w-full p-3 mb-3 bg-gray-200 rounded-xl" placeholder='Email' onChange={(event)=>{
                            setRegisterEmail(event.target.value)}}>    
                        </input>
                        
                        <input className="w-full p-3 mt-3 bg-gray-200 rounded-xl"  placeholder='Password' onChange={(event)=>{
                            setRegisterPassword(event.target.value)}}>
                        </input>
                    </div>
                    <button className="inline-block w-5/6 py-3 mb-4 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-green-600 rounded-lg shadow-md px-7 hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg" onClick={register}>Sign up</button>
            
                    <p className="mb-4 text-sm">Have an account? Login <Link href="/login"><a className="text-green-700 underline hover:text-green-600">here</a></Link></p>

                </div>
             </div>
         </div>
    )
    
}