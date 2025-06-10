import { createContext, useContext, useState } from "react";

//CONTEXT AND CONTEXT PROVIDER FOR THE PRODUCTA, ADD TO CART AND ADD TO FAVORITE FUNCTIONS
const ProductContext = createContext();

export const useProd = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const products = [
    {
      id: 1,
      name: "Blue Dress",
      image: "image-2.png",
      price: 30.99,
      color: "Blue",
      itemsLeft: 10,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 4.5,
      sizes: ["S", "XL"],
      isSoldout: false,
    },
    {
      id: 2,
      name: "Red Dress",
      image: "image.png",
      price: 75.3,
      color: "red",
      itemsLeft: 0,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 2.9,
      sizes: ["S", "M", "L"],
      isSoldout: true,
    },
    {
      id: 3,
      name: "Batman Costime",
      image: "image-5.png",
      price: 44.99,
      color: "black",
      itemsLeft: 33,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 5,
      sizes: ["S", "M", "L", "XL"],
      isSoldout: false,
    },
    {
      id: 4,
      name: "Orange",
      image: "image-3.png",
      price: 70.35,
      color: "orange",
      itemsLeft: 4,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 3.5,
      sizes: ["S"],
      isSoldout: false,
    },
    {
      id: 5,
      name: "Blue jacket",
      image: "image-6.png",
      price: 29.3,
      color: "blue",
      itemsLeft: 58,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 3.9,
      sizes: ["S", "M"],
      isSoldout: false,
    },
    {
      id: 6,
      name: "Red Skirt",
      image: "image-4.png",
      price: 100.99,
      color: "red",
      itemsLeft: 0,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 4,
      sizes: ["S", "M", "L"],
      isSoldout: true,
    },
    {
      id: 7,
      name: "Red Skirt",
      image: "59.jpg.png",
      price: 20.99,
      color: "red",
      itemsLeft: 99,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 4,
      sizes: ["S", "M", "L"],
      isSoldout: false,
    },
    {
      id: 8,
      name: "Red Skirt",
      image: "46.png",
      price: 95.77,
      color: "red",
      itemsLeft: 12,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 4,
      sizes: ["S", "M", "L"],
      isSoldout: true,
    },
    {
      id: 9,
      name: "Red Skirt",
      image: "54.png",
      price: 102.35,
      color: "red",
      itemsLeft: 20,
      colors: [
        { col: "#FF6C6C", name: "Pink" },
        { col: "#FF7629", name: "Orange" },
        { col: "#FFF06C", name: "Yellow" },
      ],
      rating: 4,
      sizes: ["S", "M", "L"],
      isSoldout: false,
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

  function inFavorite(item) {
    const exists = favorite.some((i) => i?.id == item?.id);
    return exists;
  }

  function addToFavorite(item) {
    console.log("item: ", item);
    const exist = inFavorite(item);
    if (exist) {
      setFavorite(favorite.filter((i) => i.id !== item.id));
    } else {
      setFavorite((prev) => [...prev, item]);
    }
  }

  function inCart(itemId) {
    const exists = cart.some((i) => i?.prod.id === itemId);
    return exists;
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addToCart,
        removeCart,
        cart,
        addToFavorite,
        inFavorite,
        favorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
