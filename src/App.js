import {ChakraProvider} from "@chakra-ui/react"
import Navbar from "./components/navbar/Navbar"
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../src/components/home/HomePage.js"


function App() {
  return (
    <div className="App">
      <Router>
        <ChakraProvider theme={theme}>
          <Navbar ></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
