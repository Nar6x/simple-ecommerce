import React, { createContext, useState, useEffect } from "react";
import firestore from "../config/FirebaseConfig";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await firestore.collection("products").get();
        const productsData = snapshot.docs.map((doc) => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
