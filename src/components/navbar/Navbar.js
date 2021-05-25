import { Box,Text,Image, Stack } from "@chakra-ui/react"
import React from 'react'
import FormSearch from "./FormSearch"
import LeftDivNavbar from "./LeftDivNavbar"
import RigthDivNavbar from "./RigthDivNavbar"

function Navbar() {
    return (
        <Stack  backgroundColor="#fff159" borderBottom="1px" borderColor="gray.300"  spacing={0} direction="row" justifyContent="center">
            <Stack direction="column">
                <FormSearch></FormSearch>
                <LeftDivNavbar></LeftDivNavbar>
            </Stack>
            <RigthDivNavbar></RigthDivNavbar>
        </Stack>
    )
}

export default Navbar 
