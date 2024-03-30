// Home.js
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { FlatList, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import ProductItem from "../../components/CardProduct/CardProduct";
import CategoryModal from '../../components/CategoryModal/CategoryModal';
import Header from '../../components/Header/Header';
import ProductsList from '../../utils/ProductsList';

const Home = () => {
    const [productsByCategory, setProductsByCategory] = useState([]);

    const handleProductsLoaded = (products) => {
        const productsGroupedByCategory = groupProductsByCategory(products);
        setProductsByCategory(productsGroupedByCategory);
    };

    const groupProductsByCategory = (products) => {
        if (!Array.isArray(products)) {
            console.error("Invalid products data", products);
            return [];
        }

        const groupedProducts = {};
        products.forEach(product => {
            if (!groupedProducts[product.category]) {
                groupedProducts[product.category] = [];
            }
            groupedProducts[product.category].push(product);
        });
        return Object.entries(groupedProducts).map(([category, products]) => ({ category, products }));
    };

    const renderCategory = ({ item }) => (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item.category}</Text>
            <ScrollView horizontal>
                <View style={styles.productsContainer}>
                    {item.products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header />
            <CategoryModal />
            <ProductsList onProductsLoaded={handleProductsLoaded} />
            <View>
                <FlatList
                    data={productsByCategory}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderCategory}
                />
                <StatusBar style="light" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" && 50,
        paddingBottom: 100,
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#173b48',
    },
    categoryContainer: {
        marginBottom: 20,
        backgroundColor: "#296075",
        padding: 20,
        borderRadius: 8,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#f5f5f5",

    },
    productsContainer: {
        flexDirection: "row",
    },
});

export default Home;