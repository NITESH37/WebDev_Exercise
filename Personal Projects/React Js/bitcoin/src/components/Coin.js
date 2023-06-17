import React, { useEffect, useState } from 'react'
import { Server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import CoinCard from './CoinCard';
import axios from 'axios';

const Coin = () => {

    const [currency, setCurrency] = useState("inr");
    const [coin, setCoin] = useState([])
    const [error, setError] = useState(false)

    const currencySymbol = currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

    useEffect(() => {
        const fetchCoins = async() = {


        }
        fetchCoins()
    }, [currency])

    if (error) return "Errors"

    return (
        <Container>
            <HStack>
                {
                    coin.map((i) => (
                        <CoinCard
                            id={i.id}
                            key={i.id}
                            name={i.name}
                            price={i.current_price}
                            img={i.image}
                            symbol={i.symbol}
                            currencySymbol={currencySymbol}
                        />

                    ))
                }
            </HStack>
        </Container>
    )
}

export default Coin