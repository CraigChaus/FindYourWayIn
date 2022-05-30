import React from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from 'firebase_config';

export default function Login() {
    // States for login credentials
    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");

     const login = async () => {
     try {
         // Takes in auth from firebase object and login credentials
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(`${user} has logged in!`)
     } catch (error) {
         console.log(error)
     }
    }


    return (
         <div>
        <h1>TBD......</h1>
         {/* <input type="text" name="name" className='border-blue-600 border-b-2' id='nameform'/> */}
         <h3>Login</h3>
         <input placeholder='Enter Your Email'  onChange={(event)=>{
             setLoginEmail(event.target.value)}}>    
         </input>

         <input placeholder='Enter Your Password' onChange={(event)=>{
             setLoginPassword(event.target.value)}}>
         </input>
         <button onClick={login}>Login</button>
         </div>
    )
    
}