import React from 'react'
import Navbar from '@/components/Navbar'
import styled from 'styled-components';

export const contact = () => {
  return (

    <div>
        <Navbar />
        <ParentContainer>
            <ContentContainer>
                    
                    <HeadContainer>
                        CONTACTS
                    </HeadContainer>

                    <InfoContainer>
                        <Detail>Phone: (570) 969-0331</Detail>
                        <Detail>Email: deeppatel0331@gmail.com</Detail>
                        <Detail>Address: 953 Prescott Ave, Scranton, PA 18510</Detail>
                    </InfoContainer>

            </ContentContainer>
        </ParentContainer>
    </div>
  )

}

//The conents that will be stored including header and paragraph
const ParentContainer = styled.main`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85.65vh;
    background-color: #141e30;
`
//Stores the header and relevant information
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
//Container for the information
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

//Each individual element of contact information
const Detail = styled.p`
    margin: 15px;
    font-size: 25px;
    font-family: Sans Seriff;
    color: white;
`

export default contact