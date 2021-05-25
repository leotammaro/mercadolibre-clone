import {Stack } from "@chakra-ui/react"
import React from 'react'
import FormSearch from "./FormSearch"
import LeftDivNavbar from "./LeftDivNavbar"
import RigthDivNavbar from "./RigthDivNavbar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "../home/Home"

function Navbar() {
    return (
        <Router>
            <Stack bg="brand.navbar" w="100%" alignItems="center" borderBottom="1px"  borderColor="gray.300">
                <Stack  spacing={0} direction="row" justifyContent="center" w="1100px">
                    <Stack direction="column">
                        <FormSearch/>
                        <LeftDivNavbar/>
                    </Stack>
                    <RigthDivNavbar/>
                </Stack>
            </Stack>
            <Stack h="100%" bg="brand.backGroundHome">
                <Switch>
                    <Route exact path="/" >
                        <Home/>
                    </Route>
                </Switch>
            </Stack>
        </Router>
    )
}

export default Navbar 
