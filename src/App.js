import {ChakraProvider} from "@chakra-ui/react"
import Navbar from "./components/navbar/Navbar"
import {Stack} from '@chakra-ui/react'
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../src/components/home/HomePage.js"
import React from "react"
import "./firebase"
import Register from "./components/register/Register";

function App() {

  return (
    <Stack bg="#ebebeb"  minH="100vh" >
      <Router>
        <ChakraProvider theme={theme}>
          <Navbar ></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
          </Switch>
        </ChakraProvider>
      </Router>
    </Stack>
  );
}

export default App;
