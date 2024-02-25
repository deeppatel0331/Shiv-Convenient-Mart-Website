import { useRef } from 'react'
import React from 'react'
import styled from 'styled-components'
import { database } from '@/library/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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
    <div>

        <ParentContainer>

            <HeadContainer>Admin Page</HeadContainer>
            
            <Info>Day of the week: </Info> <TimeInput ref={DayRef}/>
            <Info>Time: </Info> <TimeInput  ref={TimeRef}/>
            <Info>...</Info>
            <Change onClick={Enter}>Update</Change> 

        </ParentContainer>

    </div>
  )
}

const ParentContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #141e30;
    padding: 2vw;
`
const HeadContainer = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    font-family: Sans Seriff;
    color: white;
`
const Info = styled.p`
    margin: 1px;
    font-size: 20px;
    font-family: Sans Seriff;
    color: white;
`;

const TimeInput = styled.input`
    width: 30%;
`

const Change = styled.button`
    width: 50px;
`

export default adminPage