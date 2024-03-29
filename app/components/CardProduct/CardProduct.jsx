import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddCartButton from "../AddCartButton/AddCartButton";

const ProductItem = ({ product }) => {
    const { navigate } = useNavigation();

    const handleViewPress = () => {
        navigate("ProductDetail", { product })
    }
    return (
        <TouchableOpacity
            style={styles.productContainer}
            onPress={handleViewPress}
        >
            <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>Price: ${product.price}</Text>
            </View>
            <AddCartButton />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        marginRight: 16,
        backgroundColor: "#e0e0e0",
        padding: 6,
        borderRadius: 8,
        width: 200,
    },
    productImage: {
        width: "100%",
        height: 100,
        resizeMode: "cover",
        borderRadius: 8,
        marginBottom: 20,
    },
    productInfo: {
        marginLeft: 10,
        justifyContent: "space-between",
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
        color: "#333333",
        flex: 1,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
    },

});

export default ProductItem;
