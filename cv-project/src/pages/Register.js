import React from 'react'
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../firebase-config';



function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
    };


  return (
    <>
        

        <div>
            <h3> Register User </h3>
            <input
            placeholder="Email..."
            onChange={(event) => {
                setRegisterEmail(event.target.value);
            }}
            />
            <input
            placeholder="Password..."
            type='password'
            onChange={(event) => {
                setRegisterPassword(event.target.value);
            }}
            />

            <button onClick={register}> Create User</button>
        </div>

        <h4>Already have an account?</h4>
        <a href="/login">Sign in</a>
    </>
  )
}

export default Register