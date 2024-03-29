import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>FurniPro</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image
                    source={require('../../../assets/GitHub-Symbol.png')}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#296075",
    },
    leftContainer: {
        flex: 1,
        alignItems: "flex-start",
    },
    rightContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    title: {
        color: "#f5f5f5",
        fontSize: 20,
        fontWeight: "bold",
    },
    image: {
        width: 50,
        height: 50,
    },

})

export default Header;