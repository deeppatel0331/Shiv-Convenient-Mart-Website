import React, { useRef } from 'react'
import styled from 'styled-components'
import { auth } from '@/library/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

const AdminLogin = () => {
    const emailRef = useRef()
    const passRef = useRef()

    async function loginFunction(){
        const email = emailRef.current.value
        const password = passRef.current.value
        console.log(email)
        console.log(password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>  {
                const user = userCredential.user;
                console.log(`User ${user.email} logged in successfully`);
            })
            .catch((error) => {
                console.log(error.message)
        })
    }

  return (
    <div>
        adminLogin
        <input 
        type='email'
        ref={emailRef}
        />
        <input 
        type='password'
        ref={passRef}
        />
        <button onClick={loginFunction}>Login</button>
    </div>
  )
}

export default AdminLogin