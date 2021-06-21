import { Image } from '@chakra-ui/image'
import { Button } from "@chakra-ui/react"
import { Input } from '@chakra-ui/input'
import { Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Map from "../../assets/map.svg"
import Search from "../../assets/search.svg"
import User from "../../assets/user.svg"
import DownSearch from "../../assets/chevrondown.svg"
import Notification from "../../assets/notification.svg"
import Shop from "../../assets/shop.svg"
import "./styleCssFullScreen.css"
import {Link} from "react-router-dom"
import ButtonNavbar from '../buttons/ButtonNavbar'

function NavbarFullScreen() {
    return (
        <Stack direction="row" display={{base:"none",xl:"flex"}} h="100px"   justifyContent="center" w="90%">
            <Stack  minW="250px" alignItems="center" padding="0px 30px 0px 30px">
                <Link to="/">
                 <Image h="30px" w="130px" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__large_plus@2x.png" />
                </Link>
                <Stack  direction="row" alignItems="center" h="40px">
                    <Image src={Map} h="30px" opacity="0.7"/>
                    <Stack direction="column" spacing={0} fontSize="12px">
                        <Text className="text">Enviar a LEONEL</Text>
                        <Text>ISLA TRINIDAD 390</Text>
                    </Stack>
                </Stack>
            </Stack>  
            <Stack direction="column"  alignItems="flex-start" w="100%" maxW="600px" minW="400px">
                <Stack position="relative" bg="white" direction="row" alignItems="center" justifyContent="flex-start" w="100%" >
                    <Input _focus={{bg:"none"}}  border="none" placeholder="Buscar productos, marcas y más..." boxShadow="0 1px 2px 0 rgb(0,0,0,0.2)" borderRadius="0"></Input>
                    <Image maxW="20px" src={Search} position="absolute" right="1"></Image>
                </Stack>
                <Stack direction="row"  spacing={3} justifyContent="flex-start" maxW="500px"  w="100%">
                    <Stack direction="row"  alignItems="center" justifyContent="flex-start" >
                        <ButtonNavbar color="grey">
                            <Text>Categorias</Text>
                            <Image src={DownSearch} opacity="0.4" h="20px"/>
                        </ButtonNavbar>  
                    </Stack>
                    <ButtonNavbar>Ofertas</ButtonNavbar>
                    <ButtonNavbar>Historial</ButtonNavbar>
                    <ButtonNavbar>Supermercado</ButtonNavbar>
                    <ButtonNavbar>Historial</ButtonNavbar>
                    <ButtonNavbar>Moda</ButtonNavbar>
                    <ButtonNavbar>Vender</ButtonNavbar>
                </Stack>
            </Stack>
            <Stack direction="column" justifyContent="space-around" alignItems="flex-end" minW="350px" >
                <Text fontWeight="600">Hasta 4 meses de regalo en Disney+</Text>
                <Stack direction="row" fontSize="13px" spacing={3} alignItems="center">
                    <Link to="/register">
                        <ButtonNavbar color="#000">Crear cuenta</ButtonNavbar>
                    </Link>
                     <ButtonNavbar color="#000">Mis compras</ButtonNavbar>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <ButtonNavbar color="#000">Favoritos</ButtonNavbar>    
                        <Image src={DownSearch} h="20px"/>
                    </Stack>
                    <Image src={Notification} h="20px"></Image>
                    <Image src={Shop} h="20px"></Image>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NavbarFullScreen
