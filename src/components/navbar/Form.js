import { Button } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import React from 'react'
import Search from "../../assets/search.svg"

function Form() {
    return (
        <Stack>
            <FormControl display="flex">
                <Input placeholder="Buscar productos, marcas y mas..."/>
                <Button>
                    <Image src={Search} />
                </Button>
            </FormControl>
        </Stack>
    )
}

export default Form
