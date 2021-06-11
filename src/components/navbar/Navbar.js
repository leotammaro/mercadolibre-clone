import { Image, Input, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from 'react';
import Search from "../../assets/search.svg";
import Menu from "../../assets/menu.svg";
import Shop from "../../assets/shop.svg";
import Map from "../../assets/map.svg";
import SwipeRigth from "../../assets/chevron.svg";

function Navbar() {
    return (
        <Stack bg="brand.navbar" h={{base:"87px",xl:"100px"}} w="100%" justifyContent="center" divider={<StackDivider borderColor="#736c28" opacity="0.3"></StackDivider>}>
           <Stack direction="row"  justifyContent="space-around" alignItems="center" spacing={0}>
               <Image h="90%" w="45px"src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__small.png" />
               <Stack direction="row" flex={{base:"0.8"}} bg="white" spacing={0}>
                   <Image h="18px" src={Search}  position="relative"  top="6px" margin="0px 6px"></Image>
                   <Input h="30px" w="100%" padding={0}  border="none" borderRadius="0" placeholder="Buscar productos, marcas y mas" textAlign="start"></Input>
               </Stack>
                   <Image src={Menu} h="20px" h="30px" opacity="0.4"/>
                   <Image src={Shop} h="30px" w="25px" opacity="0.6"/>
           </Stack>
           <Stack direction="row" fontSize="13px" alignItems="center" justifyContent="space-between" mb="8px" color= "#736c28">
               <Stack direction="row" alignItems="center" margin="0px 5px">
                    <Image src={Map} h="17px" />
                    <Text>Enviar a Leonel TAMMARO</Text>
                    <Text>- ISLA TRINIDAD 390</Text>
               </Stack>
               <Image src={SwipeRigth} h="17px" opacity="0.4" paddingRight="5px"/>
           </Stack>
        </Stack>
    )
}

export default Navbar 
