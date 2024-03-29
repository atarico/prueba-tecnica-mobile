import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductItem = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
});

export default ProductItem;
