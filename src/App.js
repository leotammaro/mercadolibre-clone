import {ChakraProvider} from "@chakra-ui/react"
import Navbar from "./components/navbar/Navbar"
import theme from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <ChakraProvider theme={theme}>
          <Navbar ></Navbar>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
