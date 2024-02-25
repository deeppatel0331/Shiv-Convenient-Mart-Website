import Navbar from '@/components/Navbar'
import {styled,keyframes} from 'styled-components';
import { database } from '@/library/firebaseConfig';
import { doc, getDoc} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';


async function getInformation(){

    const docRef = doc(database, "hours", "hoursDocument");
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        const content = docSnap.data();
        return content;
    }
}

const hours = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getInformation();
            setInfo(data);
        };

        fetchData();
    }, []);

  return (
    <div>
        <Navbar />
        <ParentContainer>

            <ContentContainer>
            
                <HeadContainer>
                    HOURS
                </HeadContainer>
        
                <DaysContainer>
                    <Day>Monday: {info && info.monday}</Day>
                    <Day>Tuesday: {info && info.tuesday}</Day>
                    <Day>Wednesday: {info && info.wednesday}</Day>
                    <Day>Thursday: {info && info.thursday}</Day>
                    <Day>Friday: {info && info.friday}</Day>
                    <Day>Saturday: {info && info.saturday}</Day>
                    <Day>Sunday: {info && info.sunday}</Day>
                </DaysContainer>

            </ContentContainer>

        </ParentContainer>
    </div>
  )

}

//animation for cool effects
const fade = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`
//Entire sub-space
const ParentContainer = styled.main`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85.65vh;
    background-color: #141e30;
`

//The conents that will be stored including header and paragraph
const ContentContainer = styled.div`
    padding: 20px;
    align-items: center;
    animation: ${fade} 1.5s ease;
`

//Container for the Header
const HeadContainer = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 50px;
    font-family: Sans Seriff;
    text-decoration: underline;
    color: white;
    animation: ${fade} 0.5s ease;
`

//Container for the hours
const DaysContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fade} 1.5s ease;
`;

//paragraph container to display the hours
const Day = styled.p`
    margin: 15px;
    font-size: 25px;
    font-family: Sans Seriff;
    color: white;
    animation: ${fade} 1.5s ease;
`;


export default hours