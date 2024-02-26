import React, { useRef } from 'react'
import Navbar from '@/components/Navbar'
import {styled,keyframes} from 'styled-components'
import Image from "next/image";

/*
* This page displays some of the popular items sold at the store.
*/

//array for adding products more efficiently
const productsData = [
  { name: 'Flour', imageSrc: '/flour.webp' },
  { name: 'Rice', imageSrc: '/rice.webp' },
  { name: 'Lentils', imageSrc: '/lentils.webp' },
  { name: 'Mixes', imageSrc: '/mixes.webp' },
  { name: 'Snacks', imageSrc: '/snacks2.webp' },
  { name: 'Sweets', imageSrc: '/sweets.webp' },
  { name: 'Frozen Meals', imageSrc: '/frozenmeals.webp' },
  { name: 'Ice Cream', imageSrc: '/icecream.webp' },
  { name: 'Ice Cream Bars', imageSrc: '/icecreambars.webp' },
];

//controls how things are mapped
const Product = ({product}) => {
    return (
    <GeneralContainer key={product.name}>
      <General>{product.name}</General>
      <ImageWrapper>
        <Image src={product.imageSrc} alt={`Picture of ${product.name}`} fill={true} />
      </ImageWrapper>
    </GeneralContainer>
  )
}

//does the mapping of products to their corresponding name and picture (prop passing)
export const products = () => {
  return (
    <div>
      <Navbar />
      <ParentContainer>
        <ProductsContainer>
          {productsData.map((product) => (
            <Product key={product.name} product = {product} />
          ))}
        </ProductsContainer>
      </ParentContainer>
    </div>
  );
};

//animation for cool effect
const fade = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`

//body
const ParentContainer = styled.main`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #141e30;
`;

//this provides me with a container with a grid layout
const ProductsContainer = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
`;

//holds each general item
const GeneralContainer = styled.div`
  background-color: #141e30;
  padding: 10px;
  box-sizing: border-box;
`;

//the images themselves (all with the same properties)
const ImageWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  object-fit: contain;
  margin-top: 10px;
  animation: ${fade} 2s ease;
`;

//title of each image
const General = styled.p`
  margin: 10px;
  font-size: 25px;
  font-family: Sans Serif;
  color: white;
  text-decoration: underline;
`;

export default products