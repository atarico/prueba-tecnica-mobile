import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductDetail = () => {
    const { params } = useRoute();
    return (
        <View style={styles.container}>
            <Image source={{ uri: params.product.thumbnail }} style={styles.productImage} />
            <Text style={styles.title}>{params.product.title}</Text>
            <Text style={styles.description}>{params.product.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#173b48",
    }

})

export default ProductDetail;