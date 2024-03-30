import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const AddCartButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>
                Add to Cart
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#4cc671",
        padding: 10,
        borderRadius: 50,
        marginTop: "20%",
        width: "100%",
        alignSelf: "center",
        marginBottom: 6,
    },
    btnText: {
        color: "#f5f5f5",
        alignSelf: "center",
        fontWeight: "bold",
    },
})

export default AddCartButton;