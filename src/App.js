import {ChakraProvider} from "@chakra-ui/react"
import Navbar from "./components/navbar/Navbar"
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Navbar ></Navbar>
      </ChakraProvider>
    </div>
  );
}

export default App;
