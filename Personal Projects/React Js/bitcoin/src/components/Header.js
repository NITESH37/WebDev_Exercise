import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

const Header = () => {
    return (
        <HStack bg={'black'} color={'white'} h={'40'} align={'center'} justifyContent={'center'} fontSize={'larger'}>

            <ChakraLink as={ReactRouterLink} textDecoration={'none'} color={'white'} to="/coin">Coin</ChakraLink>
            <ChakraLink as={ReactRouterLink} textDecoration={'none'} color={'white'} to='/exchange'>Exchange</ChakraLink>

        </HStack>
    )
}

export default Header