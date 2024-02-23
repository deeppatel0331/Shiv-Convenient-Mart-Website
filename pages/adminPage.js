import { useRef } from 'react'
import React from 'react'
import styled from 'styled-components'

const adminPage = () => {

    const MonStartRef = useRef()
    const MonEndRef = useRef()
    const TueStartRef = useRef()
    const TueEndRef = useRef()
    const WedStartRef = useRef()
    const WedEndRef = useRef()
    const ThurStartRef = useRef()
    const ThurEndRef = useRef()
    const FriStartRef = useRef()
    const FriEndRef = useRef()
    const SatStartRef = useRef()
    const SatEndRef = useRef()
    const SunStartRef = useRef()
    const SunEndRef = useRef()

  return (
    <div>

        <ParentContainer>

            <HeadContainer>Admin Page</HeadContainer>
            
            <Info>Monday Start: </Info> <TimeInput />
            <Info>Monday End: </Info> <TimeInput />
            <Info>Tuesday Start: </Info> <TimeInput />
            <Info>Tuesday End: </Info> <TimeInput />
            <Info>Wednesday Start: </Info> <TimeInput />
            <Info>Wednesday End: </Info> <TimeInput />
            <Info>Thursday Start: </Info> <TimeInput />
            <Info>Thursday End: </Info> <TimeInput />
            <Info>Friday Start: </Info> <TimeInput />
            <Info>Friday End: </Info> <TimeInput />
            <Info>Saturday Start: </Info> <TimeInput />
            <Info>Saturday End: </Info> <TimeInput />
            <Info>Sunday Start: </Info> <TimeInput />
            <Info>Saturday End: </Info> <TimeInput />
            <Info>...</Info>
            <Change>Update</Change> 

        </ParentContainer>

    </div>
  )
}

const ParentContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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