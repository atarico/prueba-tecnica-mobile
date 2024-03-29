import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddCartButton from "../../components/AddCartButton/AddCartButton";

const ProductDetail = () => {
    const { params } = useRoute();
    const [selectedImage, setSelectedImage] = useState(params.product.thumbnail);

    const handleImagePress = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const calculateTotalPrice = () => {
        const price = params.product.price || 0;
        const discountPercentage = params.product.discountPercentage || 0;
        return (price - (price * discountPercentage) / 100).toFixed(2);
    };

    const renderPriceWithoutDiscount = () => {
        const priceWithoutDiscount = params.product.price || 0;
        const discountPercentage = params.product.discountPercentage || 0;
        const discountedPrice = calculateTotalPrice();

        if (discountPercentage > 0) {
            return (
                <Text style={styles.priceWithoutDiscountStriked}>
                    ${priceWithoutDiscount.toFixed(2)}
                </Text>
            );
        } else {
            return (
                <Text style={styles.priceWithoutDiscount}>
                    ${priceWithoutDiscount.toFixed(2)}
                </Text>
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: selectedImage }} style={styles.productImage} />
                <ScrollView horizontal contentContainerStyle={styles.imageGalleryContainer} style={styles.imageGallery}>
                    {params.product.images.map((imageUrl, index) => (
                        <TouchableOpacity key={index} onPress={() => handleImagePress(imageUrl)}>
                            <Image source={{ uri: imageUrl }} style={styles.galleryImage} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.title}>{params.product.title}</Text>
                        <Text style={styles.description}>{params.product.description}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <View>
                            {renderPriceWithoutDiscount()}
                            <Text style={styles.discount}>% {params.product.discountPercentage}</Text>
                        </View>
                        <View>
                            <Text style={styles.totalToPayText}>Total:</Text>
                            <Text style={styles.totalToPayNumber}>
                                {calculateTotalPrice()}
                            </Text>
                        </View>
                    </View>
                </View>

                <AddCartButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#173b48",
    },
    content: {
        flex: 1,
        backgroundColor: "#296075",
        padding: 20,
        borderRadius: 10,
    },
    productImage: {
        width: "100%",
        height: 230,
        borderRadius: 8,
        resizeMode: "cover",
    },
    imageGallery: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        maxHeight: 130,
        backgroundColor: "#0594a4",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    imageGalleryContainer: {
        alignItems: "center",
    },
    galleryImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 8,
        resizeMode: "cover",
    },
    infoContainer: {
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
        color: "#000",
    },
    description: {
        fontSize: 18,
        color: "#333",
        marginLeft: 10,
    },
    priceContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    priceWithoutDiscount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    priceWithoutDiscountStriked: {
        fontSize: 20,
        color: "#f00",
        textDecorationLine: "line-through",
    },
    discount: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
    },
    totalToPayText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    totalToPayNumber: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#4cc671",
    },
});

export default ProductDetail;
