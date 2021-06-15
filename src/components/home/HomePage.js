import { Stack } from '@chakra-ui/react'
import React from 'react'
import Home from './Home'
import ImagesHome from './ImagesHome'


function home() {
    return (
        <Stack bg="#ebebeb" alignItems="center" w="100%">
            <ImagesHome/>
            <Home />
        </Stack>
    )
}

export default home
