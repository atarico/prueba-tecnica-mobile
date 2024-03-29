import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductDetail = () => {
    const { params } = useRoute();
    const [selectedImage, setSelectedImage] = useState(params.product.thumbnail);

    const handleImagePress = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Image source={{ uri: selectedImage }} style={styles.productImage} />
                    <Text style={styles.title}>{params.product.title}</Text>
                    <Text style={styles.description}>{params.product.description}</Text>
                </View>
                <ScrollView horizontal contentContainerStyle={styles.imageGallery}>
                    {params.product.images.map((imageUrl, index) => (
                        <TouchableOpacity key={index} onPress={() => handleImagePress(imageUrl)}>
                            <Image source={{ uri: imageUrl }} style={styles.galleryImage} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <TouchableOpacity
                    // onPress={handleViewPress}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}
                    >
                        Add to Cart
                    </Text>
                </TouchableOpacity>
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
        marginVertical: 40,
        justifyContent: "space-between",
        backgroundColor: "#296075",
        padding: 20,
        borderRadius: 10,
    },
    productImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        resizeMode: "cover",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
        color: "#fff",
    },
    description: {
        fontSize: 18,
        color: "#fff",
    },
    imageGallery: {
        marginTop: 20,
        maxHeight: 150,
        backgroundColor: "#0594a4",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    galleryImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 8,
        resizeMode: "cover",
    },
    btn: {
        backgroundColor: "#4cc671",
        padding: 10,
        borderRadius: 10,
        marginTop: "20%",
        width: "100%",
        alignSelf: "center"
    },
    btnText: {
        color: "#f5f5f5",
        alignSelf: "center",
        fontWeight: "bold",
    },
});

export default ProductDetail;
