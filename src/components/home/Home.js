import { Stack } from '@chakra-ui/react'
import React from 'react'
import PaymentMethods from './PaymentMethods'
import Section from './Section'

const sections =["Computación","Ofertas"]

function Home() {
    return (
        <Stack  maxW="1200px" alignItems="center">
            <PaymentMethods />
            {sections.map(section=><Section section={section} />)}
        </Stack>
    )
}

export default Home
