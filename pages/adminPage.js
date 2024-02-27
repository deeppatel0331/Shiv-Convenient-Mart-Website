import { useRef, useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
import { database } from '@/library/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

/*
* This page is for the owners of the store to be able to update the hours of the store as needed.
*/

const adminPage = () => {

    const DayRef = useRef();
    const TimeRef = useRef();

    const docRef = doc(database, "hours", "hoursDocument");
    const Enter = () => {
        const day = DayRef.current.value;
        const time = TimeRef.current.value;
        getDoc(docRef)
            .then((docSnap) => {
                let content = docSnap.data();
                if(day == "monday"){
                    content.monday = time;
                }

                else if(day == "tuesday"){
                    content.tuesday = time;
                }

                else if(day == "wednesday"){
                    content.wednesday = time;
                }

                else if(day == "thursday"){
                    content.thursday = time;
                }

                else if(day == "friday"){
                    content.friday = time;
                }

                else if(day == "saturday"){
                    content.saturday = time;
                }

                else if(day == "sunday"){
                    content.sunday = time;
                }
                
                setDoc(docRef, content)
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            })
            
            .catch((error) => {
                console.error("Error getting document: ", error);
            });
        }

    return (
        <Wrapper>
            <Container>
            <Title>Update Hours</Title>

            <InputLabel>Day of the week:</InputLabel>
            <TimeInput ref={DayRef} placeholder='Enter day in lowercase' />

            <InputLabel>Time:</InputLabel>
            <TimeInput ref={TimeRef} placeholder='Enter time as #:##am - #:##pm' />

            <Spacer />

            <UpdateButton onClick={Enter}>Update</UpdateButton>
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

//holds the title, input boxes, and button
const Container = styled.main`
    width: 400px;
    padding: 20px;
    background-color: #1a263b;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
`;

// title styling
const Title = styled.h1`
    font-size: 30px;
    font-family: 'Sans-Serif';
    color: white;
    text-align: center;
    margin-bottom: 20px;
`;

// label stylings
const InputLabel = styled.p`
    margin: 10px 0 5px 0;
    font-size: 18px;
    font-family: 'Sans-Serif';
    color: white;
`;

// input boxes
const TimeInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
`;

// styling for the update button
const UpdateButton = styled.button`
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

// empty div for spacing
const Spacer = styled.div`
    height: 20px;
`;

export default adminPage