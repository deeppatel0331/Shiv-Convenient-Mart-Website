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

// layout of the admin log in page
return (
    <Wrapper>
      <Container>
        <Title>Admin Login</Title>

        <InputLabel>Email:</InputLabel>
        <Input
          type="email"
          ref={emailRef}
          placeholder="Enter email here"
        />

        <InputLabel>Password:</InputLabel>
        <Input
          type="password"
          ref={passRef}
          placeholder="Enter password here"
        />

        <Button onClick={loginFunction}>Login</Button>
      </Container>
    </Wrapper>
  );
};

// main container
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141e30;
`;

// the box that holds the input box, title, and description
const Container = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #1a263b;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

// for the title
const Title = styled.h1`
  font-size: 30px;
  font-family: 'Sans-Serif';
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

// for input box description
const InputLabel = styled.p`
  margin: 5px;
  font-size: 18px;
  font-family: 'Sans-Serif';
  color: white;
`;

// the input box itself
const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
`;

// enter button
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #61dafb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.05);
        background: linear-gradient(45deg, #ff8a00, #e52e71);
        color: black;
    }
`;

export default AdminLogin