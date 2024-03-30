import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            const price = item.price || 0;
            const discountPercentage = item.discountPercentage || 0;
            const discountedPrice = price - (price * discountPercentage) / 100;
            total += discountedPrice;
        });
        return total.toFixed(2);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    cartItems.length === 0 ? (
                        <Text style={styles.cartEmptyMessage}>
                            Your cart is empty 😢
                        </Text>
                    ) :
                        cartItems.map((product, index) => (
                            <View key={index} style={styles.content}>
                                <Image source={{ uri: product.thumbnail }} style={styles.image} />
                                <View style={styles.infoContainer}>
                                    <View>
                                        <Text style={styles.title}>{product.title}</Text>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <View>
                                            <Text style={styles.price}>
                                                ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromCart(product.id)}>
                                    <Text style={styles.removeButtonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        ))

                }
            </ScrollView>
            <View style={styles.totalToPayContainer}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalToPay}>${calculateTotal()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 6,
        backgroundColor: "#173b48",
    },
    cartEmptyMessage: {
        fontSize: 20,
        color: "#f5f5f5",
        textAlign: "center",
        marginTop: 60,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    content: {
        flexDirection: "row",
        backgroundColor: "#296075",
        paddingHorizontal: 4,
        paddingVertical: 10,
        borderRadius: 8,
        marginVertical: 10,
        alignItems: "center",
    },
    infoContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginHorizontal: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#f5f5f5",
        marginBottom: 4,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#f5f5f5",
    },
    removeButton: {
        height: 40,
        backgroundColor: "#f00",
        padding: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    removeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    totalToPayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",
        paddingVertical: 20,
        borderRadius: 8,
    },
    totalText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    totalToPay: {
        fontSize: 20,
        fontWeight: "bold",
    }

});

export default Cart;