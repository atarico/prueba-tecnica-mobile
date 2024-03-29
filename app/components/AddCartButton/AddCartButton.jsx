import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const AddCartButton = () => {

    return (
        <TouchableOpacity style={styles.btn}>
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
        borderRadius: 10,
        marginTop: "20%",
        width: "100%",
        alignSelf: "center",
    },
    btnText: {
        color: "#f5f5f5",
        alignSelf: "center",
        fontWeight: "bold",
    },
})

export default AddCartButton;