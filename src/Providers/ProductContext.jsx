import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProd = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  //   const [productArray, setProductArray] = useState([]);
  //   const [continueArray, setContinueArray] = useState([]);
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Blue Dress",
      image: "image-2.png",
      price: 30.99,
      color: "Blue",
      itemsLeft: 10,
    },
    {
      id: 2,
      name: "Red Dress",
      image: "image.png",
      price: 75.3,
      color: "red",
      itemsLeft: 44,
    },
    {
      id: 3,
      name: "Batman Costime",
      image: "image-5.png",
      price: 44.99,
      color: "black",
      itemsLeft: 33,
    },
    {
      id: 4,
      name: "Orange",
      image: "image-3.png",
      price: 30.99,
      color: "orange",
      itemsLeft: 4,
    },
    {
      id: 5,
      name: "Blue jacket",
      image: "image-6.png",
      price: 75.3,
      color: "blue",
      itemsLeft: 58,
    },
    {
      id: 6,
      name: "Red Skirt",
      image: "image-4.png",
      price: 44.99,
      color: "red",
      itemsLeft: 90,
    },
  ];
  const addCart = (item) => {
    if (!item || typeof item !== "object" || !item.prod.id) {
      console.warn("Attempted to add invalid item to cart:", item);
      return;
    }
    setCart((prev) => [...prev, item]);
    if (cart.length) {
      console.log("cart: ", cart);
    }
  };

  const removeCart = (item) => {
    setCart(cart.filter((i) => i?.prod.id !== item?.prod.id));
  };

  function addToCart(item) {
    console.log("cartItem :", item);
    console.log(cart);
    const exists = inCart(item?.prod.id);
    if (exists) {
      removeCart(item);
      addCart(item);
    } else {
      addCart(item);
    }
  }

  function inCart(itemId) {
    const exists = cart.some((i) => i?.prod.id === itemId);
    return exists;
  }

  //   const addToContinueList = (item) => {
  //     setContinueArray((prev) => [...prev, item]);
  //   };

  //   const removeFromContinue = (item) => {
  //     setContinueArray((prev) => prev.filter((i) => i?.epId !== item?.epId));
  //   };

  //   function addToContinue(item) {
  //     console.log("anime :", item);
  //     console.log(continueArray);
  //     const exists = inContinue(item?.epId);
  //     if (exists) {
  //       removeFromContinue(item);
  //       addToContinueList(item);
  //     } else {
  //       addToContinueList(item);
  //     }
  //   }

  //   function inContinue(itemId) {
  //     const exists = continueArray.some((i) => i?.epId === itemId);
  //     return exists;
  //   }

  return (
    <ProductContext.Provider
      value={{
        products,
        addToCart,
        removeCart,
        cart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
