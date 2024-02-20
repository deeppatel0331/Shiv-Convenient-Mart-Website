import React from 'react'
import Navbar from '@/components/Navbar'
import styled from 'styled-components';
import keyframes from 'styled-components';


const hours = () => {

  return (
    <div>
        <Navbar />
        <ParentContainer>

            <ContentContainer>
            
                <HeadContainer>
                    HOURS
                </HeadContainer>
                
                <DaysContainer>
                    <Day>Monday: 9:30am - 7:00pm</Day>
                    <Day>Tuesday: 9:30am - 7:00pm</Day>
                    <Day>Wednesday: 9:30am - 7:00pm</Day>
                    <Day>Thursday: 9:30am - 7:30pm</Day>
                    <Day>Friday: 9:30am - 7:30pm</Day>
                    <Day>Saturday: 9:30am - 7:30pm</Day>
                    <Day>Sunday: 9:30am - 7:30pm</Day>
                </DaysContainer>

            </ContentContainer>

        </ParentContainer>
    </div>
  )

}

const fade = keyframes`
    from{
        opacity: 0.1;
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
`

//Container for the hours
const DaysContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

//paragraph container to display the hours
const Day = styled.p`
    margin: 15px;
    font-size: 25px;
    font-family: Sans Seriff;
    color: white;
`;


export default hours