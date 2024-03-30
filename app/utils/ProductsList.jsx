import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import fetchApi from "./fetch";

const ProductsList = ({ onProductsLoaded }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchApi('products');
                const products = response.products;
                if (Array.isArray(products)) {
                    setProducts(products);
                    onProductsLoaded(products);
                } else {
                    console.error("Invalid products data", products);
                    setProducts([]);
                    onProductsLoaded([]);
                }
            } catch (error) {
                console.error("Error loading all products", error);
                setProducts([]);
                onProductsLoaded([]);
            }
        };

        fetchProducts();
    }, [onProductsLoaded]);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.title}</Text>}
        />
    );
}

export default ProductsList;