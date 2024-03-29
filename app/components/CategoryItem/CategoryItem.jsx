import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductItem from '../ProductItem/ProductItem';

const CategoryItem = ({ category }) => {
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            <ScrollView horizontal>
                <View style={styles.productsContainer}>
                    {category.products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        marginBottom: 20,
        backgroundColor: '#296075',
        padding: 20,
        borderRadius: 8,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productsContainer: {
        flexDirection: 'row',
    },
});

export default CategoryItem;
