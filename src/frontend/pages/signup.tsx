import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from 'firebase_config';


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
        <div>
        <h1>TBD......</h1>
         {/* <input type="text" name="name" className='border-blue-600 border-b-2' id='nameform'/> */}
         <h3>Sign Up!</h3>
         <input placeholder='Enter Your Email' onChange={(event)=>{
             setRegisterEmail(event.target.value)}}>    
         </input>

         <input placeholder='Enter Your Password' onChange={(event)=>{
             setRegisterPassword(event.target.value)}}>
         </input>
         <button onClick={register}>Create User</button>
         </div>
    )
    
}