import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"


export default function CurrencyData({ user }) {

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }
    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.headerText}>Your current balance:</Text>
            </View>
            <View style={{ justifyContent: "center", right: "120px", alignItems: "center", flexDirection: "row", gap: "10px" }}>
                <Text style={styles.currencyText}>R$</Text>
                <Text style={styles.currencyText}>{show ? user : "* * *"}</Text>
            </View>
            <View style={{ right: "30px", position: "fixed" }}>
                <Pressable onPress={toggleShow}>
                    <Text style={styles.headerText}>{show ? "Hide" : "Show"}</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: 'center',
        marginTop: "10px",
        height: "40%",
        width: "94%",
    },
    headerText: {
        fontSize: "15px",
        color: "white",
        padding: "10px"
    },
    currencyText: {
        fontSize: "55px",
        color: "white",
        right: "30px"
    }
})