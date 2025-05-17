import { Box } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import { Provider } from "./components/ui/provider";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import SignInForm from "./components/SignInForm";
import ForgotPassward from "./components/ForgotPassward";
import EnterCode from "./components/EnterCode";
import Shop from "./Pages/Shop";
import UpdatePassward from "./components/UpdatePassward";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <Provider>
      <Box bg="white" minH="100vh">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<SignIn />}>
              <Route path="" exact element={<SignInForm />} />
              <Route path="forgotpassward" exact element={<ForgotPassward />} />
              <Route path="entercode" exact element={<EnterCode />} />
              <Route path="resetpassward" exact element={<UpdatePassward />} />
            </Route>
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
