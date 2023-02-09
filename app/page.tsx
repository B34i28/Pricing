'use client'
import { Heading, Text } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import Features from './Features'
import Header from './Header'
import Pricing from './Pricing'

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}
