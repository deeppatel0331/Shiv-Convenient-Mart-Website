import React from 'react'
import Navbar from '@/components/Navbar'
import styled from 'styled-components';
import Image from "next/image";

export const products = () => {
  return (
    <div>
        <Navbar />

        <ParentContainer>
          
          <HeadContainer>Some of our fresh vegetables:</HeadContainer>

          <VegetableContainer>

            <Vegetable>Fresh Cilantro</Vegetable>
            <ImageWrapper>
              <Image 
                src = "/cilantro.jpeg"
                alt="Picture of the store"
                fill={true}
                />
            </ImageWrapper>

            <Vegetable>Okras</Vegetable>
            <ImageWrapper>
              <Image 
                  src = "/okra.jpeg"
                  alt="Picture of the store"
                  fill={true}
                  />
            </ImageWrapper>

            <Vegetable>Tomatos</Vegetable>
            <ImageWrapper>
              <Image 
                  src = "/tomato.jpeg"
                  alt="Picture of the store"
                  fill={true}
                  />
            </ImageWrapper>

            <Vegetable>Cucumbers</Vegetable>
            <ImageWrapper>
              <Image 
                  src = "/cucumbers.jpeg"
                  alt="Picture of the store"
                  fill={true}
                  />
            </ImageWrapper>

            <Vegetable>Spinach</Vegetable>
            <ImageWrapper>
              <Image 
                  src = "/Spinach.jpeg"
                  alt="Picture of the store"
                  fill={true}
                  />
            </ImageWrapper>

          </VegetableContainer>

          <HeadContainer>Some of our frozen goods</HeadContainer>

        </ParentContainer>
        
    </div>
  )
}

const ParentContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: #141e30;
`
const HeadContainer = styled.h1`
    display: flex;
    font-size: 30px;
    font-family: Sans Seriff;
    text-decoration: underline;
    color: white;
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
`

const ImageWrapper = styled.div`
  width: 40%;
  height: 80%;
  position: relative;
  object-fit: contain;
  padding-left: 10px;
`

const VegetableContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1px;
  padding: 3px;
  height: 100vh;
  padding-left: 10px;
  background-color: #141e30;
`

const Vegetable = styled.p`
  margin: 15px;
  font-size: 25px;
  font-family: Sans Seriff;
  color: white;
`

const FrozenContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1px;
  padding: 3px;
  height: 100vh;
  padding-left: 10px;
  background-color: #141e30;
`

const Frozen = styled.p`
  margin: 15px;
  font-size: 25px;
  font-family: Sans Seriff;
  color: white;
`

const SnackContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1px;
  padding: 3px;
  height: 100vh;
  padding-left: 10px;
  background-color: #141e30;
`

const Snack = styled.p`
  margin: 15px;
  font-size: 25px;
  font-family: Sans Seriff;
  color: white;
`

const OtherContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1px;
  padding: 3px;
  height: 100vh;
  padding-left: 10px;
  background-color: #141e30;
`

const Other = styled.p`
  margin: 15px;
  font-size: 25px;
  font-family: Sans Seriff;
  color: white;
`

export default products