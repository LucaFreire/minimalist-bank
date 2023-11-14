import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"


export default function BalanceComponent({ user }) {

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    let money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency:"BRL" }).format(user)

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.headerText}>Your current balance: R$</Text>
                </View>
                <View>
                    <Pressable style={{backgroundColor: "gray"}} onPress={toggleShow}>
                        <Text style={styles.headerText}>{show ? "Hide" : "Show"}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.currencyText}>{show ? money : "* * *"}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flexDirection: "column",
        alignContent: 'center',
        marginTop: "10px",
        height: "40%",
        width: "94%",
    },
    headerText: {
        fontSize: "15px",
        color: "white",
        padding: "10px",
    },
    currencyText: {
        justifyContent: "center",
        fontSize: "40px",
        color: "white",
        marginTop: '10vh'
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})