import { Box } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <Provider>
      <Box bg="white" minH="100vh">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
