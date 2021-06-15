import {extendTheme, theme} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "1020px",
    xxl:"1150px"
  })
  
export default extendTheme({
    colors:{
        brand: {
            navbar: "#fff159;",
            backGroundHome : "#ededed"
        }
        

    },
    breakpoints
})


