import { VStack, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = (id, img, symbol, name, currencySymbol = "₹") => {
    return (
        <Link to={`/coin/${id}`}>
            <VStack>
                <Image
                    src={img}
                />
                <Heading>{symbol}</Heading>
                <Text>{name}</Text>
                <Text>{price ? `${currencySymbol}${price}` : "NA"}</Text>
            </VStack>
        </Link>
    )
}

export default CoinCard