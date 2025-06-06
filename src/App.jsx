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
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { ProductProvider } from "./Providers/ProductContext";
import Account from "./Pages/Account";
import Favorite from "./Pages/Favorite";
import { useEffect } from "react";

function App() {
  const ScrollToTopOnRouteChange = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };
  return (
    <Provider>
      <ProductProvider>
        <Box bg="white" minH="100vh">
          <BrowserRouter>
            <ScrollToTopOnRouteChange />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/signin" element={<SignIn />}>
                <Route path="" element={<SignInForm />} />
                <Route path="forgotpassword" element={<ForgotPassward />} />
                <Route path="entercode" element={<EnterCode />} />
                <Route path="resetpassword" element={<UpdatePassward />} />
              </Route>
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ProductProvider>
    </Provider>
  );
}

export default App;
