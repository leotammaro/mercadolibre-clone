import {Stack, StackDivider,} from "@chakra-ui/react";
import React from 'react';
import NavbarFullScreen from "./NavbarFullScreen";
import NavbarMedia from "./NavbarMedia";

function Navbar() {
    return (
        <Stack bg="brand.navbar" h={{base:"87px",xl:"100px"}} alignItems="center">
           <NavbarMedia/>
           <NavbarFullScreen/>
        </Stack>
    )
}

export default Navbar 
