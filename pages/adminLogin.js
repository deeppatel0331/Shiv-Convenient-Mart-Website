import React, { useRef } from 'react'
import styled from 'styled-components'
import { auth } from '@/library/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { database } from '@/library/firebaseConfig'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { useRouter } from "next/router";

/*
* This page is for the owners of the store to be able to log in, to change the hours
*/

//JSON for my hours
const INITIAL_HOURS = {
    monday: "9:30am - 7:00pm",
    tuesday: "9:30am - 7:00pm",
    wednesday: "9:30am - 7:00pm",
    thursday: "9:30am - 7:30pm",
    friday: "9:30am - 7:30pm",
    saturday: "9:30am - 7:30pm",
    sunday: "9:30am - 7:30pm",
}

const docRef = doc(database, "hours", "hoursDocument");

//function I used to initialize the database
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

    //Only 1 valid way to successfully log in
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

    //layout of the admin log in page
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

    </div>
  )
}

//main container
const ParentContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #141e30;
`

//for the title
const HeadContainer = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 50px;
    font-family: Sans Seriff;
    color: white;
`

//for input box description
const Info = styled.p`
    margin: 5px;
    font-size: 20px;
    font-family: Sans Seriff;
    color: white;
`;

export default AdminLogin