import { Heading, Text,Box,Icon,Flex,Button,HStack} from '@chakra-ui/react'
import React from 'react'
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import icon3 from './icon3'

export default function Features() {
  return (
    <Box maxW={"900px"} m="auto" mt="25px" px="45px">
      <Flex direction={{base:"column",md:"column",lg:"row"}}>
        <HStack mb="15px">
          <Icon as={Icon1} />
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack mb="15px">
          <Icon as={Icon2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack>
          <Icon as={icon3} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  )
}
