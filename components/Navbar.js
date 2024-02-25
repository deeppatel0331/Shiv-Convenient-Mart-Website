import React from 'react'
import styled from 'styled-components'
import { useRouter } from "next/router";

//gives the buttons the functionality to go to the corresponding page when clicked
export const Navbar = () => {

    const router = useRouter();

    function goToHome(){
        router.push("/");
    }

    function goToHoursPage(){
        router.push("/hours")
    }

    function goToContactPage(){
        router.push("/contact")
    }

    function goToProductsPage(){
        router.push("/products")
    }

    //layout of the navigation bar
    return (
    <Container>

        <LogoBox>
            Shiv Convenient Mart
        </LogoBox>
        
        <NavigationButtonHolder>

            <NavigationElement onClick={goToHome}>
                Home
            </NavigationElement>
            
            <NavigationElement onClick={goToHoursPage}>
                Hours
            </NavigationElement>

            <NavigationElement onClick={goToContactPage}>
                Contact
            </NavigationElement>

            <NavigationElement onClick={goToProductsPage}>
                Products
            </NavigationElement>

        </NavigationButtonHolder>

    </Container>
    )
}

//holds the navigation bar background-image: linear-gradient(to bottom, #141e30, #243b55);
const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-director: row;
    justify-content: space-between;
    padding-left: 5vw;
    padding-right: 6vw;
    padding-top: 2vw;
    background-color: #141e30;
`
//essentially the title of the logo box/website
const LogoBox = styled.div`
    font-size: 5vw;
    font-weight: bold;
    font-family: Sans Seriff;
    background: linear-gradient(45deg, #ff8a00, #e52e71);
    -webkit-background-clip: text;
    color: transparent;
`

//the background of the buttons
const NavigationButtonHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23vw;
    gap: 1vw
`

//the buttons themselves
const NavigationElement = styled.button`
    padding: 0.75vw;
    background: linear-gradient(45deg, #ff8a00, #e52e71);
    color: black;
    border-radius: 0.5vw;
    border: none;
    cursor: pointer;

    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.25);
        background: linear-gradient(45deg, #ff8a00, #e52e71);
        color: black;
    }
`

export default Navbar;