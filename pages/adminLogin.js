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
        <ParentContainer>
            <HeadContainer>Admin Login</HeadContainer>
            
            <Info>Email:</Info>
            <input 
            type='email'
            ref={emailRef}
            />

            <Info>Passoword:</Info>
            <input 
            type='password'
            ref={passRef}
            />

            <Info></Info>
            <button onClick={loginFunction}>Login</button>
        </ParentContainer>
    </div>
  )
}

const ParentContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #141e30;
`
const HeadContainer = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 50px;
    font-family: Sans Seriff;
    color: white;
`

const Info = styled.p`
    margin: 5px;
    font-size: 20px;
    font-family: Sans Seriff;
    color: white;
`;
export default AdminLogin