import { Flex, HStack, Link } from '@chakra-ui/react'
import React from 'react'

const Headers = () => {
  return (
    <Flex justifyContent={'space-between'}>
        <HStack>
        
            <Link href='/news' textDecoration={'none'} fontSize={45}>bakwas</Link>
        
        </HStack>
        <HStack justifyContent={'space-between'} padding={'10'}>
        
            <Link href='/news' textDecoration={'none'} fontSize={35}>News</Link>
            <Link href='/about' textDecoration={'none'} fontSize={35}>About</Link>
            
        
        </HStack>
    </Flex>
  )
}

export default Headers