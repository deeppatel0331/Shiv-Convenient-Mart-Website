import React, { useRef } from 'react'
import styled from 'styled-components'
import { auth } from '@/library/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { database } from '@/library/firebaseConfig'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { useRouter } from "next/router";

//JSON for my hours
const INITIAL_HOURS = {
    mondayStart: '9:30am',
    mondayEnd: '7:00pm',
    tuesdayStart: '9:30am',
    tuesdayEnd: '7:00pm',
    wednesdayStart: '9:30am',
    wednesdayEnd: '7:00pm',
    thursdayStart: '9:30am',
    thursdayEnd: '7:30pm',
    fridayStart: '9:30am',
    saturdayStart: '9:30am',
    saturdayEnd: '7:30pm',
    sundayStart: '9:30am',
    sundayEnd: '7:30pm'
}
const docRef = doc(database, "hours", "hoursDocument");

async function getHours() {
    setDoc(docRef, INITIAL_HOURS)
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

const AdminLogin = () => {

    const router = useRouter();

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
                router.push("/adminPage");
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
            placeholder='enter email here'
            />

            <Info>Password:</Info>
            <input 
            type='password'
            ref={passRef}
            placeholder='enter password here'
            />

            <Info></Info>
            <button onClick={loginFunction}>Login</button>

        </ParentContainer>

        <button onClick={getHours}>Update</button>

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