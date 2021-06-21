import { Button } from '@chakra-ui/react'
import React from 'react'

function ButtonNavbar({children,color}) {
    return (
        <Button color={color||"grey"} fontWeight="400" bg="none" _hover={{bg:"none"}} fontSize="14px" padding="0" _focus={{border:"none"}} _active={{bg:"none"}}>{children}</Button>
    )
}

export default ButtonNavbar
