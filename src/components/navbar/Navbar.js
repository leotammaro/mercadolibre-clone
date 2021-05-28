import {Box, Button, FormControl, Image, Input, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from 'react';
import Search from "../../assets/search.svg";
import Menu from "../../assets/menu.svg";
import Shop from "../../assets/shop.svg";
import Map from "../../assets/map.svg";
import SwipeRigth from "../../assets/chevron.svg";

function Navbar() {
    return (
        <Stack bg="brand.navbar" h={{base:"87px",xl:"100px"}} w="100%" justifyContent="center" divider={<StackDivider borderColor="#736c28" opacity="0.3"></StackDivider>}>
           <Stack direction="row"  justifyContent="space-around" alignItems="center" >
               <Image h="90%" w="45px"src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__small.png" />
               <Stack direction="row" position="relative">
                   <Input h="32px" bg="white" border="none" borderRadius="0" placeholder="Buscar productos " paddingLeft="40px"></Input>
                   <Image h="18px" src={Search} position="absolute" top="8px"></Image>
               </Stack>
                   <Image src={Menu} h="20px" h="30px" opacity="0.6"/>
                   <Image src={Shop} h="30px" w="25px" opacity="0.7"/>
           </Stack>
           <Stack direction="row" fontSize="13px" alignItems="center" justifyContent="space-around" mb="8px" color= "#736c28">
               <Stack direction="row" alignItems="center">
                <Image src={Map} h="17px"/>
                <Text>Enviar a Leonel TAMMARO</Text>
                <Text>- ISLA TRINIDAD 390</Text>
               </Stack>
               <Image src={SwipeRigth} h="17px" opacity="0.6"/>
           </Stack>
        </Stack>
    )
}

export default Navbar 
