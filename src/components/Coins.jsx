import { Container, Text ,Button,Heading, HStack, Image, VStack, RadioGroup, Radio } from '@chakra-ui/react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {server} from '../index'
import Loader from './Loader'
import Error from './Error';


const Coins = () => {

  const [coins,setCoins]= useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency,setCurrency] = useState("inr");

  const currencySymbol = currency==="inr" ? "₹" : "$";
  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1);

  useEffect(()=>{

    const fetchCoins = async () => {
      try{
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data);
        setLoading(false);
      }catch(error){
        setError(true);
        setLoading(false);
      }

    };
    
    fetchCoins();

  },[currency,page]);


  if(error){
    return <Error message={"error while fetching coins"}/>
  }


  return (
    <Container
      maxW={"container.xl"}
    >
      {loading ? <Loader /> : <>

        <RadioGroup value={currency} onChange={setCurrency} p={"4"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
          </HStack>
        </RadioGroup>

        <HStack 
          wrap={"wrap"}
          justifyContent={"space-evenly"}
        >
          {
            coins.map((i) =>{
             return(
              <CoinCard 
              key = {i.id}
              id = {i.id}
              name = {i.name}
              price = {i.current_price}
              img = {i.image}
              symbol = {i.symbol}
              currencySymbol = {currencySymbol}
             />
             )
            })
          }
        </HStack>

        <HStack
          w="full"
          overflow={"auto"}
          p={"8"}
        >
         {
           btns.map((item,index)=>{
             return (
                <Button
                key={index}
                // colorScheme={"blackAlpha.900"}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={()=>changePage(index+1)}
                >
                  {index+1}
                </Button>
             )})
         }
        </HStack>
      </>}
    </Container>
  )
}

const CoinCard = ({id,name,img,symbol,price,currencySymbol = "₹"})=>{
  return(
    <Link to={`/coins/${id}`}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover":{
            transform: "scale(1.1)",
          }
        }}
      >
          <Image 
            src={img}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
            alt={"coin"}
          />
          <Heading
            size={"md"}
            noOfLines={1}
          >
            {symbol}
          </Heading>
          <Text noOfLines={1}>
            {name}
          </Text>
          <Text noOfLines={1}>
            { price ? `${currencySymbol}${price}`: "NA"}
          </Text>
      </VStack>
    </Link>
  )
}

export default Coins
